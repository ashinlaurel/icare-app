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

  // ---------------Notifications---------------------------------------------
  {
    icon: "HomeIcon",
    name: "Notifications",
    routes: [
      // submenu
      {
        path: "/app/notifications", // the url
        icon: "HomeIcon", // the component being exported from icons/index.js
        name: "LST Notifications", // name that appear in Sidebar
      },

      {
        path: "/app/leavehistory",
        name: "Leave History",
      },
    ],
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
      // {
      //   path: "/app/AssignCallPriority",
      //   name: "Assign Call Priority",
      // },
      {
        path: "/app/viewcalls",
        name: "Update Calls",
      },
      {
        path: "/app/EnggPriorityList",
        name: "Call Priority View",
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
      {
        path: "/app/assets/multiupdate",
        name: "Multi Update",
      },
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
        path: "/app/inventory/scrapsoldpage",
        name: "Sell Scrap",
      },
      {
        path: "/app/inventory/scrapsalehistory",
        name: "Scrap History",
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
      {
        path: "/app/viewAttendance",
        name: "View Attendance",
      },
      {
        path: "/app/leavehistory",
        name: "Leave History",
      },
    ],
  },

  // ---------------Vendor---------------------------------------------
  {
    icon: "HomeIcon",
    name: "Vendor",
    routes: [
      // submenu

      {
        path: "/app/vendorlist",
        name: "Vendor List",
      },
      {
        path: "/app/createvendor",
        name: "Add Vendor",
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

  // ---------------Downloadables ----------------------------------
  {
    path: "/app/reports", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Reports", // name that appear in Sidebar
  },

  // ---------------Downloadables ----------------------------------
  {
    path: "/app/downloads", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Downloads", // name that appear in Sidebar
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
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
  },
  //  Customer Views
  {
    icon: "HomeIcon",
    name: "My Assets",
    routes: [
      // submenu
      {
        path: "/app/myassets",
        name: "My Assets",
      },
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
  {
    icon: "HomeIcon",
    name: "Calls",
    routes: [
      // submenu
      {
        path: "/app/raiseCall",
        name: "Raise Call",
      },
      {
        path: "/app/viewmycalls",
        name: "View My Calls",
      },
    ],
  },
];

export const enggroutes = [
  //  Customer Views
  {
    icon: "HomeIcon",
    name: "My Calls",
    routes: [
      // submenu
      {
        path: "/app/engcalls/viewmycalls",
        name: "View My Calls",
      },
    ],
  },
  // ---------------------- Attendance ----------
  {
    icon: "HomeIcon",
    name: "Attendance",
    routes: [
      // submenu
      {
        path: "/app/markAttendance",
        name: "Mark Attendance",
      },
      {
        path: "/app/applyleave",
        name: "Leave Application",
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
  {
    path: "/app/downloads", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Downloads", // name that appear in Sidebar
  },
];

// export { aroutes, croutes };

export const storekeeproutes = [
  {
    path: "/app/notifications", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Notifications", // name that appear in Sidebar
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
        path: "/app/inventory/scrapsoldpage",
        name: "Sell Scrap",
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
  // --------------------Attendance -------------------------
  {
    icon: "HomeIcon",
    name: "Attendance",
    routes: [
      // submenu
      {
        path: "/app/markAttendance",
        name: "Mark Attendance",
      },
      {
        path: "/app/applyleave",
        name: "Leave Application",
      },
    ],
  },
];

export const ostorekeeproutes = [
  {
    path: "/app/notifications", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Notifications", // name that appear in Sidebar
  },
  //  Customer Views
  {
    icon: "HomeIcon",
    name: "My Calls",
    routes: [
      // submenu
      {
        path: "/app/engcalls/viewmycalls",
        name: "View My Calls",
      },
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
      {
        path: "/app/inventory/scrapsoldpage",
        name: "Sell Scrap",
      },
      // {
      //   path: "/app/customer/createunit",
      //   name: "Add Unit",
      // },
    ],
  },
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

  // --------------------Attendance -------------------------
  {
    icon: "HomeIcon",
    name: "Attendance",
    routes: [
      // submenu
      {
        path: "/app/markAttendance",
        name: "Mark Attendance",
      },
      {
        path: "/app/applyleave",
        name: "Leave Application",
      },
    ],
  },
  // ---------------------------- Downloads -------------------------------
  {
    path: "/app/downloads", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Downloads", // name that appear in Sidebar
  },
];

export const accountsroutes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
  },

  // ---------------Notifications---------------------------------------------
  {
    icon: "HomeIcon",
    name: "Notifications",
    routes: [
      // submenu
      {
        path: "/app/notifications", // the url
        icon: "HomeIcon", // the component being exported from icons/index.js
        name: "LST Notifications", // name that appear in Sidebar
      },

      {
        path: "/app/leavehistory",
        name: "Leave History",
      },
    ],
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
      // {
      //   path: "/app/AssignCallPriority",
      //   name: "Assign Call Priority",
      // },
      {
        path: "/app/viewcalls",
        name: "Update Calls",
      },
      {
        path: "/app/EnggPriorityList",
        name: "Call Priority View",
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
        path: "/app/inventory/scrapsoldpage",
        name: "Sell Scrap",
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
      {
        path: "/app/viewAttendance",
        name: "View Attendance",
      },
      {
        path: "/app/leavehistory",
        name: "Leave History",
      },
    ],
  },

  // ---------------Vendor---------------------------------------------
  {
    icon: "HomeIcon",
    name: "Vendor",
    routes: [
      // submenu

      {
        path: "/app/vendorlist",
        name: "Vendor List",
      },
      {
        path: "/app/createvendor",
        name: "Add Vendor",
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

  // ---------------Downloadables ----------------------------------
  {
    path: "/app/downloads", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Downloads", // name that appear in Sidebar
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

export const coordinatorroutes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
  },

  // ---------------Notifications---------------------------------------------
  {
    icon: "HomeIcon",
    name: "Notifications",
    routes: [
      // submenu
      {
        path: "/app/notifications", // the url
        icon: "HomeIcon", // the component being exported from icons/index.js
        name: "LST Notifications", // name that appear in Sidebar
      },

      {
        path: "/app/leavehistory",
        name: "Leave History",
      },
    ],
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
      // {
      //   path: "/app/AssignCallPriority",
      //   name: "Assign Call Priority",
      // },
      {
        path: "/app/viewcalls",
        name: "Update Calls",
      },
      {
        path: "/app/EnggPriorityList",
        name: "Call Priority View",
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
      {
        path: "/app/inventory/scrapsoldpage",
        name: "Sell Scrap",
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

  // ---------------Employee---------------------------------------------
  {
    icon: "HomeIcon",
    name: "Employee",
    routes: [
      {
        path: "/app/viewAttendance",
        name: "View Attendance",
      },
      {
        path: "/app/leavehistory",
        name: "Leave History",
      },
    ],
  },

  // ---------------Downloadables ----------------------------------
  {
    path: "/app/downloads", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Downloads", // name that appear in Sidebar
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
