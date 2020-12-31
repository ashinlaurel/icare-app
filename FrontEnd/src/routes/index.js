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
const UnitDetails = lazy(() => import("../pages/Customers/UnitDetails"));
const UpdateUnit = lazy(() => import("../pages/Customers/UpdateUnit"));
const UnitsAsset = lazy(() => import("../pages/Customers/UnitAsset"));
const CustomerDetails = lazy(() =>
  import("../pages/Customers/CustomerDetails")
);
const CreateEmployee = lazy(() => import("../pages/Employee/CreateEmployee"));
const UpdateCustomer = lazy(() => import("../pages/Customers/UpdateCustomer"));
//--------------------------- My Asset Imports------------------
const ViewAccounts = lazy(() => import("../pages/MyAssets/ViewAccounts"));

//--------------------------- My Asset Imports------------------
const EmpProfile = lazy(() => import("../pages/Employee/EmpProfilePage"));
const CustProfile = lazy(() => import("../pages/Customers/CustProfilePage"));
// ---------------------------Single Asset View ------------------------
const AssetView = lazy(() => import("../pages/ViewAsset/Assetview"));
const RegisterCall = lazy(() => import("../pages/Calls/RegisterCall"));
const AssignEng = lazy(() => import("../pages/Calls/AssignEng"));
const ViewCalls = lazy(() => import("../pages/Calls/ViewCalls"));
const UpdateAssetFromCall = lazy(() =>
  import("../pages/Calls/UpdateAssetFromCall")
);

// ----------------------------- Inventory Imports
const CreateInvent = lazy(() => import("../pages/Inventory/CreateInvent"));
const Inventory = lazy(() => import("../pages/Inventory/Inventory"));

// ------------------------------- Employee Imports

const EmployeeDetails = lazy(() => import("../pages/Employee/EmployeeDetails"));
const EmployeeList = lazy(() => import("../pages/Employee/EmployeeList"));
const EmployeeUpdate = lazy(() => import("../pages/Employee/EmployeeUpdate"));


// ------------------------------- LST Imports

const LST = lazy(() => import("../pages/LST/LST"));

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
export const aroutes = [
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
    path: "/assets/assetview", // the url
    component: AssetView, // view rendered
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
  {
    path: "/customer/getCustomerById/:id",
    component: CustomerDetails,
  },
  {
    path: "/customer/:id/update",
    component: UpdateCustomer,
  },
  {
    path: "/unit/getUnitById/:id",
    component: UnitDetails,
  },
  {
    path: "/unit/:id/update",
    component: UpdateUnit,
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
  // ---------------------- My Asset Views ----------------------
  {
    path: "/myassets/accounts",
    component: ViewAccounts,
  },
  {
    path: "/myassets/accounts/units/:id/:accountid",
    component: UnitsList,
  },
  {
    path: "/unit/update/:id",
    component: UpdateAsset,
  },
  // ----------------------My Profile Views ----------------------/
  {
    path: "/Empprofile",
    component: EmpProfile,
  },
  {
    path: "/Custprofile",
    component: CustProfile,
  },

  // ----------------------Employee Views ----------------------/

  {
    path: "/employee",
    component: EmployeeList,
  },
  {
    path: "/CreateEmployee",
    component: CreateEmployee,
  },
  {
    path: "/employee/getEmployeeById/:id",
    component: EmployeeDetails,
  },
  {
    path: "/employee/:id/update",
    component: EmployeeUpdate,
  },

  // --------------------------------------------/
  // ----------------------Call Views ----------------------/

  {
    path: "/registerCall",
    component: RegisterCall,
  },
  {
    path: "/assignEng",
    component: AssignEng,
  },
  {
    path: "/viewcalls",
    component: ViewCalls,
  },
  {
    path: "/call/updateasset/:callid/:assetid",
    component: UpdateAssetFromCall,
  },
  // ----------------------Inventory Views ----------------------/

  {
    path: "/inventory/create",
    component: CreateInvent,
  },
  {
    path: "/inventory",
    component: Inventory,
  },

  // ----------------------LST Views ----------------------/

  {
    path: "/lst",
    component: LST,
  },
  // {
  //   path: "/inventory",
  //   component: Inventory,
  // },
  // --------------------------------------------/
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

export const croutes = [
  // ----------------------My Asset Views ----------------------
  {
    path: "/myassets/accounts",
    component: ViewAccounts,
  },
  {
    path: "/myassets/accounts/units/:id/:accountid",
    component: UnitsList,
  },
  {
    path: "/unit/update/:id",
    component: UpdateAsset,
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
];
