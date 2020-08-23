import React from "react";
import { Card, CardBody } from "@windmill/react-ui";

function CustomerCard({ title, value, children: icon }) {
  return (
    <Card className="cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-100">
      <CardBody className="flex items-center ">
        {icon}
        <div>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {value}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

export default CustomerCard;
