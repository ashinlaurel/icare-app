const { testTry } = require("../employee/Employee");

const TotalCallsGenerate = async () => {
  // console.log("first");
  let test = await testTry();
  // console.log(test);
};

TotalCallsGenerate();
