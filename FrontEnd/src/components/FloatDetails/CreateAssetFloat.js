import React from "react";
import { Card, CardBody } from "@windmill/react-ui";
import PageTitle from "../Typography/PageTitle";
import { Rnd } from "react-rnd";

const CreateAssetFloat = ({ Business, POnumber }) => {
  return (
    <Rnd
      className="z-50 hidden md:block"
      default={{ x: 500, y: 500, width: 700 }}
    >
      <Card className="shadow-md h-64 border ml-64 border-gray-300 rounded-lg  ">
        <CardBody>
          <div className="text-xl text-gray-900 dark:text-gray-400">
            Asset Review
          </div>
          <hr />
          <div className="my-2 text-sm text-gray-900 dark:text-gray-400">
            Business: {Business}
          </div>
          <div className="my-2 text-sm text-gray-900 dark:text-gray-400">
            Purchase Order Number: {POnumber}
          </div>
        </CardBody>
      </Card>
    </Rnd>
  );
};

export default CreateAssetFloat;
