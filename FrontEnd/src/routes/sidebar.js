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

  // ---------------Customers---------------------------------------------
  {
    icon: "HomeIcon",
    name: "Employee",
    routes: [
      // submenu

      {
        path: "/app/CreateEmployee",
        name: "Add Employee",
      },
      // {
      //   path: "/app/customer/createunit",
      //   name: "Add Unit",
      // },
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
