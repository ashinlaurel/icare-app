exports.capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

exports.getCallStatusAsString = (num) => {
  let finalstatus = "";
  switch (num) {
    case 0:
      return "Pending For Allocation";
      break;
    case 1:
      return "Pending for Percall Approval";
      break;
    case 2:
      return "Pending for Response";
      break;
    case 3:
      return "Pending for OEM Response";
      break;
    case 4:
      return "Pending for 2nd Response";
      break;
    case 5:
      return "Pending for Customer";
      break;
    case 6:
      return "Under Observation";
      break;
    case 7:
      return "Pending for Others";
      break;
    case 8:
      return "Pending for Spare";
      break;
    case 9:
      return "Spare in Transit";
      break;
    case 10:
      return "Cancelled Calls";
      break;
    case 11:
      return "Closed Calls";
      break;
    case 12:
      return "Spare Taken CMRR";
      break;
    case 13:
      return "Pending For Spare Collection";
      break;
    case 14:
      return "Standby Given";
      break;
    case 15:
      return "Pending For Verification";
      break;

    default:
      return "Status Number Unknown";
      break;
  }
};
