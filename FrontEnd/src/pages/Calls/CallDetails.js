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

import { DropdownIcon } from "../../icons";
import { useMemo } from "react";
import { TopBarContext } from "../../context/TopBarContext";
import { capitalize } from "../../helpers/toolfuctions/toolfunctions";

function CallDetails() {
  // floatbox
  let movehistory = useHistory();
  const params = useParams();
  const { topheading, setTopHeading } = useContext(TopBarContext);

  const id = params.assetid;
  const callid = params.callid;
  // console.log(id);
  //modal
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [assethistoryModalOpen, setAssetHistoryModalOpen] = useState(false);
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

  const [activeRowID, setActiveRowID] = useState(-1);
  const [secondactiveRowID, setSecondactiveRowID] = useState(-1);

  // ---------------New States------------
  const [itemtype, setItemtype] = useState(""); //Full system vs item
  const [selectedItem, setSelectedItem] = useState(""); //the selected item category
  const [data, setData] = useState([]); //for first table expansion
  const [inventdata, setInventData] = useState([]); //for second table expansion
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
  const [imgUrl, setImgUrl] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [imageUploadMenuMessage, setImageUploadMenuMessage] = useState("");

  const [goodSpareImgUrl, setGoodSpareImgUrl] = useState("");
  const [defectiveImgUrl, setDefectiveImgUrl] = useState("");
  const [ccfrImgUrl, setCcfrImgUrl] = useState("");

  const [isHistoryImgViewModal, setIsHistoryImgViewModal] = useState(false);
  const [goodSpareHistoryImg, setGoodSpareHistoryImg] = useState("");
  const [defectiveHistoryImg, setDefectiveHistoryImg] = useState("");
  const [ccfrHistoryImg, setCcfrHistoryImg] = useState("");

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
        console.log("PHOTO URL", url);
        setImgUrl(url);
        setDefectiveImgUrl(url);
      });
    } else if (message == "good") {
      photoUpload(imgFile, (url) => {
        console.log("PHOTO URL", url);
        setImgUrl(url);
        setGoodSpareImgUrl(url);
      });
    } else if (message == "ccfr") {
      photoUpload(imgFile, (url) => {
        console.log("PHOTO URL", url);
        setImgUrl(url);
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
              <img src={imgUrl} className="my-2" width="100" height="100" />
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
          className="w-8/12 dark:bg-gray-800 p-10 my-12 h-screen  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-scroll"
          // className="w-6/12 h-8/12 dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-scroll text-cente items-center justify-center"
        >
          <ModalHeader>Images</ModalHeader>
          <ModalBody>
            <div className="flex flex-col justify-center ">
              {defectiveHistoryImg != "" ? (
                <>
                  <div className="text-lg font-semibold my-2 w-full">
                    {" "}
                    Replaced Item
                  </div>
                  <img
                    src={defectiveHistoryImg}
                    className="my-2"
                    width="500"
                    height="500"
                  />
                </>
              ) : null}
              {goodSpareHistoryImg != "" ? (
                <>
                  <div className="text-lg font-semibold my-2 w-full">
                    {" "}
                    Replaced by
                  </div>
                  <img
                    src={goodSpareHistoryImg}
                    className="my-2"
                    width="500"
                    height="500"
                  />
                </>
              ) : null}
              {ccfrHistoryImg != "" ? (
                <>
                  <div className="text-lg font-semibold my-2 w-full"> CCFR</div>
                  <img
                    src={ccfrHistoryImg}
                    className="my-2"
                    width="500"
                    height="500"
                  />
                </>
              ) : null}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => {
                setDefectiveHistoryImg("");
                setGoodSpareHistoryImg("");
                setCcfrHistoryImg("");
                setIsHistoryImgViewModal(false);
              }}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  //-----------------------------------------------------------------

  // ----------------------Heading Use Effect-------------
  useEffect(() => {
    setTopHeading("Call Details");
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
  const [searchtype, setSearchType] = useState("");
  const [searchlabel, setSearchLabel] = useState("");
  const [searchquery, setSearchQuery] = useState("");

  // imp states
  const [callAttendDate, setCallAttendDate] = useState("");
  const [startOfService, setStartOfService] = useState("");
  const [endOfService, setEndOfService] = useState("");
  const [actionTaken, setActionTaken] = useState("");

  // use effect to add fields to the item coming from asset
  useEffect(() => {
    let temp = data;
    let thetype = selectedItem.toLowerCase();
    let theitemandsystem = itemtype.toLowerCase();

    temp.map((item, i) => {
      item.name = item[`${thetype}name`];
      item.sno = item[`${thetype}sno`];
      item.type = thetype;
      item.condition = "Bad";
      item.systype = theitemandsystem;
    });

    console.log(temp);
    setData(temp);
    return () => {
      "Data Updation Done";
    };
  }, [data]);

  // -----use effect to pull new inventory list according to filters
  useEffect(() => {
    thegetter();
  }, [selectedItem]);

  async function thegetter() {
    console.log("getter called");
    console.log(selectedItem);
    let payload = {
      pages: {
        page: page,
        limit: 1000000,
      },
      filters: {
        type: selectedItem.toLowerCase(),
        location: location,
        condition: "Good",
        searchtype: searchtype,
        searchquery: searchquery,
      },
    };
    // console.log(`${API}/asset/${Emp.getId()}/getall`);

    try {
      let response = await axios({
        url: `${API}/inventory/${Emp.getId()}/getall`,
        method: "POST",
        data: payload,
      });
      console.log(response.data.out);
      // setTotalResults(response.data.total);
      // const { total, data } = response.data;
      // console.log(data + "Now");

      setInventData(response.data.out);
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
            className="w-9/12 dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-scroll"
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
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm  w-1/2">{entry.note}</span>
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
            className="w-9/12 dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-scroll"
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
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm  w-1/2">{entry.note}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{entry.actionTaken}</span>
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
    console.log("ASSET CALL")
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

  const AssetBar = () => {
    return (
      <div className="dark:text-white my-4 ">
        {/* Row 1  */}
        {/* <div className="text-xl font-semibold">Asset Information</div> */}
        {/* Row 1*/}
        <div className="flex space-x-1 flex-wrap">
          <div className="dark:text-gray-200 text-black text-sm flex flex-wrap space-x-2 items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start  w-full my-2 ">
            <div className=" ">
              <span>
                <span className=" font-semibold ">
                  <span>Call Number: </span>
                </span>
                {call.callNo}
              </span>
            </div>
            <div className=" ">
              <span>
                <span className=" font-semibold ">
                  <span>Contact Person: </span>
                </span>
                {call.contactPerson}
              </span>
            </div>
            <div className=" ">
              <span>
                <span className=" font-semibold ">
                  <span>Date: </span>
                </span>
                {moment(call.date).format("DD-MM-YYYY")}
              </span>
            </div>
          </div>
        </div>

        <div className="dark:text-gray-200 text-black text-sm space-x-1  flex flex-row items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start my-2 ">
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
            {call.callStatus == 2 ? <Badge>Pending for Response</Badge> : null}
            {call.callStatus == 3 ? (
              <Badge>Pending for OEM Response</Badge>
            ) : null}
            {call.callStatus == 4 ? (
              <Badge>Pending for 2nd Response</Badge>
            ) : null}
            {call.callStatus == 5 ? <Badge>Pending for Customer</Badge> : null}
            {call.callStatus == 6 ? <Badge>Under Observation</Badge> : null}
            {call.callStatus == 7 ? <Badge>Pending for Others</Badge> : null}
            {call.callStatus == 8 ? <Badge>Pending for Spare</Badge> : null}
            {call.callStatus == 9 ? <Badge>Spare in Transit</Badge> : null}
            {call.callStatus == 10 ? <Badge>Cancelled Calls</Badge> : null}
            {call.callStatus == 11 ? <Badge>Closed Calls</Badge> : null}
            {call.callStatus == 12 ? <Badge>Spare Taken CMRR</Badge> : null}
          </span>
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

        {/*  Row 2*/}

        <div className="flex space-x-1">
          <div className="dark:text-gray-200 text-black text-sm space-x-2  flex items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start w-full my-2">
            <div className=" ">
              <span>
                {" "}
                <span className=" font-semibold ">Brand :</span>
                {brand}
              </span>
            </div>
            <div className=" ">
              <span>
                <span className=" font-semibold ">Model:</span>
                {model}
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-1">
          <div className="dark:text-gray-200 text-black text-sm space-x-2  flex items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start w-full my-2">
            <div className=" ">
              <span>
                <span className=" font-semibold ">Serial Number:</span>
                {serialno}
              </span>
            </div>

            {product == "Laptop" ||
            product == "Server" ||
            product == "Desktop" ? (
              <>
                <div className="">
                  <span>
                    <span className=" font-semibold ">Operating System :</span>
                    {os}
                  </span>
                </div>
              </>
            ) : null}
          </div>
        </div>
        {/* <div className="dark:text-gray-200 text-black text-sm  bg-gray-100 dark:bg-gray-800 p-2 rounded-md  my-2 w-1/2 flex items-center justify-end space-x-1">
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
          </div> */}

        <div className="dark:text-gray-200  text-black flex flex-col md:flex-row flex-wrap items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-begin lg:justify-around lg:space-x-8  w-full ">
          {/* Row - 1 */}
          <div className="flex flex-col  text-sm my-3  mx-3  align-left w-full lg:w-1/6">
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

          <div className="flex flex-col  text-sm my-3 mx-3 align-left w-full lg:w-1/6  ">
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

          <div className=" flex flex-col  text-sm my-3 mx-3 align-left w-full lg:w-1/6 ">
            {unit.customerId ? (
              <div>
                <span className="font-semibold w-1/5 ">Location type : </span>{" "}
                {unit.customerId.locationType}
              </div>
            ) : null}
            {/* ---------------------------------------------------------------------------------------------------------------- */}
            {monitor[0] ? (
              <div>
                <span className="font-semibold w-1/5 ">Monitor : </span>{" "}
                {monitor[0] ? monitor[0].monitorname : ""}
              </div>
            ) : null}
            {monitor[0] ? (
              <div>
                <span className="font-semibold w-1/5 ">Monitor Serial :</span>{" "}
                {monitor[0] ? monitor[0].monitorsno : ""}
              </div>
            ) : null}

            {smps[0] ? (
              <div>
                <span className="font-semibold w-1/5 ">SMPS1 Model :</span>{" "}
                {smps[0] ? smps[0].smpsname : ""}
              </div>
            ) : null}
            {smps[0] ? (
              <div>
                <span className="font-semibold w-1/5 ">SMPS1 Serial : </span>{" "}
                {smps[0] ? smps[0].smpssno : ""}
              </div>
            ) : null}
          </div>
          {/* Row 4 */}

          <div className="flex flex-col  text-sm my-3 mx-3 align-left w-full lg:w-1/6 ">
            {/* ---------------------------------------------------------------------------------------------------------------- */}
            {hdd[0] ? (
              <div>
                <span className="font-semibold w-1/5 ">HDD1 Model:</span>{" "}
                {hdd[0] ? hdd[0].hddname : ""}
              </div>
            ) : null}
            {hdd[0] ? (
              <div>
                <span className="font-semibold w-1/5 ">HDD1 Serial :</span>{" "}
                {hdd[0] ? hdd[0].hddsno : ""}
              </div>
            ) : null}

            {hdd[1] ? (
              <div>
                <span className="font-semibold w-1/5 ">HDD2 Model : </span>{" "}
                {hdd[1] ? hdd[1].hddname : ""}
              </div>
            ) : null}

            {hdd[1] ? (
              <div>
                <span className="font-semibold w-1/5 ">HDD2 Serial: </span>{" "}
                {hdd[1] ? hdd[1].hddsno : ""}
              </div>
            ) : null}
            {motherboard[0] ? (
              <div>
                <span className="font-semibold w-1/5 ">Motherboard: </span>{" "}
                {motherboard[0] ? motherboard[0].motherboardname : ""}
              </div>
            ) : null}

            {motherboard[0] ? (
              <div>
                <span className="font-semibold w-1/5 ">MBD Serial : </span>
                {motherboard[0] ? motherboard[0].motherboardsno : ""}
              </div>
            ) : null}
          </div>
          {/* -----------Row 5---------- */}
          <div className="flex flex-col  text-sm my-3  mx-3 align-left w-full lg:w-1/6 ">
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

        {/* //////////////////////////////////////////////////////////////////////////// */}
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
    </>
  );
}

export default CallDetails;
