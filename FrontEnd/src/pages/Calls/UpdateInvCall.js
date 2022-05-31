import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import moment from "moment";
import { API } from "../../backendapi";
import AsyncSelect from "react-select/async";

import Emp from "../../helpers/auth/EmpProfile";
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Input,
  HelperText,
  Label,
  Select,
  Textarea,
  Button,
  Dropdown,
  DropdownItem,
  Badge,
} from "@windmill/react-ui";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";

import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Add, DropdownIcon, Remove } from "../../icons";
import { useMemo } from "react";
import { TopBarContext } from "../../context/TopBarContext";
import { capitalize } from "../../helpers/toolfuctions/toolfunctions";

function UpdateInvCall() {
  // floatbox
  let movehistory = useHistory();
  const params = useParams();
  const { topheading, setTopHeading } = useContext(TopBarContext);

  const id = params.assetid;
  const callid = params.callid;
  // console.log(id);
  //modal
  const [submitModal, setSubmitModal] = useState(false);
  const [sparemodal, setSpareModal] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [assethistoryModalOpen, setAssetHistoryModalOpen] = useState(false);
  const [notswapModalOpen, setNotSwapModalOpen] = useState(false);
  const [spareStatus, setSpareStatus] = useState("");
  const [ccfrStatus, setCcfrStatus] = useState("");

  //customer
  const [unit, setUnit] = useState({ _id: "", unitName: "" });
  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [account, setAccount] = useState({ _id: "", accountName: "" });

  //prodcut
  const [productID, setProductID] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [serialno, setSerialNo] = useState("");
  const [os, setOs] = useState("");
  const [cpu, setCpu] = useState([{ cpuname: "", cpusno: "" }]);
  const [ram, setram] = useState([{ ramname: "", ramsno: "" }]);
  const [hdd, sethdd] = useState([{ hddname: "", hddsno: "" }]);
  const [smps, setsmps] = useState([{ smpsname: "", smpssno: "" }]);
  const [fan, setfan] = useState([{ fanname: "", fansno: "" }]);
  const [motherboard, setmotherboard] = useState([
    { motherboardname: "", motherboardsno: "" },
  ]);
  const [opticaldrive, setopticaldrive] = useState([
    { opticaldrivename: "", opticaldrivesno: "" },
  ]);
  const [kbd, setkbd] = useState([{ keyboardname: "", keyboardsno: "" }]);
  const [mouse, setmouse] = useState([{ mousename: "", mousesno: "" }]);
  const [monitor, setmonitor] = useState([{ monitorname: "", monitorsno: "" }]);
  const [gcard, setgcard] = useState([{ gcardname: "", gcardsno: "" }]);
  const [enetcard, setenetcard] = useState([
    { enetcardname: "", enetcardsno: "" },
  ]);
  const [serialcard, setserialcard] = useState([
    { serialcardname: "", serialcardsno: "" },
  ]);
  const [parallelcard, setparallelcard] = useState([
    { parallelcardname: "", parallelcardsno: "" },
  ]);
  const [hbacard, sethbacard] = useState([{ hbacardname: "", hbacardsno: "" }]);
  const [raidcontroller, setraidcontroller] = useState([
    { raidcontrollername: "", raidcontrollersno: "" },
  ]);
  const [tapecontroller, settapecontroller] = useState([
    { tapecontrollername: "", tapecontrollersno: "" },
  ]);
  const [others, setothers] = useState([{ othersname: "", otherssno: "" }]);
  //asset

  const [Business, setBusiness] = useState("");
  const [servicelocation, setServiceLocation] = useState("");
  const [POnumber, setPOnumber] = useState("");
  const [POdate, setPOdate] = useState("");
  const [ContractFrom, setContractFrom] = useState("");
  const [ContractTo, setContractTo] = useState("");
  const [BillingFrom, setBillingFrom] = useState("");
  const [BillingTo, setBillingTo] = useState("");
  const [AMCRate, setAMCRate] = useState("");
  const [GST, setGST] = useState("");
  const [GSTAMOUNT, setGSTAMOUNT] = useState("");
  const [NetAmount, setNetAmount] = useState("");
  const [assethistory, setAssetHistory] = useState([]);

  //////////////-------------------------------------------->Product name not in asset
  const [product, setProduct] = useState("Server");

  ////////////---------------- INVENTORY state
  const [inventory, setInventory] = useState([]);

  //MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  // table variable styles

  const [activeRowID, setActiveRowID] = useState([-1]);
  const [secondactiveRowID, setSecondactiveRowID] = useState([-1]);

  // ---------------New States------------
  // const [itemtype, setItemtype] = useState(""); //Full system vs item
  const [selectedItem, setSelectedItem] = useState([""]); //the selected item category
  const [data, setData] = useState([{}]); //for first table expansion
  const [inventdata, setInventData] = useState([{}]); //for second table expansion
  const [existswap, setExistswap] = useState([
    {
      name: "Not Selected",
      sno: "Not Selected",
    },
  ]);
  const [inventswap, setInventswap] = useState([
    {
      name: "Not Selected",
      sno: "Not Selected",
    },
  ]);

  // Image states -----------------------------------------------------------------
  const [isImgUploadModal, setIsImgUploadModal] = useState(false);
  const [imageUploadMessage, setImageUploadMessage] = useState("");
  const [isImgUploadMenuModal, setIsImgUploadMenuModal] = useState(false);

  const [imgFile, setImgFile] = useState(null);
  const [imageUploadMenuMessage, setImageUploadMenuMessage] = useState("");
  const [imageIndex, setimageIndex] = useState("");

  const [goodSpareImgUrl, setGoodSpareImgUrl] = useState([""]);
  const [defectiveImgUrl, setDefectiveImgUrl] = useState([""]);
  const [imgUrl, setImgUrl] = useState([""]);
  const [ccfrImgUrl, setCcfrImgUrl] = useState("");

  const [isHistoryImgViewModal, setIsHistoryImgViewModal] = useState(false);
  const [goodSpareHistoryImg, setGoodSpareHistoryImg] = useState("");
  const [defectiveHistoryImg, setDefectiveHistoryImg] = useState("");
  const [defectiveHistoryImgPos, setDefectiveHistoryImgPos] = useState("0% 0%");
  const [ccfrHistoryImg, setCcfrHistoryImg] = useState("");

  // mouse move for zoom not used now -----

  // const handleMouseMove = (e) => {
  //   const { left, top, width, height } = e.target.getBoundingClientRect();
  //   const x = ((e.pageX - left) / width) * 100;
  //   const y = ((e.pageY - top) / height) * 100;
  //   setDefectiveHistoryImgPos(`${x}% ${y}%`);
  //   // this.setState({ backgroundPosition: `${x}% ${y}%` })
  // };

  // ----------- Multi update states ---------------
  const [assetpickerarray, setAssetpickerarray] = useState([{ item: "test" }]);

  const photoUploadHandler = (e, callback) => {
    callback(e.target.files[0]);
  };

  const photoUpload = (photo, cb) => {
    console.log(photo);
    if (photo == null) {
      setImageUploadMessage("Image not selected");
      setIsImgUploadModal(true);
      return;
    }
    setImageUploadMessage("Loading...");
    setIsImgUploadModal(true);

    const data = new FormData(); // If file selected
    data.append("imageUpload", photo, photo.name);
    // console.log(data);

    axios
      .post(`${API}/upload/img-upload`, data, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        },
      })
      .then((response) => {
        if (200 === response.status) {
          // If file size is larger than expected.
          if (response.data.error) {
            if ("LIMIT_FILE_SIZE" === response.data.error.code) {
              console.log("Max size: 2MB", "red");
              setImageUploadMessage("Maximum size is 2MB");
              setIsImgUploadModal(true);
            } else {
              console.log(response.data); // If not the given file type
              // console.log( response.data.error, 'red' );
              setImageUploadMessage("Given format not supported");
            }
          } else {
            // Success
            let fileName = response.data;
            console.log("fileName", fileName.location);
            console.log("File Uploaded");
            setImageUploadMessage("Image Uploaded");
            setIsImgUploadModal(true);
            cb(response.data.location);
          }
        }
      })
      .catch((error) => {
        // If another error
        setImageUploadMessage("Error Occured");
        setIsImgUploadModal(true);
        console.log(error);
      });
    // } else {
    //  // if file not selected throw error
    //  this.ocShowAlert( 'Please upload file', 'red' );
    // }
  };

  const ImgUploadModal = () => {
    return (
      <>
        <Modal
          isOpen={isImgUploadModal}
          onClose={() => setIsImgUploadModal(false)}
        >
          <ModalHeader>{imageUploadMessage}</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setIsImgUploadModal(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const handleImgUpload = (message) => {
    if (message == "defective") {
      photoUpload(imgFile, (url) => {
        console.log("PHOTO URL", url, imageIndex);
        // setImgUrl(url);
        let temp = defectiveImgUrl;
        temp[imageIndex] = url;
        setDefectiveImgUrl(temp);
      });
    } else if (message == "good") {
      photoUpload(imgFile, (url) => {
        let temp = goodSpareImgUrl;
        temp[imageIndex] = url;
        console.log("PHOTO URL", url, imageIndex);
        // setImgUrl(url);
        setGoodSpareImgUrl(temp);
      });
    } else if (message == "ccfr") {
      photoUpload(imgFile, (url) => {
        console.log("PHOTO URL", url);
        // setImgUrl(url);
        setCcfrImgUrl(url);
      });
    }
  };
  const ImgUploadMenuModal = () => {
    return (
      <>
        <Modal
          isOpen={isImgUploadMenuModal}
          onClose={() => {
            setImgUrl("");
            setImgFile(null);
            setIsImgUploadMenuModal(false);
          }}
        >
          <ModalHeader>{imageUploadMenuMessage}</ModalHeader>
          <ModalBody>
            <>
              {imageUploadMenuMessage == "defective" ? (
                <img
                  src={defectiveImgUrl[imageIndex]}
                  className="my-2"
                  width="100"
                  height="100"
                />
              ) : imageUploadMenuMessage == "good" ? (
                <img
                  src={goodSpareImgUrl[imageIndex]}
                  className="my-2"
                  width="100"
                  height="100"
                />
              ) : imageUploadMenuMessage == "defective" ? (
                <img
                  src={ccfrImgUrl}
                  className="my-2"
                  width="100"
                  height="100"
                />
              ) : null}

              <div className="flex-row flex  space-x-3 mt-3 ">
                <div className="flex flex-col ">
                  <Label className="">
                    <span>Image upload</span>
                    <Input
                      className="mt-1"
                      type="file"
                      // value={photo}
                      onChange={(e) => photoUploadHandler(e, setImgFile)}
                    />
                  </Label>

                  {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
                </div>
                <Button
                  onClick={() => {
                    handleImgUpload(imageUploadMenuMessage);
                  }}
                  layout="outline"
                  className="my-6    "
                >
                  Upload Image
                </Button>
              </div>
            </>
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => {
                setImgUrl("");
                setImgFile(null);
                setIsImgUploadMenuModal(false);
              }}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const HistoryImgViewModal = () => {
    return (
      <>
        <Modal
          isOpen={isHistoryImgViewModal}
          onClose={() => {
            setDefectiveHistoryImg("");
            setGoodSpareHistoryImg("");
            setCcfrHistoryImg("");
            setIsHistoryImgViewModal(false);
          }}
          className="w-9/12 dark:bg-gray-800 px-5 my-10 bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-auto"
          // className="w-6/12 h-8/12 dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-scroll text-cente items-center justify-center"
        >
          <ModalHeader>Images</ModalHeader>
          <ModalBody>
            <div className="flex flex-col justify-center ">
              <hr></hr>
              <div className="flex flex-row justify-evenly flex-wrap items-center ">
                {defectiveHistoryImg != "" ? (
                  <div>
                    <div
                      onClick={() => {
                        console.log(defectiveHistoryImg);
                      }}
                      className="text-lg font-semibold my-2 w-full"
                    >
                      Replaced Item
                    </div>

                    <a href={defectiveHistoryImg} target="_blank">
                      {/* <figure
                      onMouseMove={handleMouseMove}
                      style={{
                        backgroundImage: `url(${defectiveHistoryImg})`,
                        backgroundPosition: `${defectiveHistoryImgPos}`,
                      }}
                    >
                      <img src={defectiveHistoryImg} width="350" height="350" />
                    </figure> */}
                      <img
                        src={defectiveHistoryImg}
                        className="my-4 border-4"
                        width="350"
                        height="350"
                      />
                    </a>
                  </div>
                ) : null}

                {goodSpareHistoryImg != "" ? (
                  <div>
                    <div className="text-lg font-semibold my-2 w-full">
                      {" "}
                      Replaced by
                    </div>
                    <a href={goodSpareHistoryImg} target="_blank">
                      <img
                        src={goodSpareHistoryImg}
                        className="my-4 border-4"
                        width="350"
                        height="350"
                      />
                    </a>
                  </div>
                ) : null}

                {ccfrHistoryImg != "" ? (
                  <div>
                    <div className="text-lg font-semibold my-2 w-full">
                      {" "}
                      CCFR
                    </div>
                    <a href={ccfrHistoryImg} target="_blank">
                      <img
                        src={ccfrHistoryImg}
                        className="my-4 border-4"
                        width="350"
                        height="350"
                      />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            {/* <Button
              className="w-full sm:w-auto"
              onClick={() => {
                setDefectiveHistoryImg("");
                setGoodSpareHistoryImg("");
                setCcfrHistoryImg("");
                setIsHistoryImgViewModal(false);
              }}
            >
              Okay!
            </Button> */}
          </ModalFooter>
        </Modal>
      </>
    );
  };

  //-----------------------------------------------------------------

  // ----------------------Heading Use Effect-------------
  useEffect(() => {
    setTopHeading("Update Call");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  // filterhooks
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [LSTNo, setLSTNo] = useState("");
  const [date, setDate] = useState(new Date());
  const [condition, setCondition] = useState("");
  const [page, setPage] = useState(1);

  // search
  const [invsearch, setInvSearch] = useState("");
  const [assetinvsearch, setAssetInvSearch] = useState("");
  const [listNumber, setListNumber] = useState(0);

  // imp states
  const [callAttendDate, setCallAttendDate] = useState("");
  const [startOfService, setStartOfService] = useState("");
  const [endOfService, setEndOfService] = useState("");
  const [actionTaken, setActionTaken] = useState("");

  const dataSetter = (obj, number) => {
    let temp = [...obj];
    let thetype = selectedItem[number].toLowerCase();
    let theitemandsystem = "item";

    obj.map((item, i) => {
      item.name = item[`${thetype}name`];
      item.sno = item[`${thetype}sno`];
      item.type = thetype;
      item.condition = "Bad";
      item.systype = theitemandsystem;
    });

    console.log(temp);

    let tempdata = [...data];
    tempdata[number] = obj;
    setData(tempdata);
  };

  // -----use effect to pull new inventory list according to filters
  // useEffect(() => {
  //   thegetter();
  // }, [selectedItem]);

  useMemo(() => thegetter(listNumber), [invsearch]);

  async function thegetter(number) {
    console.log("getter called test");
    console.log(selectedItem);
    let payload = {
      pages: {
        page: page,
        limit: 1000000,
      },
      filters: {
        type: selectedItem[number].toLowerCase(),
        location: location,
        condition: "Good",
        // searchtype: invsearch,
        searchquery: invsearch,
      },
    };
    // console.log(`${API}/asset/${Emp.getId()}/getall`);

    try {
      let response = await axios({
        url: `${API}/inventory/${Emp.getId()}/getall`,
        method: "POST",
        data: payload,
      });
      // console.log(response.data.out);
      // setTotalResults(response.data.total);
      // const { total, data } = response.data;
      // console.log(data + "Now");

      let tempinvent = inventdata;
      tempinvent[number] = response.data.out;
      await setInventData(tempinvent);
      console.log(tempinvent[number]);
    } catch (error) {
      throw error;
    }
  }

  // History Modal
  const HistoryModal = () => {
    if (call.history) {
      let data = call.history;
      // console.log(data);

      return (
        <>
          <Modal
            isOpen={historyModalOpen}
            onClose={() => setHistoryModalOpen(false)}
            className="w-9/12 overflow-y-auto dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg "
          >
            <ModalHeader className="flex flex-row justify-between text-xl">
              {/* <div>{item.name}</div> */}
              <div>
                Call No: <Badge>{call.callNo}</Badge>{" "}
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="font-semibold text-xl my-2">Call History</div>
              {/* ------------------------- Table ------------------------------ */}
              <TableContainer className="mt-4">
                <Table>
                  <TableHeader>
                    <tr>
                      <TableCell>Date</TableCell>
                      <TableCell>Engineer</TableCell>
                      <TableCell>Attended Date</TableCell>
                      <TableCell>Start Of Service</TableCell>
                      <TableCell>End Of Service</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Notes</TableCell>
                      <TableCell>Action Taken</TableCell>
                      <TableCell>Images</TableCell>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    {data.map((entry, i) => (
                      <TableRow
                        className={`hover:shadow-lg dark:hover:bg-gray-600 
                       `}
                        key={i}
                        onClick={() => {
                          // setActiveRowId(user._id);
                          // console.log("the id is " );
                          // setSelectedProd(user);
                          // setAssetDetails(user);
                          // console.log(user.product.keyboard[0].keyboardname);
                        }}
                      >
                        <TableCell className="w-8">
                          <div className="flex items-center text-sm ">
                            <div>
                              <p className="font-semibold">
                                {moment(entry.date).format("DD-MM-YYYY")}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">
                            {capitalize(entry.engineer)}
                          </span>
                        </TableCell>

                        <TableCell>
                          <span className="text-sm">
                            {entry.callAttendDate}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">
                            {entry.startOfService}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{entry.endOfService}</span>
                        </TableCell>
                        <TableCell>
                          <span>
                            {call.callStatus == 0 ? (
                              <Badge>Pending For Allocation</Badge>
                            ) : null}
                            {call.callStatus == 1 ? (
                              <Badge>Pending for Percall Approval</Badge>
                            ) : null}
                            {call.callStatus == 2 ? (
                              <Badge>Pending for Response</Badge>
                            ) : null}
                            {call.callStatus == 3 ? (
                              <Badge>Pending for OEM Response</Badge>
                            ) : null}
                            {call.callStatus == 4 ? (
                              <Badge>Pending for 2nd Response</Badge>
                            ) : null}
                            {call.callStatus == 5 ? (
                              <Badge>Pending for Customer</Badge>
                            ) : null}
                            {call.callStatus == 6 ? (
                              <Badge>Under Observation</Badge>
                            ) : null}
                            {call.callStatus == 7 ? (
                              <Badge>Pending for Others</Badge>
                            ) : null}
                            {call.callStatus == 8 ? (
                              <Badge>Pending for Spare</Badge>
                            ) : null}
                            {call.callStatus == 9 ? (
                              <Badge>Spare in Transit</Badge>
                            ) : null}
                            {call.callStatus == 10 ? (
                              <Badge>Cancelled Calls</Badge>
                            ) : null}
                            {call.callStatus == 11 ? (
                              <Badge>Closed Calls</Badge>
                            ) : null}
                            {call.callStatus == 12 ? (
                              <Badge>Spare Taken CMRR</Badge>
                            ) : null}
                            {call.callStatus == 13 ? (
                              <Badge>Pending For Spare Collection</Badge>
                            ) : null}
                            {call.callStatus == 14 ? (
                              <Badge>Standby Given</Badge>
                            ) : null}
                            {call.callStatus == 15 ? (
                              <Badge>Pending For Verification</Badge>
                            ) : null}
                          </span>
                        </TableCell>
                        <TableCell className="flex flex-row max-w-sm">
                          <span className="w-full overflow-auto">
                            {entry.note}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{entry.actionTaken}</span>
                        </TableCell>

                        <TableCell>
                          <Button
                            layout="outline"
                            onClick={() => {
                              if (entry.newUrl)
                                setGoodSpareHistoryImg(entry.newUrl);
                              if (entry.existUrl)
                                setDefectiveHistoryImg(entry.existUrl);
                              if (entry.ccfrImgUrl)
                                setCcfrHistoryImg(entry.ccfrImgUrl);
                              setIsHistoryImgViewModal(true);
                            }}
                          >
                            Show
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/* <TableFooter>
                  <Pagination
                    totalResults={totalResults}
                    resultsPerPage={resultsPerPage}
                    label="Table navigation"
                    onChange={onPageChange}
                  />
                </TableFooter> */}
              </TableContainer>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </Modal>
        </>
      );
    }
  };

  // Asset History Modal
  const AssetHistoryModal = () => {
    if (assethistory[0]) {
      // let data = call.history;
      // console.log(data);

      return (
        <>
          <Modal
            isOpen={assethistoryModalOpen}
            onClose={() => setAssetHistoryModalOpen(false)}
            className="w-9/12 dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-auto"
          >
            <ModalHeader className="flex flex-row justify-between text-xl">
              {/* <div>{item.name}</div> */}
              <div>
                Asset Serial: <Badge>{call.callNo}</Badge>{" "}
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="font-semibold text-xl my-2">Asset History</div>
              {/* ------------------------- Table ------------------------------ */}
              <TableContainer className="mt-4">
                <Table>
                  <TableHeader>
                    <tr>
                      <TableCell>Date</TableCell>
                      <TableCell>Engineer</TableCell>
                      <TableCell>Attended Date</TableCell>
                      <TableCell>Start Of Service</TableCell>
                      <TableCell>End Of Service</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Notes</TableCell>
                      <TableCell>Action Taken</TableCell>
                      <TableCell>Images</TableCell>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    {assethistory.map((entry, i) => (
                      <TableRow
                        className={`hover:shadow-lg dark:hover:bg-gray-600 
                       `}
                        key={i}
                        onClick={() => {
                          // setActiveRowId(user._id);
                          // console.log("the id is " + user._id);
                          // setSelectedProd(user);
                          // setAssetDetails(user);
                          // console.log(user.product.keyboard[0].keyboardname);
                        }}
                      >
                        <TableCell className="w-8">
                          <div className="flex items-center text-sm ">
                            <div>
                              <p className="font-semibold">
                                {moment(entry.date).format("DD-MM-YYYY")}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">
                            {capitalize(entry.engineer)}
                          </span>
                        </TableCell>

                        <TableCell>
                          <span className="text-sm">
                            {entry.callAttendDate}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">
                            {entry.startOfService}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{entry.endOfService}</span>
                        </TableCell>
                        <TableCell>
                          <span>
                            {call.callStatus == 0 ? (
                              <Badge>Pending For Allocation</Badge>
                            ) : null}
                            {call.callStatus == 1 ? (
                              <Badge>Pending for Percall Approval</Badge>
                            ) : null}
                            {call.callStatus == 2 ? (
                              <Badge>Pending for Response</Badge>
                            ) : null}
                            {call.callStatus == 3 ? (
                              <Badge>Pending for OEM Response</Badge>
                            ) : null}
                            {call.callStatus == 4 ? (
                              <Badge>Pending for 2nd Response</Badge>
                            ) : null}
                            {call.callStatus == 5 ? (
                              <Badge>Pending for Customer</Badge>
                            ) : null}
                            {call.callStatus == 6 ? (
                              <Badge>Under Observation</Badge>
                            ) : null}
                            {call.callStatus == 7 ? (
                              <Badge>Pending for Others</Badge>
                            ) : null}
                            {call.callStatus == 8 ? (
                              <Badge>Pending for Spare</Badge>
                            ) : null}
                            {call.callStatus == 9 ? (
                              <Badge>Spare in Transit</Badge>
                            ) : null}
                            {call.callStatus == 10 ? (
                              <Badge>Cancelled Calls</Badge>
                            ) : null}
                            {call.callStatus == 11 ? (
                              <Badge>Closed Calls</Badge>
                            ) : null}
                            {call.callStatus == 12 ? (
                              <Badge>Spare Taken CMRR</Badge>
                            ) : null}
                            {call.callStatus == 13 ? (
                              <Badge>Pending For Spare Collection</Badge>
                            ) : null}
                            {call.callStatus == 14 ? (
                              <Badge>Standby Given</Badge>
                            ) : null}
                            {call.callStatus == 15 ? (
                              <Badge>Pending For Verification</Badge>
                            ) : null}
                          </span>
                        </TableCell>
                        <TableCell className="flex flex-row max-w-sm">
                          <span className="w-full overflow-auto">
                            {entry.note}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{entry.actionTaken}</span>
                        </TableCell>
                        <TableCell>
                          <Button
                            layout="outline"
                            onClick={() => {
                              if (entry.newUrl)
                                setGoodSpareHistoryImg(entry.newUrl);
                              if (entry.existUrl)
                                setDefectiveHistoryImg(entry.existUrl);
                              if (entry.ccfrImgUrl)
                                setCcfrHistoryImg(entry.ccfrImgUrl);
                              setIsHistoryImgViewModal(true);
                            }}
                          >
                            Show
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/* <TableFooter>
                  <Pagination
                    totalResults={totalResults}
                    resultsPerPage={resultsPerPage}
                    label="Table navigation"
                    onChange={onPageChange}
                  />
                </TableFooter> */}
              </TableContainer>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </Modal>
        </>
      );
    }
  };

  // -----getting inventory items

  const getAsset = async () => {
    try {
      let res = await axios.post(`${API}/asset/${Emp.getId()}/getbyid`, {
        id: id,
      });
      console.log("asset", res.data);
      let asset = res.data;
      setProductID(asset.product._id);
      setAssetHistory(asset.product.history);

      setServiceLocation(asset.servicelocation);
      setProduct(asset.producttype);
      setUnit({ _id: id, unitName: asset.unitName });
      setCustomer({ _id: asset.customerId, customerName: asset.customerName });
      setAccount({ _id: asset.accountId, accountName: asset.accountName });

      ////------------------------>>>>>>>>
      // setProduct("Server");
      ////////---------ASSET INFO
      setBusiness(asset.business);
      setPOnumber(asset.ponumber);
      setAMCRate(asset.amcrate);
      // Dates --------------------------
      setPOdate(moment(asset.podate).format("YYYY-MM-DD"));
      setContractFrom(moment(asset.contractfrom).format("YYYY-MM-DD"));
      setContractTo(moment(asset.contractto).format("YYYY-MM-DD"));
      setBillingFrom(moment(asset.billingfrom).format("YYYY-MM-DD"));
      setBillingTo(moment(asset.billingto).format("YYYY-MM-DD"));
      ////////////------------>>>>>>>> misiing field GST(asset.gs)
      setGSTAMOUNT(asset.gstamount);
      setNetAmount(asset.netamount);
      // setProduct(asset);
      //////////////////////////////

      setBrand(asset.product.brand);
      setModel(asset.product.model);
      setSerialNo(asset.product.serialno);
      setOs(asset.product.os);
      setCpu(asset.product.cpu);
      setram(asset.product.ram);
      if (asset.product.hdd.length == 0) sethdd([{ hddname: "", hddsno: "" }]);
      else sethdd(asset.product.hdd);
      if (asset.product.smps.length == 0)
        setsmps([{ smpsname: "", smpssno: "" }]);
      else setsmps(asset.product.smps);
      if (asset.product.fan.length == 0) setfan([{ fanname: "", fansno: "" }]);
      else setfan(asset.product.fan);
      if (asset.product.motherboard.length == 0)
        setmotherboard([{ motherboardname: "", motherboardsno: "" }]);
      else setmotherboard(asset.product.motherboard);
      if (asset.product.opticaldrive.length == 0)
        setopticaldrive([{ opticaldrivename: "", opticaldrivesno: "" }]);
      else setopticaldrive(asset.product.opticaldrive);
      if (asset.product.keyboard.length == 0)
        setkbd([{ keyboardname: "", keyboardsno: "" }]);
      else setkbd(asset.product.keyboard);
      if (asset.product.mouse.length == 0)
        setmouse([{ mousename: "", mousesno: "" }]);
      else setmouse(asset.product.mouse);
      if (asset.product.monitor.length == 0)
        setmonitor([{ monitorname: "", monitorsno: "" }]);
      else setmonitor(asset.product.monitor);
      if (asset.product.gcard.length == 0)
        setgcard([{ gcardname: "", gcardsno: "" }]);
      else setgcard(asset.product.gcard);
      if (asset.product.enetcard.length == 0)
        setenetcard([{ netcardname: "", enetcardsno: "" }]);
      else setenetcard(asset.product.enetcard);
      if (asset.product.serialcard.length == 0)
        setserialcard([{ serialcardname: "", serialcardsno: "" }]);
      else setserialcard(asset.product.serialcard);

      if (asset.product.parallelcard.length == 0)
        setparallelcard([{ parallelcardname: "", parallelcardsno: "" }]);
      else setparallelcard(asset.product.parallelcard);

      if (asset.product.hbacard.length == 0)
        sethbacard([{ hbacardname: "", hbacardsno: "" }]);
      else sethbacard(asset.product.hbacard);

      if (asset.product.raidcontroller.length == 0)
        setraidcontroller([{ raidcontrollername: "", raidcontrollersno: "" }]);
      else setraidcontroller(asset.product.raidcontroller);

      if (asset.product.tapecontroller.length == 0)
        settapecontroller([{ tapecontrollername: "", tapecontrollersno: "" }]);
      else settapecontroller(asset.product.tapecontroller);

      if (asset.product.others.length == 0)
        setothers([{ othersname: "", otherssno: "" }]);
      else setothers(asset.product.others);
    } catch (err) {
      console.log("assetFind Error", err);
    }
  };

  ////// CALL

  const [call, setCall] = useState({});

  const getCall = async () => {
    try {
      let res = await axios.post(`${API}/call/${Emp.getId()}/getbyid`, {
        id: callid,
      });
      console.log("call", res.data);
      setCall(res.data);
    } catch (err) {
      console.log("call Find Error", err);
    }
  };

  useEffect(() => {
    getAsset();
    getCall();
  }, []);

  // ------Modals------

  const UpdatedModal = () => {
    return (
      <>
        <Modal isOpen={submitModal} onClose={() => setSubmitModal(false)}>
          <ModalHeader>Call Update Successfull</ModalHeader>
          <ModalBody>Your Call Was Successfully Updated</ModalBody>
          <ModalFooter>
            {/* <Link to={`/app/viewcalls`}> */}
            <Button
              className="w-full sm:w-auto"
              onClick={() => movehistory.push("/app/viewcalls")}
            >
              Okay!
            </Button>
            {/* </Link> */}
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const NotSwapModal = () => {
    return (
      <>
        <Modal
          isOpen={notswapModalOpen}
          onClose={() => setNotSwapModalOpen(false)}
        >
          <ModalHeader>Inventory Process Pending</ModalHeader>
          <ModalBody>
            Please finish add/remove/swap of items before updating call.
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setNotSwapModalOpen(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const SpareRequiredModal = () => {
    return (
      <>
        <Modal isOpen={sparemodal}>
          <ModalHeader>Spare Usage</ModalHeader>
          <ModalBody> Was any spare used in this call ?</ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => {
                // setCall({ ...call, spareUsed: "Yes" });
                setSpareStatus("Yes");
                setSpareModal(false);
              }}
            >
              Yes
            </Button>
            <Button
              className="w-full sm:w-auto"
              onClick={() => {
                // setCall({ ...call, spareUsed: "No" });
                setSpareStatus("No");
                setSpareModal(false);
              }}
            >
              No
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  // --------------------  Functions ---------------------------

  const handleUpdate = async () => {
    if (
      callAttendDate == "" ||
      startOfService == "" ||
      actionTaken == "" ||
      moment(call.assignedDate).format("YYYY-MM-DD") >
        moment(callAttendDate).format("YYYY-MM-DD") ||
      endOfService < startOfService ||
      (call.assignedETA > startOfService &&
        moment(call.assignedDate).format("YYYY-MM-DD") ==
          moment(callAttendDate).format("YYYY-MM-DD") &&
        startOfService != "")
    ) {
      // setNotSwapModalOpen(true);
      alert("Please enter the right values into all compulsory fields");
      return;
    }
    if (ccfrStatus == "") {
      alert("Select CCFR Status");
      return;
    }

    // ------ Image Checker ---

    if (ccfrStatus == "Yes" && ccfrImgUrl == "") {
      alert("Please Upload CCFR Image");
      return;
    }

    for (let i = 0; i < existswap.length; i++) {
      if (existswap[i]._id && defectiveImgUrl[i] == "") {
        alert(`Upload Image for the ${i + 1}th Defective Spare`);
        return;
      }
      if (inventswap[i]._id && goodSpareImgUrl[i] == "") {
        alert(`Upload Image for the ${i + 1}th Good Spare`);
        return;
      }
    }

    let tempcallstatus = "";

    if (call.callStatus == 0) {
      tempcallstatus = "Pending For Allocation";
    }
    if (call.callStatus == 1) {
      tempcallstatus = "Pending for Percall Approval";
    }
    if (call.callStatus == 2) {
      tempcallstatus = "Pending for Response";
    }
    if (call.callStatus == 3) {
      tempcallstatus = "Pending for OEM Response";
    }
    if (call.callStatus == 4) {
      tempcallstatus = "Pending for 2nd Response";
    }
    if (call.callStatus == 5) {
      tempcallstatus = "Pending for Customer";
    }
    if (call.callStatus == 6) {
      tempcallstatus = "Under Observation";
    }
    if (call.callStatus == 7) {
      tempcallstatus = "Pending for Others";
    }
    if (call.callStatus == 8) {
      tempcallstatus = "Pending for Spare";
    }
    if (call.callStatus == 9) {
      tempcallstatus = "Spare in Transit";
    }
    if (call.callStatus == 10) {
      tempcallstatus = "Cancelled Calls";
    }
    if (call.callStatus == 11) {
      tempcallstatus = "Closed Calls";
    }
    if (call.callStatus == 12) {
      tempcallstatus = "Spare Taken CMRR";
    }
    if (call.callStatus == 13) {
      tempcallstatus = "Pending For Spare Collection";
    }
    if (call.callStatus == 14) {
      tempcallstatus = "Standby Given";
    }
    if (call.callStatus == 15) {
      tempcallstatus = "Pending For Verification";
    }

    // ------- Handling the swaps -----------

    // for (let i = 0; i < existswap.length; i++) {
    //   await handleSwap(i);
    // }

    // ----- history --------

    let newcallhistory = {
      date: moment().format(),
      callStatus: call.callStatus,
      engineer: call.employeeName,
      callAttendDate: callAttendDate,
      startOfService: startOfService,
      endOfService: endOfService,
      note: `Call Status Updated to ${tempcallstatus}`,
      actionTaken: actionTaken,
      ccfrImgUrl: ccfrImgUrl,
      // existserial: existswap[0].sno,
      // newserial: inventswap[0].sno,
    };
    let payload = {
      id: call._id,
      update: {
        callStatus: call.callStatus,
        // callAttendDate: call.callAttendDate,
        // startOfService: call.startOfService,
        // endOfService: call.endOfService,
        // spareUsed: call.spareUsed,
        $push: { history: newcallhistory },
      },
    };
    console.log(payload);

    try {
      let response = await axios({
        url: `${API}/call/${Emp.getId()}/assignEngg`,
        method: "POST",
        data: payload,
      });
      console.log("updated");
      // setIsReviewModalOpen(true);
    } catch (error) {
      throw error;
    }

    // ----- asset history update -----

    let assetpayload = {
      id: productID,
      update: {
        $push: { history: newcallhistory },
      },
    };

    try {
      let response = await axios({
        url: `${API}/asset/${Emp.getId()}/updateProductWithID`,
        method: "POST",
        data: assetpayload,
      });
      console.log("updated");
      console.log("Done");
      await setAssetpickerarray([{ item: "test" }]);
      setInventswap([
        {
          name: "Not Selected",
          sno: "Not Selected",
        },
      ]);
      setExistswap([
        {
          name: "Not Selected",
          sno: "Not Selected",
        },
      ]);

      // await getAsset();
      // setSubmitModal(true);
      // setIsReviewModalOpen(true);
    } catch (error) {
      throw error;
    }
    setSubmitModal(true);
  };

  // -------handle swap --------

  const handleSwap = async (i) => {
    let payload = {
      existswap: existswap[i],
      newswap: inventswap[i],
      call: call,
      type: selectedItem[i].toLowerCase(),
      servicelocation: servicelocation,
      assetserial: POnumber,
    };

    try {
      let update = await axios({
        url: `${API}/call/${Emp.getId()}/swapitems`,
        method: "POST",
        data: payload,
      });
      if (update.data.hello == "empty") {
        console.log("empty swap return");
        return;
      }
    } catch (error) {
      throw error;
    }

    // ----- call history update --------
    // ----- call history ---
    let newcallhistory = {
      date: moment().format(),
      callStatus: call.callStatus,
      engineer: call.employeeName,
      callAttendDate: callAttendDate,
      startOfService: startOfService,
      endOfService: endOfService,
      note: `Items Swapped/Added/Removed (Received:${existswap[i].sno} Sent:${inventswap[i].sno})`,
      actionTaken: actionTaken,
      existUrl: defectiveImgUrl[i],
      newUrl: goodSpareImgUrl[i],
      existserial: existswap[i].sno,
      newserial: inventswap[i].sno,
    };
    let payloadtwo = {
      id: call._id,
      update: {
        callStatus: call.callStatus,
        $push: { history: newcallhistory },
      },
    };

    console.log(payloadtwo);
    try {
      let response = await axios({
        url: `${API}/call/${Emp.getId()}/assignEngg`,
        method: "POST",
        data: payloadtwo,
      });

      // setIsReviewModalOpen(true);
    } catch (error) {
      throw error;
    }

    let assetpayload = {
      id: productID,
      update: {
        $push: { history: newcallhistory },
      },
    };

    try {
      let response = await axios({
        url: `${API}/asset/${Emp.getId()}/updateProductWithID`,
        method: "POST",
        data: assetpayload,
      });
      // console.log("updated");
      // console.log("Done");

      // await getAsset();
      // setSubmitModal(true);
      // setIsReviewModalOpen(true);
    } catch (error) {
      throw error;
    }
  };

  //DROPDOWN------------------------------------------------------------------------------------

  function toggleDropdown() {
    // setIsOpen(!isOpen);
  }

  const AssetBar = () => {
    return (
      <div className="dark:text-white my-4 ">
        {/* Row 1  */}
        {/* <div className="text-xl font-semibold">Asset Information</div> */}
        {/* Row 1*/}
        <div className="flex space-x-1">
          <div className="dark:text-gray-200 text-black text-sm flex space-x-2 items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start  w-full my-2 ">
            <div className=" ">
              <span>Call Number: {call.callNo}</span>
            </div>
            <div className=" ">
              <span>Contact Person: {call.contactPerson}</span>
            </div>
            <div className=" ">
              <span>Date: {moment(call.date).format("DD-MM-YYYY")}</span>
            </div>
          </div>

          <div className="dark:text-gray-200 text-black text-sm space-x-1  flex flex-row items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start   w-1/4 my-2 ">
            <div className=" font-semibold ">
              <span>Call Status: </span>
            </div>
            <span>
              {call.callStatus == 0 ? (
                <Badge>Pending For Allocation</Badge>
              ) : null}
              {call.callStatus == 1 ? (
                <Badge>Pending for Percall Approval</Badge>
              ) : null}
              {call.callStatus == 2 ? (
                <Badge>Pending for Response</Badge>
              ) : null}
              {call.callStatus == 3 ? (
                <Badge>Pending for OEM Response</Badge>
              ) : null}
              {call.callStatus == 4 ? (
                <Badge>Pending for 2nd Response</Badge>
              ) : null}
              {call.callStatus == 5 ? (
                <Badge>Pending for Customer</Badge>
              ) : null}
              {call.callStatus == 6 ? <Badge>Under Observation</Badge> : null}
              {call.callStatus == 7 ? <Badge>Pending for Others</Badge> : null}
              {call.callStatus == 8 ? <Badge>Pending for Spare</Badge> : null}
              {call.callStatus == 9 ? <Badge>Spare in Transit</Badge> : null}
              {call.callStatus == 10 ? <Badge>Cancelled Calls</Badge> : null}
              {call.callStatus == 11 ? <Badge>Closed Calls</Badge> : null}
              {call.callStatus == 12 ? <Badge>Spare Taken CMRR</Badge> : null}
              {call.callStatus == 13 ? (
                <Badge>Pending For Spare Collection</Badge>
              ) : null}
              {call.callStatus == 14 ? <Badge>Standby Given</Badge> : null}
              {call.callStatus == 15 ? (
                <Badge>Pending For Verification</Badge>
              ) : null}
            </span>
          </div>
        </div>

        {/*  Row 2*/}

        <div className="flex space-x-1">
          <div className="dark:text-gray-200 text-black text-sm space-x-2  flex items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start w-full my-2">
            <div className=" ">
              <span>Brand :{brand}</span>
            </div>
            <div className=" ">
              <span>Model:{model}</span>
            </div>
            <div className=" ">
              <span>Serial Number: {serialno}</span>
            </div>

            {product == "Laptop" ||
            product == "Server" ||
            product == "Desktop" ? (
              <>
                <div className="">
                  <span>Operating System :{os}</span>
                </div>
              </>
            ) : null}
          </div>

          <div className="dark:text-gray-200 text-black text-sm  bg-gray-100 dark:bg-gray-800 p-2 rounded-md  my-2 w-1/2 flex items-center justify-end space-x-1">
            {/* /////////////////////////////// . History  ///////////////////////////////////////////// */}
            <Button
              onClick={() => {
                setAssetHistoryModalOpen(true);
              }}
              layout="outline"
            >
              View Asset History
            </Button>

            <Button
              onClick={() => {
                setHistoryModalOpen(true);
              }}
              layout="outline"
            >
              View Call History
            </Button>
          </div>
        </div>

        <div className="dark:text-gray-200 text-black flex flex-row  items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start lg:space-x-8  w-full ">
          {/* Row - 1 */}
          <div className="flex flex-col  text-sm my-1 w-full ">
            <div>
              <span className="font-semibold w-1/5">Product Type :</span>{" "}
              {product}
            </div>
            {unit.customerId ? (
              <div>
                <span className="font-semibold w-1/5">State : </span>{" "}
                {unit.customerId.state}
              </div>
            ) : null}
            <div>
              <span className="font-semibold w-1/5">Account :</span>{" "}
              {account.accountName}
            </div>
            {/* ---------------------------------------------------------------------------------------------------------------- */}

            {mouse[0] ? (
              <div>
                <span className="font-semibold w-1/5">Mouse Model :</span>{" "}
                {mouse[0] ? mouse[0].mousename : ""}
              </div>
            ) : null}
            {mouse[0] ? (
              <div>
                <span className="font-semibold w-1/5">Mouse Serial : </span>{" "}
                {mouse[0] ? mouse[0].mousesno : ""}
              </div>
            ) : null}
          </div>

          {/*  Row 2 */}

          <div className="flex flex-col  text-sm my-1 w-full ">
            <div>
              <span className="font-semibold w-1/5">Customer : </span>{" "}
              {customer.customerName}
            </div>
            <div>
              <span className="font-semibold w-1/5">Unit : </span>{" "}
              {unit.unitName}
            </div>
            {unit.customerId ? (
              <div>
                <span className="font-semibold w-1/5">PIN Code : </span>{" "}
                {unit.customerId.pincode}
              </div>
            ) : null}
            {/* ---------------------------------------------------------------------------------------------------------------- */}
            {kbd[0] ? (
              <div>
                <span className="font-semibold w-1/5">KBD Model :</span>{" "}
                {kbd[0].keyboardname}
              </div>
            ) : null}

            {kbd[0] ? (
              <div>
                <span className="font-semibold w-1/5">KBD Serial: </span>{" "}
                {kbd[0] ? kbd[0].keyboardsno : ""}
              </div>
            ) : null}
          </div>
          {/*  Row 3 */}

          <div className=" flex flex-col  text-sm my-1 w-full">
            {unit.customerId ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">
                  Location type :{" "}
                </span>{" "}
                {unit.customerId.locationType}
              </div>
            ) : null}
            {/* ---------------------------------------------------------------------------------------------------------------- */}
            {monitor[0] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">Monitor : </span>{" "}
                {monitor[0] ? monitor[0].monitorname : ""}
              </div>
            ) : null}
            {monitor[0] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">
                  Monitor Serial :
                </span>{" "}
                {monitor[0] ? monitor[0].monitorsno : ""}
              </div>
            ) : null}

            {smps[0] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">SMPS1 Model :</span>{" "}
                {smps[0] ? smps[0].smpsname : ""}
              </div>
            ) : null}
            {smps[0] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">
                  SMPS1 Serial :{" "}
                </span>{" "}
                {smps[0] ? smps[0].smpssno : ""}
              </div>
            ) : null}
          </div>
          {/* Row 4 */}

          <div className="flex flex-col  text-sm my-1 w-full ">
            {/* ---------------------------------------------------------------------------------------------------------------- */}
            {hdd[0] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">HDD1 Model:</span>{" "}
                {hdd[0] ? hdd[0].hddname : ""}
              </div>
            ) : null}
            {hdd[0] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">HDD1 Serial :</span>{" "}
                {hdd[0] ? hdd[0].hddsno : ""}
              </div>
            ) : null}

            {hdd[1] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">HDD2 Model : </span>{" "}
                {hdd[1] ? hdd[1].hddname : ""}
              </div>
            ) : null}

            {hdd[1] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">HDD2 Serial: </span>{" "}
                {hdd[1] ? hdd[1].hddsno : ""}
              </div>
            ) : null}
            {motherboard[0] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">Motherboard: </span>{" "}
                {motherboard[0] ? motherboard[0].motherboardname : ""}
              </div>
            ) : null}

            {motherboard[0] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">MBD Serial : </span>
                {motherboard[0] ? motherboard[0].motherboardsno : ""}
              </div>
            ) : null}
          </div>
          {/* -----------Row 5---------- */}
          <div className="flex flex-col  text-sm my-1 w-full ">
            <div>
              <span className="font-semibold w-1/5">Business : </span>{" "}
              {Business}
            </div>
            {unit.customerId ? (
              <div>
                <span className="font-semibold w-1/5">District : </span>{" "}
                {unit.customerId.district}
              </div>
            ) : null}
            {/* ---------------------------------------------------------------------------------------------------------------- */}

            {ram[0] ? (
              <div>
                <span className="font-semibold w-1/5">RAM1 Modell:</span>{" "}
                {ram[0] ? ram[0].ramname : ""}
              </div>
            ) : null}
            {ram[0] ? (
              <div>
                <span className="font-semibold w-1/5">RAM1 Serial:</span>{" "}
                {ram[0] ? ram[0].ramsno : ""}
              </div>
            ) : null}

            {ram[1] ? (
              <div>
                <span className="font-semibold w-1/5">RAM2 Model:</span>{" "}
                {ram[1] ? ram[1].ramname : ""}
              </div>
            ) : null}

            {ram[1] ? (
              <div>
                <span className="font-semibold w-1/5">RAM2 Serial : </span>{" "}
                {ram[1] ? ram[1].ramsno : ""}
              </div>
            ) : null}
            {/* {opticaldrive[0] ? (
              <div>
                <span className="font-semibold w-1/5">Optical Model: </span>{" "}
                {opticaldrive[0] ? opticaldrive[0].opticaldrivename : ""}
              </div>
            ) : null}

            {opticaldrive[0] ? (
              <div>
                <span className="font-semibold w-1/5">Optical Serial : </span>{" "}
                {opticaldrive[0] ? opticaldrive[0].opticaldrivesno : ""}
              </div>
            ) : null} */}
          </div>
        </div>

        {/* <hr className="my-4" /> */}

        <div className="flex space-x-1">
          <div className="dark:text-gray-200 text-black text-sm flex  flex-wrap items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start  w-full my-2 ">
            {/* /////////////////////////////// . Engineer INFO  ///////////////////////////////////////////// */}
            <div className=" font-semibold">
              <span>
                Engineer:{" "}
                <span className="font-normal">{call.employeeName}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="dark:text-gray-200 text-black text-sm flex flex-col flex-wrap items-start bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start  w-full  ">
          {/* /////////////////////////////// . Problem Description  ///////////////////////////////////////////// */}
          <div className=" font-semibold">
            <span>
              Problem Description:{" "}
              <span className="font-normal"> {call.problem}</span>
            </span>
          </div>
        </div>
        <div className="dark:text-gray-200 text-black text-sm flex  space-x-2 items-start bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start  w-full my-2 ">
          {/* /////////////////////////////// . Update  ///////////////////////////////////////////// */}
          <div className="flex flex-col w-3/4">
            <Label className="w-full">
              <span>Status Update </span>
              <Select
                className="inline"
                onChange={(e) => {
                  setCall({ ...call, callStatus: e.target.value });
                  console.log(call);
                  if (e.target.value == "11") {
                    setSpareModal(true);
                  }
                }}
                value={call.callStatus}
              >
                <option value="0">Pending For Allocation</option>
                <option value="1">Pending for Percall Approval</option>
                <option value="2"> Pending for Response</option>
                <option value="3"> Pending for OEM Response</option>
                <option value="4"> Pending for 2nd Response</option>
                <option value="5"> Pending for Customer</option>
                <option value="6"> Under Observation</option>
                <option value="7"> Pending for Others</option>
                <option value="8"> Pending for Spare</option>
                <option value="13"> Pending For Spare Collection</option>
                <option value="12"> Spare Taken CMRR</option>
                <option value="14"> Standby Given</option>
                <option value="9"> Spare in Transit</option>
                <option value="10"> Cancelled Calls</option>
                <option value="15"> Pending For Verification</option>
                <option value="11"> Closed Calls</option>
              </Select>
            </Label>
          </div>
          <div className="flex flex-col w-1/4">
            <Label className="w-full">
              <span>Spare Update</span>
              <Select
                className="inline w-1/2"
                onChange={(e) => {
                  // setCall({ ...call, spareUsed: e.target.value });
                  setSpareStatus(e.target.value);
                  console.log(call);
                }}
                value={spareStatus}
              >
                <option value="" disabled>
                  Select Spare Status
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Select>
            </Label>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////// */}
      </div>
    );
  };

  const InvTable = (
    number,
    items,
    activeRowID,
    setActiveRowID,
    existswap,
    setExistswap,
    tableType
  ) => {
    return (
      <div className=" bg-gray-200 dark:bg-gray-700 p-3 h-64 overflow-y-scroll">
        {tableType == "new" ? (
          <form
            // onSubmit={handlevendorSubmit}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Enter Serial Number "
              onChange={async (e) => {
                setListNumber(number);
                await setInvSearch(e.target.value);

                // await thegetter(number);
                // console.log("*********************");
                // console.log(inventdata);
              }}
            />
          </form>
        ) : null}
        <div className="mb- mt-4">
          {/* ----------------------------------------------Table----------------------------------------------------- */}
          <TableContainer className="mt-4">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>Type</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Serial Number</TableCell>
                  <TableCell>Select</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {items.map((user, i) => (
                  <TableRow
                    className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                      activeRowID[number] == user._id
                        ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                        : "white"
                    } `}
                    key={i}
                    onClick={() => {
                      // setActiveRowID(user._id);
                      // console.log("the id is " + user._id);
                      // setSelectedProd(user);
                      // setAssetDetails(user);
                      // console.log(user.product.keyboard[0].keyboardname);
                    }}
                  >
                    <TableCell className="w-8">
                      <div className="flex items-center text-sm ">
                        {/* <Avatar
                          className="hidden ml-2 mr-3 md:block"
                          src="https://s3.amazonaws.com/uifaces/faces/twitter/suribbles/128.jpg"
                          alt="User image"
                        /> */}
                        <div>
                          <p className="font-semibold">
                            {capitalize(user.type)}
                          </p>
                          {/* <p className="text-xs text-gray-600 dark:text-gray-400">
                            {user.accountName}
                          </p> */}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="">
                      {/* later add celltextoverflow class */}
                      <div className="w-40 overflow-auto text-sm">
                        {user.name}
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="w-40 overflow-auto text-sm">
                        {user.sno}
                      </div>
                    </TableCell>
                    <TableCell>
                      {user.sno != "" ? (
                        <Button
                          layout="outline"
                          className="dark:border-green-700 border-green-400"
                          onClick={() => {
                            let tempexist = [...existswap];
                            tempexist[number] = user;
                            setExistswap(tempexist);

                            // -----------row id
                            let temp = [...activeRowID];
                            temp[number] = -1;
                            setActiveRowID(temp);
                          }}
                        >
                          Select
                        </Button>
                      ) : null}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* ----------------------------------------------Table----------------------------------------------------- */}
        </div>

        {/* ------------------------------------Bottom Bar---------------------------------- */}
      </div>
    );
  };

  const AssetItemPick = (number) => {
    return (
      <div className="my-2">
        <div className="text-sm font-bold dark:text-white ">
          Inventory Movement: {number + 1}
        </div>
        {/* -----Type Selection---- */}
        <div className="flex flex-row items-center">
          {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
          <div className="mt-1 flex flex-row items-center justify-start w-full ">
            {/* ---------------------------Product Drop Down-------------------------------------- */}

            <div className="w-1/4">
              <Select
                onChange={(e) => {
                  // setBusiness(e.target.value);
                  let temp = selectedItem;
                  selectedItem[number] = e.target.value;
                  setSelectedItem(temp);

                  let thevalue = e.target.value;

                  // -------setting the data for the tables -----
                  if (thevalue == "Mouse") {
                    dataSetter(mouse, number);
                  } else if (thevalue == "Keyboard") {
                    dataSetter(kbd, number);
                  } else if (thevalue == "Monitor") {
                    dataSetter(monitor, number);
                  } else if (thevalue == "Cpu") {
                    dataSetter(cpu, number);
                  } else if (thevalue == "Ram") {
                    dataSetter(ram, number);
                  } else if (thevalue == "Fan") {
                    dataSetter(fan, number);
                  } else if (thevalue == "Motherboard") {
                    dataSetter(motherboard, number);
                  } else if (thevalue == "SMPS") {
                    dataSetter(smps, number);
                  } else if (thevalue == "HDD") {
                    dataSetter(hdd, number);
                  } else if (thevalue == "Gcard") {
                    dataSetter(gcard, number);
                  } else if (thevalue == "EnetCard") {
                    dataSetter(enetcard, number);
                  } else if (thevalue == "SerialCard") {
                    dataSetter(serialcard, number);
                  } else if (thevalue == "ParalellCard") {
                    dataSetter(parallelcard, number);
                  } else if (thevalue == "OpticalDrive") {
                    dataSetter(opticaldrive, number);
                  } else if (thevalue == "Others") {
                    dataSetter(others, number);
                  }
                  // ----------getting inventory
                  thegetter(number);
                  // ----clearing that existswap and inventswap
                  let tempexist = [...existswap];
                  tempexist[number] = {
                    name: "Not Selected",
                    sno: "Not Selected",
                  };
                  setExistswap(tempexist);
                  let tempinvent = [...inventswap];
                  tempinvent[number] = {
                    name: "Not Selected",
                    sno: "Not Selected",
                  };
                  setInventswap(tempinvent);
                }}
                className="mt-1 "
              >
                <option value="" selected disabled>
                  Pick Item
                </option>
                <option value="Mouse">Mouse</option>
                <option value="Keyboard">Keyboard</option>
                <option value="Monitor">Monitor</option>
                <option value="Cpu">Cpu</option>
                <option value="Ram">Ram</option>
                <option value="Fan">Fan</option>
                <option value="Motherboard">Motherboard</option>
                <option value="SMPS">SMPS</option>
                <option value="HDD">HDD</option>
                <option value="Gcard">Gcard</option>
                <option value="EnetCard">EnetCard</option>
                <option value="SerialCard">SerialCard</option>
                <option value="ParalellCard">ParalellCard</option>
                <option value="OpticalDrive">OpticalDrive</option>
                <option value="Others">Others</option>
              </Select>
            </div>

            {/* <Button
              layout="outline"
              className="dark:border-green-700 border-green-400"
              onClick={() => {
                console.log("Swap");
                handleSwap();
              }}
            >
              Swap
            </Button> */}

            {/* <Button
              layout="outline"
              className="dark:border-green-700 border-green-400"
              onClick={() => {
                console.log("Swap");
                handleSwap();
              }}
            >
              Swap
            </Button> */}
            {existswap[number]._id ? (
              <Button
                layout="outline"
                className="dark:border-green-700 border-green-400 ml-2"
                onClick={() => {
                  setImageUploadMenuMessage("defective");
                  setimageIndex(number);
                  setIsImgUploadMenuModal(true);
                }}
              >
                {defectiveImgUrl == ""
                  ? "Upload Defective Spare"
                  : "Uploaded Defective Spare"}
              </Button>
            ) : null}
            {inventswap[number]._id ? (
              <Button
                layout="outline"
                className="dark:border-green-700 border-green-400 ml-2"
                onClick={() => {
                  setImageUploadMenuMessage("good");
                  setimageIndex(number);
                  setIsImgUploadMenuModal(true);
                }}
              >
                {goodSpareImgUrl == ""
                  ? "Upload Good Spare"
                  : "Uploaded Good Spare"}
              </Button>
            ) : null}
          </div>
          {/* + and - buttons */}
          <div className="flex flex-row items-center justify-center  ">
            <div
              className="ml-3 bg-gray-100 dark:bg-gray-400 dark:hover:bg-gray-200 rounded-full
            "
            >
              {number == assetpickerarray.length - 1 ? (
                <Button
                  onClick={() => {
                    selectedItem.push("");
                    // setting search to ""
                    setInvSearch("");
                    // -----new module-----
                    let tempassetpicker = [...assetpickerarray];
                    let temp = { item: "test" };
                    tempassetpicker.push(temp);
                    setAssetpickerarray(tempassetpicker);

                    // ------- new active row ids
                    let tempactiveid = [...activeRowID];
                    tempactiveid.push(-1);
                    setActiveRowID(tempactiveid);
                    let tempsecondactiveid = [...secondactiveRowID];
                    tempsecondactiveid.push(-1);
                    setSecondactiveRowID(tempsecondactiveid);

                    // -----data and invent data
                    let tempd = [...data];
                    tempd.push({});
                    setData(tempd);
                    let tempinvdata = [...inventdata];
                    tempinvdata.push({});
                    setInventData(tempinvdata);
                    // ---exists swap and inventswap  ----
                    let texist = [...existswap];
                    texist.push({
                      name: "Not Selected",
                      sno: "Not Selected",
                    });
                    setExistswap(texist);
                    let tinvent = [...inventswap];
                    tinvent.push({
                      name: "Not Selected",
                      sno: "Not Selected",
                    });
                    setInventswap(tinvent);
                    //image push

                    let tempgoodspare = [...goodSpareImgUrl];
                    tempgoodspare.push("");
                    setGoodSpareImgUrl(tempgoodspare);

                    let tempdefective = [...defectiveImgUrl];
                    tempdefective.push("");
                    setDefectiveImgUrl(tempdefective);
                  }}
                  icon={Add}
                  layout="link"
                  aria-label="Like"
                  size="small"
                />
              ) : null}
            </div>
            {number == 0 || number != assetpickerarray.length - 1 ? null : (
              <div className="ml-1 bg-gray-100 dark:bg-gray-400 dark:hover:bg-gray-200 rounded-full">
                <Button
                  onClick={() => {
                    // setting search to ""
                    setInvSearch("");

                    selectedItem.pop();
                    let tempassetpicker = [...assetpickerarray];
                    tempassetpicker.pop();
                    setAssetpickerarray(tempassetpicker);

                    // ------- new active row ids
                    let tempactiveid = [...activeRowID];
                    tempactiveid.pop();
                    setActiveRowID(tempactiveid);
                    let tempsecondactiveid = [...secondactiveRowID];
                    tempsecondactiveid.pop();
                    setSecondactiveRowID(tempsecondactiveid);

                    // ---exists swap and inventswap  ----
                    let texist = [...existswap];
                    texist.pop();
                    setExistswap(texist);
                    let tinvent = [...inventswap];
                    tinvent.pop();
                    setInventswap(tinvent);

                    //image
                    let tempgoodspare = [...goodSpareImgUrl];
                    tempgoodspare.pop();
                    setGoodSpareImgUrl(tempgoodspare);

                    let tempdefective = [...defectiveImgUrl];
                    tempdefective.pop();
                    setDefectiveImgUrl(tempdefective);
                  }}
                  icon={Remove}
                  layout="link"
                  aria-label="Like"
                  size="small"
                />
              </div>
            )}
          </div>
        </div>
        {/* Selection Modules */}
        <div className="flex flex-row items-start space-x-2">
          {/* -------Existing Item Table ----------*/}

          <TableContainer className="mt-4">
            <div className="dark:text-gray-200 text-black text-sm flex space-x-2 items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start  w-full my-2 font-bold">
              Items In Asset
            </div>
            <Table>
              <TableHeader>
                <tr className="flex flex-row justify-between">
                  <TableCell>Type</TableCell>
                  <TableCell>Model</TableCell>
                  <TableCell>Serial Number</TableCell>

                  <TableCell>
                    <span
                      className="cursor-pointer"
                      // onClick={() => setActiveRowID(-1)}
                    >
                      Items
                    </span>
                  </TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                <div className="flex flex-col justify-around">
                  <TableRow
                    className={`hover:shadow-lg dark:hover:bg-gray-600 flex flex-row justify-between  ${
                      activeRowID[number] == existswap[number]._id
                        ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                        : "white"
                    } `}
                    key={number}
                    onClick={() => {
                      // setActiveRowID(i);
                    }}
                  >
                    <TableCell className="w-8">
                      <div className="flex items-center text-sm ">
                        <div>
                          <p className="font-semibold">
                            {selectedItem[number]}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{existswap[number].name}</span>
                    </TableCell>

                    <TableCell>
                      <span className="text-sm">{existswap[number].sno}</span>
                    </TableCell>

                    <TableCell className="text-center ">
                      {selectedItem[number] == "" ? null : (
                        <Button
                          // layout="link"
                          size="icon"
                          aria-label="DropDown"
                          onClick={() => {
                            console.log(activeRowID[number]);
                            if (activeRowID[number] != -1) {
                              let temp = [...activeRowID];
                              temp[number] = -1;
                              setActiveRowID(temp);
                            } else {
                              let temp = [...activeRowID];
                              temp[number] = number;
                              setActiveRowID(temp);
                            }
                            // setActiveRowID(-1);
                          }}
                          className="rounded-lg m-1"
                        >
                          <DropdownIcon
                            className="w-5 h-5"
                            aria-hidden="true"
                          />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>

                  {activeRowID[number] == number
                    ? InvTable(
                        number,
                        data[number],
                        activeRowID,
                        setActiveRowID,
                        existswap,
                        setExistswap,
                        "exist"
                      )
                    : null}
                </div>

                {/* {existswap.map((user, i) => (
                  
                ))} */}
              </TableBody>
            </Table>
            {/* <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              label="Table navigation"
              onChange={onPageChange}
            />
          </TableFooter> */}
          </TableContainer>

          {/*----------- Inventory Selection Table ----------- */}

          <TableContainer className="mt-4">
            <div className="dark:text-gray-200 text-black text-sm flex space-x-2 items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start  w-full my-2 font-bold">
              Items In Inventory
            </div>
            <Table>
              <TableHeader>
                <tr className="flex flex-row justify-between">
                  <TableCell>Type</TableCell>
                  <TableCell>Model</TableCell>
                  <TableCell>Serial Number</TableCell>

                  <TableCell>
                    <span
                      className="cursor-pointer"
                      // onClick={() => setActiveRowID(-1)}
                    >
                      Items
                    </span>
                  </TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                <div className="flex flex-col justify-around">
                  <TableRow
                    className={`hover:shadow-lg dark:hover:bg-gray-600 flex flex-row justify-between  ${
                      secondactiveRowID[number] == inventswap[number]._id
                        ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                        : "white"
                    } `}
                    key={number}
                    onClick={() => {
                      // setActiveRowID(i);
                    }}
                  >
                    <TableCell className="w-8">
                      <div className="flex items-center text-sm ">
                        <div>
                          <p className="font-semibold">
                            {selectedItem[number]}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{inventswap[number].name}</span>
                    </TableCell>

                    <TableCell>
                      <span className="text-sm">{inventswap[number].sno}</span>
                    </TableCell>

                    <TableCell className="text-center ">
                      {selectedItem[number] == "" ? null : (
                        <Button
                          // layout="link"
                          size="icon"
                          aria-label="DropDown"
                          onClick={() => {
                            if (secondactiveRowID[number] != -1) {
                              let temp = [...secondactiveRowID];
                              temp[number] = -1;
                              setSecondactiveRowID(temp);
                            } else {
                              let temp = [...secondactiveRowID];
                              temp[number] = number;
                              setSecondactiveRowID(temp);
                            }
                            // setActiveRowID(-1);
                          }}
                          className="rounded-lg m-1"
                        >
                          <DropdownIcon
                            className="w-5 h-5"
                            aria-hidden="true"
                          />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>

                  {secondactiveRowID[number] == number
                    ? InvTable(
                        number,
                        inventdata[number],
                        secondactiveRowID,
                        setSecondactiveRowID,
                        inventswap,
                        setInventswap,
                        "new"
                      )
                    : null}
                </div>
              </TableBody>
            </Table>
            {/* <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              label="Table navigation"
              onChange={onPageChange}
            />
          </TableFooter> */}
          </TableContainer>
        </div>{" "}
      </div>
    );
  };

  const CallUpdater = () => {
    return (
      <div className="border-b pb-3">
        <div className="flex-row flex  space-x-3 mb-2">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Assigned Date</span>
              <Input
                className=""
                type="date"
                value={moment(call.assignedDate).format("YYYY-MM-DD")}
                onChange={(e) => {
                  setCall({ ...call, callAttendDate: e.target.value });
                }}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Call Attended ETA</span>
              <Input
                className=""
                type="time"
                value={call.assignedETA}
                onChange={(e) => {
                  setCall({ ...call, callAttendDate: e.target.value });
                }}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Call Attended Date*</span>
              <Input
                className=""
                type="date"
                value={callAttendDate}
                onChange={(e) => {
                  setCallAttendDate(e.target.value);
                }}
              />
            </Label>
            {moment(call.assignedDate).format("YYYY-MM-DD") >
            moment(callAttendDate).format("YYYY-MM-DD") ? (
              <span className="text-red-700 text-xs">
                Error: Selected date is before the assigned date!
              </span>
            ) : null}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Start Of Service*</span>
              <Input
                className=""
                type="time"
                value={startOfService}
                onChange={(e) => {
                  setStartOfService(e.target.value);
                }}
              />
            </Label>
            {call.assignedETA > startOfService &&
            moment(call.assignedDate).format("YYYY-MM-DD") ==
              moment(callAttendDate).format("YYYY-MM-DD") &&
            startOfService != "" ? (
              <span className="text-red-700 text-xs">
                Error: Time before assigned ETA!
              </span>
            ) : null}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>End Of Service*</span>
              <Input
                className=""
                type="time"
                value={endOfService}
                onChange={(e) => {
                  setEndOfService(e.target.value);
                }}
              />
            </Label>

            {endOfService < startOfService && endOfService != "" ? (
              <span className="text-red-700 text-xs">
                Error: Selected time is before start service time!
              </span>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col w-full">
          <Label className="w-full">
            <span>Action Taken*</span>
            <Input
              className=""
              type="text"
              value={actionTaken}
              onChange={(e) => {
                setActionTaken(e.target.value);
              }}
            />
          </Label>
        </div>
      </div>
    );
  };

  const CallEnder = () => {
    return (
      <div className="dark:text-gray-200 text-black text-sm flex   space-x-2 items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start  w-full my-2 ">
        {/* /////////////////////////////// . Update  ///////////////////////////////////////////// */}

        <div className="flex flex-col w-1/4">
          <Label className="w-full">
            <span>CCFR Signed</span>
            <Select
              className="inline w-1/2"
              onChange={(e) => {
                // setCall({ ...call, spareUsed: e.target.value });
                setCcfrStatus(e.target.value);
                // console.log(call);
              }}
              value={ccfrStatus}
            >
              <option value="" disabled>
                Select CCFR Status
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Select>
          </Label>
        </div>

        <div className="flex flex-col w-1/4 mt-5">
          {ccfrStatus == "Yes" ? (
            <Button
              layout="outline"
              className=""
              onClick={() => {
                setImageUploadMenuMessage("ccfr");
                setIsImgUploadMenuModal(true);
              }}
            >
              Upload CCFR
            </Button>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <>
      {HistoryModal()}
      {AssetHistoryModal()}
      {ImgUploadModal()}
      {ImgUploadMenuModal()}
      {HistoryImgViewModal()}
      {AssetBar()}
      {CallUpdater()}
      {/* {spareStatus == "Yes" ? AssetItemPick() : null} */}
      {assetpickerarray.map((obj, i) => {
        return AssetItemPick(i);
      })}

      {UpdatedModal()}
      {NotSwapModal()}
      {SpareRequiredModal()}
      {CallEnder()}
      <div>
        <div className="flex flex-col items-center w-full mt-5 mb-5">
          {/* <Link to={`/app/viewcalls`}> */}
          <Button
            onClick={() => {
              handleUpdate();
            }}
            layout="outline"
          >
            Update Call
          </Button>
          {/* <Button
            onClick={() => {
            
              // console.log(existswap.length);
            }}
            layout="outline"
          >
            Test
          </Button> */}
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}

export default UpdateInvCall;
