import React from "react";
import { Card, CardBody, Button } from "@windmill/react-ui";
import { Link } from "react-router-dom";
import Emp from "../../helpers/auth/EmpProfile";

function VendorCard({
  title,
  value,
  district,
  btnone,
  btntwo,
  btnonelink,
  children: icon,
  link,
  desc,
}) {
  return (
    <Card className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-100 py-4">
      <CardBody className="flex items-center ">
        {icon}
        <div>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {value}
          </p>
          <p className=" text-sm text-gray-700 dark:text-gray-200">
            {district}
          </p>
        </div>
      </CardBody>
      <div className="flex items-center justify-end pr-4 -mt-3">
        <div className="mx-1">
          {btnone ? (
            <Link to={btnonelink}>
              <Button layout="outline" size="small">
                {btnone}
              </Button>
            </Link>
          ) : null}
          <p className="text-md font-semibold text-gray-700 dark:text-gray-200">
            {desc}
          </p>
        </div>
        {/* <div className="mx-1">
          {link ? (
            <Link to={link}>
              <Button layout="outline" size="small">
                Details
              </Button>
            </Link>
          ) : null}
        </div> */}
      </div>
    </Card>
  );
}

export default VendorCard;
