import Axios from "axios";
import { API } from "../backendapi";
import Emp from "../helpers/auth/EmpProfile";

export const unitCreate = (newunit) => {
  return Axios.post(`${API}/unit/${Emp.getId()}/create`, newunit)
    .then((unit) => {
      console.log("h", unit.data);
      return unit.data;
    })
    .catch((error) => {
      console.log("ERRRROs");
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        throw error.response.data.errors;
      }
    });
};
