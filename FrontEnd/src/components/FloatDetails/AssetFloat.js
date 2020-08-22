import React from "react";
import { Card, CardBody } from "@windmill/react-ui";
import PageTitle from "../Typography/PageTitle";
import { Rnd } from "react-rnd";

const AssetFloat = () => {
  return (
    <Rnd
      className="z-50 hidden md:block"
      default={{ x: 500, y: 500, width: 700 }}
    >
      <Card className="shadow-md h-64 border ml-64 border-gray-300 rounded-lg  ">
        <CardBody>
          <div className="text-xl">Assets Details</div>
          <hr />
          <p className="my-2 text-sm text-gray-900 dark:text-gray-400">
            Asset Details Here
          </p>
        </CardBody>
      </Card>
    </Rnd>
  );
};

export default AssetFloat;
