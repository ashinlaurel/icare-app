/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */

export const aroutes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/app/notifications", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Notifications", // name that appear in Sidebar
  },
  // ---------------Calls---------------------------------------------
  {
    icon: "HomeIcon",
    name: "Calls",
    routes: [
      // submenu

      {
        path: "/app/registercall",
        name: "Register Call",
      },
      {
        path: "/app/assignEng",
        name: "Assign Engineer",
      },
      {
        path: "/app/viewcalls",
        name: "View Calls",
      },
    ],
  },
  // ---------------Assets---------------------------------------------

  {
    icon: "HomeIcon",
    name: "Assets ",
    routes: [
      // submenu
      {
        path: "/app/assets",
        name: "Assets",
      },
      {
        path: "/app/assets/create",
        name: "Create Assets",
      },
      // {
      //   path: "/app/assets/update",
      //   name: "Edit Assets",
      // },
    ],
  },

  // ---------------Inventory---------------------------------------------
  {
    icon: "HomeIcon",
    name: "Inventory",
    routes: [
      // submenu
      {
        path: "/app/inventory",
        name: "Inventory",
      },
      {
        path: "/app/inventory/purchase",
        name: "Purchase Items",
      },
      {
        path: "/app/inventory/purchasehistory",
        name: "Purchase History",
      },
      {
        path: "/app/inventory/create",
        name: "Add Item",
      },
      // {
      //   path: "/app/customer/createunit",
      //   name: "Add Unit",
      // },
    ],
  },
  // ---------------Customers---------------------------------------------
  {
    icon: "HomeIcon",
    name: "Customers",
    routes: [
      // submenu
      {
        path: "/app/customer",
        name: "Customer List",
      },
      {
        path: "/app/customer/create",
        name: "Add Customer",
      },
      // {
      //   path: "/app/customer/createunit",
      //   name: "Add Unit",
      // },
    ],
  },

  // ---------------Employee---------------------------------------------
  {
    icon: "HomeIcon",
    name: "Employee",
    routes: [
      // submenu

      {
        path: "/app/employee",
        name: "Employee List",
      },
      {
        path: "/app/CreateEmployee",
        name: "Add Employee",
      },
      {
        path: "/app/paysalary",
        name: "Pay Salary",
      },
      {
        path: "/app/salaryhistory",
        name: "Salary History",
      },
    ],
  },

  // ---------------LST---------------------------------------------
  {
    icon: "HomeIcon",
    name: "LST",
    routes: [
      // submenu

      {
        path: "/app/lst",
        name: "LST",
      },
      {
        path: "/app/lst/history",
        name: "LST History",
      },
    ],
  },

  // {
  //   path: "/app/forms",
  //   icon: "FormsIcon",
  //   name: "Forms",
  // },
  // {
  //   path: "/app/cards",
  //   icon: "CardsIcon",
  //   name: "Cards",
  // },
  // {
  //   path: "/app/charts",
  //   icon: "ChartsIcon",
  //   name: "Charts",
  // },
  // {
  //   path: "/app/buttons",
  //   icon: "ButtonsIcon",
  //   name: "Buttons",
  // },
  // {
  //   path: "/app/modals",
  //   icon: "ModalsIcon",
  //   name: "Modals",
  // },
  // {
  //   path: "/app/tables",
  //   icon: "TablesIcon",
  //   name: "Tables",
  // },
  // {
  //   icon: "PagesIcon",
  //   name: "Pages",
  //   routes: [
  //     // submenu
  //     {
  //       path: "/login",
  //       name: "Login",
  //     },
  //     {
  //       path: "/create-account",
  //       name: "Create account",
  //     },
  //     {
  //       path: "/forgot-password",
  //       name: "Forgot password",
  //     },
  //     {
  //       path: "/app/404",
  //       name: "404",
  //     },
  //     {
  //       path: "/app/blank",
  //       name: "Blank",
  //     },
  //   ],
  // },
];
export const croutes = [
  //  Customer Views
  {
    icon: "HomeIcon",
    name: "My Assets",
    routes: [
      // submenu
      {
        path: "/app/myassets/accounts",
        name: "Accounts",
      },
      {
        path: "/app/myassets/accounts",
        name: "Units",
      },
    ],
  },
];

// export { aroutes, croutes };
