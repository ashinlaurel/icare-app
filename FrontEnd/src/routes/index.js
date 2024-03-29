import { lazy } from "react";
import ScrapSaleHistory from "../pages/Inventory/ScrapSaleHistory";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const DashboardCustomer = lazy(() => import("../pages/DashboardCustomer"));
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
const MultiAssetUpdate = lazy(() => import("../pages/Assets/MultiAssetUpdate"));
const UpdateAsset = lazy(() => import("../pages/Assets/UpdateAsset"));
const OriginalAssetView = lazy(() =>
  import("../pages/Assets/OriginalAssetView")
);
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

// ---------------------------call View ------------------------
const RegisterCall = lazy(() => import("../pages/Calls/RegisterCall"));
const AssignEng = lazy(() => import("../pages/Calls/AssignEng"));
const AssignCallPriority = lazy(() =>
  import("../pages/Calls/AssignCallPriority")
);
const EnggPriorityList = lazy(() => import("../pages/Calls/EnggPriorityList"));
const ViewCalls = lazy(() => import("../pages/Calls/ViewCalls"));
const UpdateCall = lazy(() => import("../pages/Calls/UpdatCall"));
const UpdateInvCall = lazy(() => import("../pages/Calls/UpdateInvCall"));
const UpdateAssetFromCall = lazy(() =>
  import("../pages/Calls/UpdateAssetFromCall")
);
const CallDetails = lazy(() => import("../pages/Calls/CallDetails"));

// ----------------------------- Inventory Imports
const CreateInvent = lazy(() => import("../pages/Inventory/CreateInvent"));
const Inventory = lazy(() => import("../pages/Inventory/Inventory"));
const PurchaseInventory = lazy(() =>
  import("../pages/Inventory/PurchaseInventory")
);
const PurchaseHistory = lazy(() =>
  import("../pages/Inventory/PurchaseHistory")
);
const UpdateInventory = lazy(() =>
  import("../pages/Inventory/UpdateInventory")
);
const ScrapSoldPage = lazy(() => import("../pages/Inventory/ScrapSoldPage"));

// ------------------------------- Employee Imports

const EmployeeDetails = lazy(() => import("../pages/Employee/EmployeeDetails"));
const EmployeeList = lazy(() => import("../pages/Employee/EmployeeList"));
const EmployeeUpdate = lazy(() => import("../pages/Employee/EmployeeUpdate"));
const PaySalary = lazy(() => import("../pages/Employee/PaySalary"));
const SalaryHistory = lazy(() => import("../pages/Employee/SalaryHistory"));
const ViewSalary = lazy(() => import("../pages/Employee/ViewSalary"));
const LeaveHistory = lazy(() => import("../pages/Employee/LeaveHistory"));

// ------------------------------- Vendor Imports
const CreateVendor = lazy(() => import("../pages/Vendor/CreateVendor"));
const VendorList = lazy(() => import("../pages/Vendor/VendorList"));
const VendorDetails = lazy(() => import("../pages/Vendor/VendorDetails"));
const VendorUpdate = lazy(() => import("../pages/Vendor/VendorUpdate"));

// ------------------------------- LST Imports

const LST = lazy(() => import("../pages/LST/LST"));
const LSTUpdate = lazy(() => import("../pages/LST/LSTUpdate"));

const LSTHistory = lazy(() => import("../pages/LST/LSTHistory"));

// ------------------------------------ Engg
const ViewEngineerCalls = lazy(() =>
  import("../pages/EngineerPages/EnggCalls")
);

// ------------------------------------ notification

const Notifications = lazy(() =>
  import("../pages/Notifications/Notifications")
);

// ------------------------------------ Customer Login

const MyAssets = lazy(() => import("../pages/CustomerPages/MyAssets"));
const RaiseCall = lazy(() => import("../pages/CustomerPages/RaiseCall"));
const CustomerViewCalls = lazy(() =>
  import("../pages/CustomerPages/CustomerViewCalls")
);
// ------------------------------------ Attendance -----------------------

const markAttendance = lazy(() => import("../pages/Attendance/MarkAttendance"));
const ApplyLeave = lazy(() => import("../pages/Attendance/ApplyLeave"));
const ViewAttendance = lazy(() => import("../pages/Attendance/ViewAttendance"));
// ------------------------------------ Downloads -----------------------

const ViewDownloads = lazy(() => import("../pages/Downloads/ViewDownloads"));

const ViewReports = lazy(() => import("../pages/Reports/ViewReports"));

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
//0
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
    path: "/assets/multiupdate", // the url
    component: MultiAssetUpdate, // view rendered
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
  {
    path: "/unit/update/vieworiginal/:id",
    component: OriginalAssetView,
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
  {
    path: "/employee/:id/viewsalary",
    component: ViewSalary,
  },
  {
    path: "/paysalary",
    component: PaySalary,
  },
  {
    path: "/salaryhistory",
    component: SalaryHistory,
  },
  {
    path: "/viewAttendance",
    component: ViewAttendance,
  },
  {
    path: "/LeaveHistory",
    component: LeaveHistory,
  },

  // ----------------------Vendor Views----------------------/
  {
    path: "/createvendor",
    component: CreateVendor,
  },
  {
    path: "/vendorlist",
    component: VendorList,
  },
  {
    path: "/vendor/getVendorById/:id",
    component: VendorDetails,
  },
  {
    path: "/vendor/:id/update",
    component: VendorUpdate,
  },

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
    path: "/AssignCallPriority",
    component: AssignCallPriority,
  },
  {
    path: "/EnggPriorityList",
    component: EnggPriorityList,
  },

  {
    path: "/viewcalls",
    component: ViewCalls,
  },
  {
    path: "/call/updateasset/:callid/:assetid",
    component: UpdateAssetFromCall,
  },
  {
    path: "/call/updatecall/:callid/:assetid",
    component: UpdateCall,
  },
  {
    path: "/call/updateinvcall/:callid/:assetid",
    component: UpdateInvCall,
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
  {
    path: "/inventory/purchase",
    component: PurchaseInventory,
  },
  {
    path: "/inventory/update/:id",
    component: UpdateInventory,
  },

  {
    path: "/inventory/purchasehistory",
    component: PurchaseHistory,
  },
  {
    path: "/inventory/scrapsoldpage",
    component: ScrapSoldPage,
  },
  {
    path: "/inventory/scrapsalehistory",
    component: ScrapSaleHistory,
  },

  // ----------------------LST Views ----------------------/

  {
    path: "/lst",
    component: LST,
  },
  {
    path: "/lst/update/:id",
    component: LSTUpdate,
  },
  {
    path: "/lst/history",
    component: LSTHistory,
  },

  // --------------------------------------------/
  // ----------------------Notifications Views ----------------------/

  {
    path: "/notifications",
    component: Notifications,
  },

  // -----------------Downloads --------------------------------
  {
    path: "/downloads",
    component: ViewDownloads,
  },
  // -----------------Reports --------------------------------
  {
    path: "/reports",
    component: ViewReports,
  },

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

// 1 cust 2 acc
export const croutes = [
  {
    path: "/dashboard", // the url
    component: DashboardCustomer, // view rendered
  },
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

  {
    path: "/myassets/",
    component: MyAssets,
  },
  {
    path: "/raisecall/",
    component: RaiseCall,
  },
  {
    path: "/viewmycalls/",
    component: CustomerViewCalls,
  },
  // -----------------Downloads --------------------------------
  {
    path: "/downloads",
    component: ViewDownloads,
  },
];

// 11
export const enggroutes = [
  // ----------------------My Asset Views ----------------------
  {
    path: "/engcalls/viewmycalls",
    component: ViewEngineerCalls,
  },
  {
    path: "/call/updatecall/:callid/:assetid",
    component: UpdateCall,
  },
  {
    path: "/call/calldetails/:callid/:assetid",
    component: CallDetails,
  },
  // -----------------Attendance Views --------------------------------
  {
    path: "/markAttendance",
    component: markAttendance,
  },
  {
    path: "/ApplyLeave",
    component: ApplyLeave,
  },
  // -----------------Downloads --------------------------------
  {
    path: "/downloads",
    component: ViewDownloads,
  },
  // -----------------Reports --------------------------------
  {
    path: "/reports",
    component: ViewReports,
  },

  // ----------------------LST Views ----------------------/

  {
    path: "/lst",
    component: LST,
  },
  {
    path: "/lst/history",
    component: LSTHistory,
  },
];
// 13
export const storekeeproutes = [
  // ----------------------Notifications Views ----------------------/

  {
    path: "/notifications",
    component: Notifications,
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
  {
    path: "/inventory/purchase",
    component: PurchaseInventory,
  },
  {
    path: "/inventory/update/:id",
    component: UpdateInventory,
  },

  {
    path: "/inventory/purchasehistory",
    component: PurchaseHistory,
  },
  {
    path: "/inventory/scrapsoldpage",
    component: ScrapSoldPage,
  },
  {
    path: "/inventory/scrapsalehistory",
    component: ScrapSaleHistory,
  },

  {
    path: "/lst",
    component: LST,
  },
  {
    path: "/lst/history",
    component: LSTHistory,
  },

  // -----------------Attendance Views --------------------------------
  {
    path: "/markAttendance",
    component: markAttendance,
  },
  // -----------------Downloads --------------------------------
  {
    path: "/downloads",
    component: ViewDownloads,
  },
  // -----------------Reports --------------------------------
  {
    path: "/reports",
    component: ViewReports,
  },
  // -----------------Attendance Views --------------------------------
  {
    path: "/markAttendance",
    component: markAttendance,
  },
  {
    path: "/ApplyLeave",
    component: ApplyLeave,
  },
];
// 16
export const ostorekeeproutes = [
  // ----------------------Notifications Views ----------------------/

  {
    path: "/notifications",
    component: Notifications,
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
  {
    path: "/inventory/purchase",
    component: PurchaseInventory,
  },
  {
    path: "/inventory/update/:id",
    component: UpdateInventory,
  },

  {
    path: "/inventory/purchasehistory",
    component: PurchaseHistory,
  },

  {
    path: "/lst",
    component: LST,
  },
  {
    path: "/lst/history",
    component: LSTHistory,
  },
  {
    path: "/engcalls/viewmycalls",
    component: ViewEngineerCalls,
  },
  {
    path: "/call/updatecall/:callid/:assetid",
    component: UpdateCall,
  },
  {
    path: "/call/updateinvcall/:callid/:assetid",
    component: UpdateInvCall,
  },
  {
    path: "/call/calldetails/:callid/:assetid",
    component: CallDetails,
  },
  {
    path: "/inventory/scrapsoldpage",
    component: ScrapSoldPage,
  },

  // -----------------Attendance Views --------------------------------
  {
    path: "/markAttendance",
    component: markAttendance,
  },
  // -----------------Downloads --------------------------------
  {
    path: "/downloads",
    component: ViewDownloads,
  },
  // -----------------Reports --------------------------------
  {
    path: "/reports",
    component: ViewReports,
  },
  // -----------------Attendance Views --------------------------------
  {
    path: "/markAttendance",
    component: markAttendance,
  },
  {
    path: "/ApplyLeave",
    component: ApplyLeave,
  },
];

// 15
export const accountsroutes = [
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
  {
    path: "/employee/:id/viewsalary",
    component: ViewSalary,
  },
  {
    path: "/paysalary",
    component: PaySalary,
  },
  {
    path: "/salaryhistory",
    component: SalaryHistory,
  },
  {
    path: "/viewAttendance",
    component: ViewAttendance,
  },
  {
    path: "/LeaveHistory",
    component: LeaveHistory,
  },

  // ----------------------Vendor Views----------------------/
  {
    path: "/createvendor",
    component: CreateVendor,
  },
  {
    path: "/vendorlist",
    component: VendorList,
  },
  {
    path: "/vendor/getVendorById/:id",
    component: VendorDetails,
  },
  {
    path: "/vendor/:id/update",
    component: VendorUpdate,
  },

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
    path: "/AssignCallPriority",
    component: AssignCallPriority,
  },
  {
    path: "/EnggPriorityList",
    component: EnggPriorityList,
  },

  {
    path: "/viewcalls",
    component: ViewCalls,
  },
  {
    path: "/call/updateasset/:callid/:assetid",
    component: UpdateAssetFromCall,
  },
  {
    path: "/call/updatecall/:callid/:assetid",
    component: UpdateCall,
  },
  {
    path: "/call/updateinvcall/:callid/:assetid",
    component: UpdateInvCall,
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
  {
    path: "/inventory/purchase",
    component: PurchaseInventory,
  },
  {
    path: "/inventory/update/:id",
    component: UpdateInventory,
  },

  {
    path: "/inventory/purchasehistory",
    component: PurchaseHistory,
  },

  // ----------------------LST Views ----------------------/

  {
    path: "/lst",
    component: LST,
  },
  {
    path: "/lst/history",
    component: LSTHistory,
  },

  // --------------------------------------------/
  // ----------------------Notifications Views ----------------------/

  {
    path: "/notifications",
    component: Notifications,
  },

  // -----------------Downloads --------------------------------
  {
    path: "/downloads",
    component: ViewDownloads,
  },

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

// 14
export const coordinatorroutes = [
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
    path: "/AssignCallPriority",
    component: AssignCallPriority,
  },
  {
    path: "/EnggPriorityList",
    component: EnggPriorityList,
  },

  {
    path: "/viewcalls",
    component: ViewCalls,
  },
  {
    path: "/call/updateasset/:callid/:assetid",
    component: UpdateAssetFromCall,
  },
  {
    path: "/call/updatecall/:callid/:assetid",
    component: UpdateCall,
  },
  {
    path: "/call/updateinvcall/:callid/:assetid",
    component: UpdateInvCall,
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
  {
    path: "/inventory/purchase",
    component: PurchaseInventory,
  },
  {
    path: "/inventory/update/:id",
    component: UpdateInventory,
  },

  {
    path: "/inventory/purchasehistory",
    component: PurchaseHistory,
  },
  {
    path: "/inventory/scrapsoldpage",
    component: ScrapSoldPage,
  },
  // ----------------------LST Views ----------------------/

  {
    path: "/lst",
    component: LST,
  },
  {
    path: "/lst/history",
    component: LSTHistory,
  },

  // --------------------------------------------/
  // ----------------------Employee Views ----------------------/

  {
    path: "/viewAttendance",
    component: ViewAttendance,
  },
  {
    path: "/LeaveHistory",
    component: LeaveHistory,
  },
  // ----------------------Notifications Views ----------------------/

  {
    path: "/notifications",
    component: Notifications,
  },

  // -----------------Downloads --------------------------------
  {
    path: "/downloads",
    component: ViewDownloads,
  },

  // -----------------Reports --------------------------------
  {
    path: "/reports",
    component: ViewReports,
  },
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
