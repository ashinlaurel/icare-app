// Rendered staging UI tests. Synthetic API responses; all asset writes intercepted.
const fs = require('fs');
const assert = require('assert');
const puppeteer = require('/srv/icare/current/Backend/node_modules/puppeteer');
const ids = { customer: '1'.repeat(24), account: '2'.repeat(24), unit: '3'.repeat(24),
  otherCustomer: '4'.repeat(24), otherAccount: '5'.repeat(24), otherUnit: '6'.repeat(24) };
const customer = { _id: ids.customer, name: 'SAME NAME', role: 1 };
const otherCustomer = { _id: ids.otherCustomer, name: 'OTHER CUSTOMER', role: 1 };
const account = { _id: ids.account, name: 'SAME NAME', role: 2, parentCustomerId: ids.customer };
const otherAccount = { _id: ids.otherAccount, name: 'OTHER ACCOUNT', role: 2, parentCustomerId: ids.otherCustomer };
const unit = { _id: ids.unit, unitName: 'EXAMPLE UNIT', customerId: ids.customer, accountId: ids.account };
const otherUnit = { _id: ids.otherUnit, unitName: 'OTHER UNIT', customerId: ids.otherCustomer, accountId: ids.otherAccount };
const result = { checks: [], submissions: [], alerts: [] };
let holdUnits = false, pendingUnits, holdAccounts = false, pendingAccounts;
if (process.env.APP_ENV !== 'staging') throw Error('This UI probe is staging-only');
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome-stable',
    headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  try {
    const page = await browser.newPage(); await page.setViewport({ width: 1440, height: 1100 });
    page.on('dialog', async d => { result.alerts.push(d.message()); await d.accept(); });
    await page.setRequestInterception(true);
    page.on('request', req => { (async () => {
      const url = new URL(req.url());
      if (!url.pathname.startsWith('/api/')) return req.continue();
      const body = req.postData() ? JSON.parse(req.postData()) : {};
      const respond = (data, status = 200) => req.respond({ status, contentType: 'application/json', body: JSON.stringify(data) });
      if (url.pathname === '/api/customer/customers') return respond([customer, otherCustomer, account]);
      if (url.pathname === '/api/customer/accounts') {
        if (holdAccounts && body.customerId === ids.customer) { pendingAccounts = req; return; }
        return respond(body.customerId === ids.customer ? [account, customer, otherAccount] : [otherAccount]);
      }
      if (url.pathname === '/api/customer/units') {
        if (holdUnits && body.accountId === ids.otherAccount) { pendingUnits = req; return; }
        return respond(body.accountId === ids.account ? [unit, otherUnit] : [otherUnit]);
      }
      if (/\/api\/asset\/[^/]+\/create$/.test(url.pathname)) {
        result.submissions.push(body.asset);
        return result.submissions.length === 2 ? respond({ error: 'Synthetic validation rejection' }, 400) : respond({ testOnly: true });
      }
      if (req.method() !== 'GET' && !/\/admin\/(signin|signInTest\/)/.test(url.pathname)) return respond({ error: 'Test blocked nonessential request' }, 400);
      return req.continue();
    })().catch(() => req.abort().catch(() => {})); });
    const pause = () => new Promise(resolve => setTimeout(resolve, 500));
    const click = async text => {
      await page.waitForFunction(t => [...document.querySelectorAll('button,a,[role=tab],tr,li')].some(e => e.textContent.trim() === t && e.getBoundingClientRect().height > 0), {}, text);
      await page.evaluate(t => [...document.querySelectorAll('button,a,[role=tab],tr,li')].filter(e => e.textContent.trim() === t && e.getBoundingClientRect().height > 0).pop().click(), text);
    };
    const waitTab = text => page.waitForFunction(t => document.querySelector('[role=tab][aria-selected=true]').textContent.trim() === t, {}, text);
    const pending = async read => { for (let i = 0; i < 100 && !read(); i++) await new Promise(r => setTimeout(r, 20)); assert.ok(read()); };
    const heading = () => page.evaluate(() => [...document.querySelectorAll('h1,h2,h3,h4,p')].map(e => e.textContent.trim()).find(t => t.startsWith('Customer:')));
    const fill = async () => {
      await click('Pick Products'); await click('Desktop'); await page.waitForSelector('input[placeholder=Brand]', { visible: true }); await pause();
      await page.type('input[placeholder=Brand]', 'SYNTHETIC'); await page.type('input[placeholder=Model]', 'UI TEST'); await page.type('input[placeholder="Serial Number"]', 'NEVER-SAVED');
      await page.evaluate(() => {
        const select = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set;
        const input = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
        const business = [...document.querySelectorAll('select')].find(e => [...e.options].some(o => o.value === 'NOS'));
        select.call(business, 'NOS'); business.dispatchEvent(new Event('change', { bubbles: true }));
        const location = [...document.querySelectorAll('select')].find(e => [...e.options].some(o => o.text === 'Trivandrum'));
        select.call(location, [...location.options].find(o => o.text === 'Trivandrum').value); location.dispatchEvent(new Event('change', { bubbles: true }));
        const po = [...document.querySelectorAll('label')].find(l => /Purchase Order Number/.test(l.textContent)).querySelector('input');
        input.call(po, 'UI-TEST-NOT-SAVED'); po.dispatchEvent(new Event('input', { bubbles: true }));
      });
    };
    await page.goto('http://127.0.0.1:8081/admin/signin', { waitUntil: 'networkidle2' });
    await page.type('input[type=email]', process.env.TEST_ADMIN_EMAIL); await page.type('input[type=password]', process.env.TEST_ADMIN_PASSWORD);
    await click('Log in'); await page.waitForFunction(() => location.pathname.startsWith('/app'));
    await page.goto('http://127.0.0.1:8081/app/assets/create', { waitUntil: 'networkidle2' });
    await click('Pick Customer'); await click('SAME NAME'); await waitTab('Account'); await click('SAME NAME'); await waitTab('Unit'); await click('EXAMPLE UNIT'); await click('Select'); await pause();
    assert.ok((await heading()).includes('Customer: SAME NAME Account: SAME NAME Unit: EXAMPLE UNIT'));
    result.checks.push('same-name records selected by distinct IDs; wrong-role/foreign options filtered');

    holdUnits = true;
    await click('Pick Customer'); await click('OTHER CUSTOMER'); await waitTab('Account'); await click('OTHER ACCOUNT'); await pending(() => pendingUnits);
    const blocked = await page.evaluate(() => ({
      oldUnitVisible: [...document.querySelectorAll('tr')].some(e => e.textContent.trim() === 'EXAMPLE UNIT' && e.getBoundingClientRect().height > 0),
      selectDisabled: [...document.querySelectorAll('button')].find(b => b.textContent.trim() === 'Select').disabled,
      unitTabDisabled: [...document.querySelectorAll('[role=tab]')].find(t => t.textContent.trim() === 'Unit').getAttribute('aria-disabled'),
    }));
    assert.strictEqual(blocked.oldUnitVisible, false); assert.strictEqual(blocked.selectDisabled, true); assert.strictEqual(blocked.unitTabDisabled, 'true');
    await page.keyboard.press('Escape'); await pause(); holdUnits = false;
    await pendingUnits.respond({ status: 200, contentType: 'application/json', body: JSON.stringify([otherUnit]) }); await pause();
    assert.ok((await heading()).includes('Customer: SAME NAME Account: SAME NAME Unit: EXAMPLE UNIT'));
    result.checks.push('stale units cleared, loading tab/confirmation locked, cancellation preserves committed hierarchy');
    await fill(); await click('Submit'); await click('Create Asset'); await pause();
    assert.strictEqual(result.submissions[0].customerId, ids.customer); assert.strictEqual(result.submissions[0].accountId, ids.account); assert.strictEqual(result.submissions[0].unitId, ids.unit);
    result.checks.push('normal create payload keeps the correct same-name hierarchy');

    holdAccounts = true;
    await click('Pick Customer'); await click('SAME NAME'); await pending(() => pendingAccounts); await click('Customer'); await click('OTHER CUSTOMER'); await waitTab('Account'); await click('OTHER ACCOUNT'); await waitTab('Unit');
    holdAccounts = false;
    await pendingAccounts.respond({ status: 200, contentType: 'application/json', body: JSON.stringify([account]) }); await pause();
    await click('OTHER UNIT'); await click('Select'); await pause();
    assert.ok((await heading()).includes('Customer: OTHER CUSTOMER Account: OTHER ACCOUNT Unit: OTHER UNIT'));
    result.checks.push('late previous-customer response cannot overwrite newer account/unit choices');
    await fill(); await click('Submit'); await click('Create Asset'); await pause();
    assert.ok(result.alerts.includes('Synthetic validation rejection'));
    await click('Cancel'); await pause();
    const po = await page.evaluate(() => [...document.querySelectorAll('label')].find(l => /Purchase Order Number/.test(l.textContent)).querySelector('input').value);
    assert.strictEqual(po, 'UI-TEST-NOT-SAVED');
    assert.ok((await heading()).includes('OTHER UNIT'));
    result.checks.push('API rejection is visible and keeps entered fields and confirmed hierarchy');
    fs.writeFileSync('/var/lib/icare-audits/hierarchy-selector-ui-result.json', JSON.stringify(result, null, 2), { mode: 0o600 });
    console.log(JSON.stringify({ status: 'passed', checks: result.checks, interceptedSubmissions: result.submissions.length, databaseWrites: 0 }));
  } finally { await browser.close(); }
})().catch(error => { console.error(error.stack); process.exitCode = 1; });
