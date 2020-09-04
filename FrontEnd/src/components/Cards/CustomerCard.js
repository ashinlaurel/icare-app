import React from "react";
import { Card, CardBody, Button } from "@windmill/react-ui";
import { Link } from "react-router-dom";

function CustomerCard({
  title,
  value,
  btnone,
  btntwo,
  btnonelink,
  children: icon,
}) {
  return (
    <Card className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-100 py-4">
      <CardBody className="flex items-center ">
        {icon}
        <div>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {value}
          </p>
        </div>
      </CardBody>
      <div className="flex items-center justify-center  ">
        <div className="mx-1">
          <Link to={btnonelink}>
            <Button layout="outline" size="small">
              {btnone}
            </Button>
          </Link>
        </div>
        <div className="mx-1">
          <Button layout="outline" size="small">
            Details
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default CustomerCard;
