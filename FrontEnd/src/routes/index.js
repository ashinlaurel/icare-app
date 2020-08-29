import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Forms = lazy(() => import("../pages/Forms"));
const Cards = lazy(() => import("../pages/Cards"));
const Charts = lazy(() => import("../pages/Charts"));
const Buttons = lazy(() => import("../pages/Buttons"));
const Modals = lazy(() => import("../pages/Modals"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
// -----------------------Assets Import ----------------------------------------------------------------
const Assets = lazy(() => import("../pages/Assets/Assets"));
const CreateAsset = lazy(() => import("../pages/Assets/CreateAsset"));
const UpdateAsset = lazy(() => import("../pages/Assets/UpdateAsset"));
//-----------------------Customer Imports -------------------------------------------------------------
const CreateCustomer = lazy(() => import("../pages/Customers/CreateCustomer"));
const CreateUnit = lazy(() => import("../pages/Customers/CreateUnit"));
const CustomerList = lazy(() => import("../pages/Customers/CustomerList"));
const AccountsList = lazy(() => import("../pages/Customers/AccountsList"));
const UnitsList = lazy(() => import("../pages/Customers/UnitsList"));
const UnitsAsset = lazy(() => import("../pages/Customers/UnitAsset"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  // Assets --------------------------------------------------
  {
    path: "/assets", // the url
    component: Assets, // view rendered
  },
  {
    path: "/assets/create", // the url
    component: CreateAsset, // view rendered
  },
  {
    path: "/assets/update", // the url
    component: UpdateAsset, // view rendered
  },
  // Customer --------------------------------------------------
  {
    path: "/customer/create",
    component: CreateCustomer,
  },
  {
    path: "/customer/createunit",
    component: CreateUnit,
  },
  //-------------- Customer List  Routes----------------
  {
    path: "/customer",
    component: CustomerList,
  },
  {
    path: "/customer/accounts/:id",
    component: AccountsList,
  },
  {
    path: "/customer/accounts/units/:id/:accountid",
    component: UnitsList,
  },
  {
    path: "/customer/accounts/units/:id/:accountid/:unitid",
    component: UnitsAsset,
  },
  {
    path: "/forms",
    component: Forms,
  },
  {
    path: "/cards",
    component: Cards,
  },
  {
    path: "/charts",
    component: Charts,
  },
  {
    path: "/buttons",
    component: Buttons,
  },
  {
    path: "/modals",
    component: Modals,
  },
  {
    path: "/tables",
    component: Tables,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
