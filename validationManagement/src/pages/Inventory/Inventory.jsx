import React, { useState } from "react";
import Tab from "../../components/Tabs/Tabs";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import FlagIcon from "@mui/icons-material/Flag";
import TopicTwoToneIcon from "@mui/icons-material/TopicTwoTone";
import InventoryTwoToneIcon from "@mui/icons-material/InventoryTwoTone";
import AppsTwoToneIcon from "@mui/icons-material/AppsTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import FileDownloadTwoToneIcon from "@mui/icons-material/FileDownloadTwoTone";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { Dialog } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { CheckBox } from "@mui/icons-material";

export default function Inventory() {
  const [isSelected, setIsSelected] = useState("history");
  const [addTrackwise, setAddTrackwise] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isRTM, setIsRTM] = useState(false);
  const [trackwiseForm, setTrackwiseForm] = useState(false);
  const [trackModel, setTrackModel] = useState(false);
  const [trackMatrix, setTrackMatrix] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleTracwiseAdd = () => {
    setAddTrackwise(!addTrackwise);
    setIsRTM(false);
    setIsApproved(false);
    setTrackMatrix(false);
  };

  const handleTrackwiseForm = () => {
    setTrackwiseForm(true);
    setTrackModel(false);
    setTrackMatrix(false);
  };
  const handleTrackMatrix = () => {
    setTrackMatrix(true);
    setTrackModel(false);
    setTrackwiseForm(false);
  };
  const handleTrackModel = () => {
    setTrackModel(true);
    setTrackwiseForm(false);
    setTrackMatrix(false);
  };
  const DefaultData = (
    <>
      <div className="grid grid-cols-5 gap-2 p-1">
        <div className="col-span-2 bg-gray-100 shadow-lg h-[760px]">
          <div className="flex gap-4 py-2 border border-b-[#003366] p-2">
            <div
              className={`${
                isSelected === "entity"
                  ? "bg-[#003366] text-white p-1 rounded-md"
                  : ""
              } cursor-pointer`}
              onClick={() => setIsSelected("entity")}
            >
              Entity
            </div>
            <div
              className={`${
                isSelected === "favorites"
                  ? "bg-[#003366] text-white p-1 rounded-md"
                  : ""
              } cursor-pointer`}
              onClick={() => setIsSelected("favorites")}
            >
              Favorites
            </div>
            <div
              className={`${
                isSelected === "history"
                  ? "bg-[#003366] text-white p-1 rounded-md"
                  : ""
              } cursor-pointer`}
              onClick={() => setIsSelected("history")}
            >
              History
            </div>
          </div>
          {isSelected === "history" ? (
            <div className="p-2">
              <div className="flex gap-2 ">
                <div
                  className="rounded-full border border-black p-2 text-white bg-blue-500 w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
                  onClick={handleTracwiseAdd}
                >
                  {addTrackwise ? "-" : "+"}
                </div>
                <div className="cursor-pointer" onClick={handleTrackwiseForm}>
                  {" "}
                  Trackwise
                </div>
                <div>
                  <FlagIcon style={{ color: "#f4c00a" }} />
                </div>
              </div>
              {addTrackwise ? (
                <div className="ml-5 mt-2">
                  <div className="flex gap-2 ">
                    <div
                      className="rounded-full border border-black p-2 text-white bg-blue-500 w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
                      onClick={() => setIsApproved(!isApproved)}
                    >
                      {isApproved ? "-" : "+"}
                    </div>
                    <div>
                      <TopicTwoToneIcon />
                    </div>
                    <div className="cursor-pointer"> Approved</div>
                  </div>
                  {isApproved ? (
                    <>
                      <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 ">
                        <div className="flex gap-2 ml-5 mt-2">
                          <div
                            className="rounded-full border border-black p-2 text-white bg-blue-500 w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
                            onClick={() => setIsRTM(!isRTM)}
                          >
                            {isRTM ? "-" : "+"}
                          </div>
                          <div>
                            <TopicTwoToneIcon />
                          </div>
                          <div className="cursor-pointer"> RTM</div>
                        </div>
                      </div>
                      {isRTM ? (
                        <>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div
                                  onClick={handleTrackModel}
                                  className="cursor-pointer"
                                >
                                  Q/DDTM/002.01
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div
                                  onClick={handleTrackModel}
                                  className="cursor-pointer"
                                >
                                  Q/DDTM/004.01
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div
                                  onClick={handleTrackModel}
                                  className="cursor-pointer"
                                >
                                  Q/DDTM/005.01
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div
                                  onClick={handleTrackModel}
                                  className="cursor-pointer"
                                >
                                  Q/DDTM/006.01
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div
                                  onClick={handleTrackMatrix}
                                  className="cursor-pointer"
                                >
                                  Q/TM/Trackwise/2023/001.02-1
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div
                                  onClick={handleTrackMatrix}
                                  className="cursor-pointer"
                                >
                                  Q/TM/Trackwise/2024/002.01-1
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div
                                  onClick={handleTrackMatrix}
                                  className="cursor-pointer"
                                >
                                  Q/TM/Trackwise/2024/003.02-1
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div
                                  onClick={handleTrackMatrix}
                                  className="cursor-pointer"
                                >
                                  Q/TM/Trackwise/2024/004.02-1
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </>
                  ) : null}
                  <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                    <div className="flex ml-5 gap-2  ">
                      <div>
                        <TopicTwoToneIcon />
                      </div>
                      <div className="cursor-pointer">
                        Inactive/Terminated/Suspended
                      </div>
                    </div>
                  </div>
                  <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                    <div className="flex ml-5 gap-2  ">
                      <div>
                        <TopicTwoToneIcon />
                      </div>
                      <div className="cursor-pointer">WIP</div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="col-span-3 shadow-lg">
          {trackwiseForm ? (
            <div className="p-3">
              <h5>Entity Details</h5>
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 flex flex-col gap-1">
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    Building Name
                  </div>
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    Room Name
                  </div>
                  <div className="bg-slate-200 flex justify-end"> Entry</div>
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    Entity N0
                  </div>
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    Validation On
                  </div>
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    Assessment ID
                  </div>
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    System Owner
                  </div>
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    Validation Status
                  </div>
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    Entity Type
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="col-span-2 flex flex-col gap-1">
                    <div>N/A</div>
                    <div>N/A</div>
                    <div>Trackwise</div>
                    <div>Trackwise</div>
                    <div>N/A</div>
                    <div>Q-SA-0003.01</div>
                    <div>Pankaj Jat</div>
                    <div>WIP</div>
                    <div>Computer System Validation(CSV)</div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Assessment Details
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">
                          Assesment Name
                        </th>
                        <th className="p-2 border border-black">
                          Assessment ID
                        </th>
                        <th className="p-2 border border-black">Created On</th>
                        <th className="p-2 border border-black">Status</th>
                        <th className="p-2 border border-black">
                          Assessment Plan
                        </th>
                        <th className="p-2 border border-black">Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">Trackwise</td>
                        <td className="p-2 border border-black">
                          Q-SA-0003.01
                        </td>
                        <td className="p-2 border border-black">
                          {" "}
                          1 july 2024
                        </td>
                        <td className="p-2 border border-black">Approved</td>
                        <td className="p-2 border border-black  ">
                          <VisibilityTwoToneIcon style={{ color: "blue" }} />
                        </td>
                        <td className="p-2 border border-black">
                          <FileDownloadTwoToneIcon style={{ color: "blue" }} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Assessment Summary
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">Section</th>
                        <th className="p-2 border border-black">Results</th>
                        <th className="p-2 border border-black">
                          {" "}
                          Decision Tree
                        </th>
                        <th className="p-2 border border-black">
                          Performed By
                        </th>
                        <th className="p-2 border border-black">
                          Completed On
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          Gxp Assesment For CSV
                        </td>
                        <td className="p-2 border border-black">GxP Impact</td>
                        <td className="p-2 border border-black"> </td>
                        <td className="p-2 border border-black">Amit Guru</td>
                        <td className="p-2 border border-black  ">
                          21 july 2024
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Validation Framework Details
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">
                          Validation Framework ID
                        </th>
                        <th className="p-2 border border-black">
                          Framework Title
                        </th>
                        <th className="p-2 border border-black"> Created On</th>
                        <th className="p-2 border border-black">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          VF-002-Q-0.2
                        </td>
                        <td className="p-2 border border-black">
                          Computer System Validation Framework GAMP-4
                        </td>
                        <td className="p-2 border border-black">
                          21 july 2024{" "}
                        </td>
                        <td className="p-2 border border-black">Approved</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Validation Criteria
                  </div>
                </div>
                <div className="py-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-1 grid grid-cols-2 gap-2">
                      <div className="bg-slate-300 flex justify-end">
                        {" "}
                        Entity Status Validation Rule
                      </div>
                      <div>Validated</div>
                    </div>
                    <div className="col-span-1 grid grid-cols-2 gap-2">
                      <div className="bg-slate-300 flex justify-end">
                        {" "}
                        Color
                      </div>
                      <div className="bg-green-600 w-[20px] mb-1"></div>
                    </div>
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">Framework</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          Computer System Validation Framework GAMP-4
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Assessment Summary
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">Section</th>
                        <th className="p-2 border border-black">Results</th>
                        <th className="p-2 border border-black">
                          {" "}
                          Decision Tree
                        </th>
                        <th className="p-2 border border-black">
                          Performed By
                        </th>
                        <th className="p-2 border border-black">
                          Completed On
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          Gxp Assesment For CSV
                        </td>
                        <td className="p-2 border border-black">GxP Impact</td>
                        <td className="p-2 border border-black"> </td>
                        <td className="p-2 border border-black">Amit Guru</td>
                        <td className="p-2 border border-black  ">
                          21 july 2024
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full"> Project Details</div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">Project ID</th>
                        <th className="p-2 border border-black">
                          Project Name
                        </th>
                        <th className="p-2 border border-black"> Created On</th>
                        <th className="p-2 border border-black">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          Q/PRJ/2024/002.01
                        </td>
                        <td className="p-2 border border-black">
                          Trackwise Upgration
                        </td>
                        <td className="p-2 border border-black">
                          21 july 2024{" "}
                        </td>
                        <td className="p-2 border border-black">Approved</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          Q/PRJ/2024/001.02
                        </td>
                        <td className="p-2 border border-black">
                          Project For Enhancement Of Change Control WorkFlow
                        </td>
                        <td className="p-2 border border-black">
                          21 April 2024{" "}
                        </td>
                        <td className="p-2 border border-black">Approved</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Risk Assissment Details
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">
                          Risk Assissment Name{" "}
                        </th>
                        <th className="p-2 border border-black">
                          Risk Assissment ID
                        </th>
                        <th className="p-2 border border-black">
                          {" "}
                          Risk Model Name{" "}
                        </th>
                        <th className="p-2 border border-black">
                          Risk Based Process
                        </th>
                        <th className="p-2 border border-black">
                          Risk Assessment Details
                        </th>
                        <th className="p-2 border border-black">
                          Risk Assessment Summary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          FRA For Trackwise Upgrade
                        </td>
                        <td className="p-2 border border-black">
                          Q/RA/2024/003.01
                        </td>
                        <td className="p-2 border border-black">
                          Risk Model CSV
                        </td>
                        <td className="p-2 border border-black">
                          Requirement Label
                        </td>
                        <td className="p-2 border border-black">
                          <VisibilityTwoToneIcon />{" "}
                        </td>
                        <td className="p-2 border border-black">
                          <VisibilityTwoToneIcon />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full"> Documents</div>
                </div>
                <div className="py-2"></div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Historical Documents
                  </div>
                </div>
                <div className="py-2"></div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Associate Schedules Details
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">Schedule ID</th>
                        <th className="p-2 border border-black">
                          Schedule Name
                        </th>
                        <th className="p-2 border border-black">
                          {" "}
                          Schedule Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>

                        <td className="p-2 border border-black">
                          Q/SCH/2024/007
                        </td>
                        <td className="p-2 border border-black">
                          Quaterly Audit Trail Review For Trackwise
                        </td>
                        <td className="p-2 border border-black">
                          Periodic Review
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Associate Schedules Details
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">Schedule ID</th>
                        <th className="p-2 border border-black">
                          Schedule Name
                        </th>
                        <th className="p-2 border border-black">
                          {" "}
                          Schedule Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>

                        <td className="p-2 border border-black">
                          Q/SCH/2024/007
                        </td>
                        <td className="p-2 border border-black">
                          Quaterly Audit Trail Review For Trackwise
                        </td>
                        <td className="p-2 border border-black">
                          Periodic Review
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Revalidation Review Schedule Task Details
                  </div>
                </div>
                <div className="py-2"></div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Periodic Review Schedule Task Details
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">Task Id</th>
                        <th className="p-2 border border-black">Task Type</th>
                        <th className="p-2 border border-black">
                          {" "}
                          Schedule ID
                        </th>
                        <th className="p-2 border border-black">
                          Schedule Name
                        </th>
                        <th className="p-2 border border-black">Due Date</th>
                        <th className="p-2 border border-black">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          Q/SCH/2024/007/ST/001
                        </td>
                        <td className="p-2 border border-black">
                          Quaterly Audit Trail Review
                        </td>
                        <td className="p-2 border border-black">
                          Q/SCH/2024/007
                        </td>
                        <td className="p-2 border border-black">
                          Quaterly Audit Trail Review For Trackwise
                        </td>
                        <td className="p-2 border border-black">
                          21 March 2024
                        </td>
                        <td className="p-2 border border-black">Completed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Schedule Assessment
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">
                          Schedule Assessment Id
                        </th>
                        <th className="p-2 border border-black">
                          Schedule Assessment Name{" "}
                        </th>
                        <th className="p-2 border border-black">Created On</th>
                        <th className="p-2 border border-black">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          Q/VSP/007/001
                        </td>
                        <td className="p-2 border border-black">Trackwise</td>
                        <td className="p-2 border border-black">15 Mar 2024</td>
                        <td className="p-2 border border-black">Approved</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : null}

          {trackModel ? (
            <>
              <div className="p-2">
                <h5 className="text-blue-600">Trace Model</h5>
                <div className="grid grid-cols-2 p-2 gap-2">
                  <div className="col-span-1 flex flex-col gap-3 ">
                    <div className="bg-slate-200 flex justify-end ">
                      Trace Model ID
                    </div>
                    <div className="bg-slate-200 flex justify-end">
                      {" "}
                      Target Date
                    </div>
                    <div className="bg-slate-200 flex justify-end pb-[30px]">
                      Trace Model Title
                    </div>
                    <div className="bg-slate-200 flex justify-end pb-[30px]">
                      Description
                    </div>
                  </div>
                  <div className="col-span-1 flex flex-col gap-3">
                    <div>Q/DDTM/004.01</div>
                    <div>12-Apr-2024</div>
                    <div>
                      <textarea rows={2} className="w-full bg-gray-100">
                        RTM For Addition Of Go And See Comments Flex Field In
                        Market Complaint Process Workflow
                      </textarea>
                    </div>
                    <div>
                      <textarea rows={2} className="w-full bg-gray-100">
                        RTM For Addition Of Go And See Comments Flex Field In
                        Market Complaint Process Workflow
                      </textarea>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full"> Trace Model</div>
                </div>

                <div className="flex py-2">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Trace Model Audit Details
                  </div>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-400 text-white">
                      <td className="p-2 border border-black">
                        Trace Model Id
                      </td>
                      <td className="p-2 border border-black">
                        Trace Model Title
                      </td>
                      <td className="p-2 border border-black">View</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-black">Q/DDTM/002.01</td>
                      <td className="p-2 border border-black">
                        Trace Model For Trackwise Version Upgrade From 9.1 to
                        10.8
                      </td>
                      <td className="p-2 border border-black">
                        <a href="">View</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex py-2">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Additional Information
                  </div>
                  <div className=" flex justify-end p-2 bg-sky-200 cursor-pointer">
                    <AddTwoToneIcon />
                  </div>
                </div>
              </div>
            </>
          ) : null}

          {trackMatrix ? (
            <>
              <div className="p-2">
                <h5 className="text-blue-600">Trace Matrix</h5>
                <div className="p-3">
                  <div className="grid grid-cols-2 p-2 gap-2">
                    <div className="col-span-1 flex flex-col gap-3 ">
                      <div className="bg-slate-200 flex justify-end ">
                        Category
                      </div>
                      <div className="bg-slate-200 flex justify-end ">
                        Sub Category
                      </div>
                      <div className="bg-slate-200 flex justify-end ">
                        Entity
                      </div>
                      <div className="bg-slate-200 flex justify-end ">
                        Entity No
                      </div>
                      <div className="bg-slate-200 flex justify-end ">
                        Trace Matrix ID
                      </div>
                      <div className="bg-slate-200 flex justify-end">
                        {" "}
                        Target Date
                      </div>
                      <div className="bg-slate-200 flex justify-end ">
                        Trace Model ID
                      </div>
                      <div className="bg-slate-200 flex justify-end pb-[30px]">
                        Trace Matrix Title
                      </div>
                      <div className="bg-slate-200 flex justify-end pb-[30px]">
                        Description
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-3">
                      <div>Computer System Validation</div>
                      <div>Global Application</div>
                      <div>Trackwise</div>
                      <div>Trackwise</div>
                      <div>Q/TM/Trackwise/2024/0002.01</div>
                      <div>12-Apr-2024</div>
                      <div>Q/DDTM/004.01</div>

                      <div>
                        <textarea rows={2} className="w-full bg-gray-100">
                          RTM For Addition Of Go And See Comments Flex Field In
                          Market Complaint Process Workflow
                        </textarea>
                      </div>
                      <div>
                        <textarea rows={2} className="w-full bg-gray-100">
                          RTM For Addition Of Go And See Comments Flex Field In
                          Market Complaint Process Workflow
                        </textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex py-2">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full"> Trace Model</div>
                </div>

                <div className="flex py-2">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Document Mapping{" "}
                  </div>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-400 text-white">
                      <th className="p-2 border border-black">#</th>
                      <th className="p-2 border border-black">Y-Axis</th>
                      <th className="p-2 border border-black">X-Axis</th>
                      <th className="p-2 border border-black">
                        Document Linking To
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-black">1</td>
                      <td className="p-2 border border-black">
                        Q/TM/URS/Trackwise/2024/0002.01
                      </td>
                      <td className="p-2 border border-black">
                        Q/TM/CSV/IQ/Trackwise/2024/0002.01
                      </td>
                      <td className="p-2 border border-black">URS-IQ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );

  const ProjectData = (
    <>
      <div className="grid grid-cols-5 gap-2 p-1">
        <div className="col-span-2 bg-gray-100 shadow-lg h-[760px]">
          <div className="flex gap-4 py-2 border border-b-[#003366] p-2">
            <div
              className={`${
                isSelected === "entity"
                  ? "bg-[#003366] text-white p-1 rounded-md"
                  : ""
              } cursor-pointer `}
              onClick={() => setIsSelected("entity")}
            >
              Entity
            </div>
            <div
              className={`${
                isSelected === "favorites"
                  ? "bg-[#003366] text-white p-1 rounded-md"
                  : ""
              } cursor-pointer`}
              onClick={() => setIsSelected("favorites")}
            >
              Favorites
            </div>
            <div
              className={`${
                isSelected === "history"
                  ? "bg-[#003366] text-white p-1 rounded-md"
                  : ""
              } cursor-pointer`}
              onClick={() => setIsSelected("history")}
            >
              History
            </div>
          </div>
          {isSelected === "history" ? (
            <div className="p-2">
              <div className="flex gap-2 ">
                <div
                  className="rounded-full border border-black p-2 text-white bg-blue-500 w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
                  onClick={handleTracwiseAdd}
                >
                  {addTrackwise ? "-" : "+"}
                </div>
                <div className="cursor-pointer" onClick={handleTrackwiseForm}>
                  {" "}
                  Trackwise
                </div>
                <div>
                  <FlagIcon style={{ color: "#f4c00a" }} />
                </div>
              </div>
              {addTrackwise ? (
                <div className="ml-5 mt-2">
                  <div className="flex gap-2 ">
                    <div
                      className="rounded-full border border-black p-2 text-white bg-blue-500 w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
                      onClick={() => setIsApproved(!isApproved)}
                    >
                      {isApproved ? "-" : "+"}
                    </div>
                    <div>
                      <TopicTwoToneIcon />
                    </div>
                    <div> Approved</div>
                  </div>
                  {isApproved ? (
                    <>
                      <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 ">
                        <div className="flex gap-2 ml-5 mt-2">
                          <div
                            className="rounded-full border border-black p-2 text-white bg-blue-500 w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
                            onClick={() => setIsRTM(!isRTM)}
                          >
                            {isRTM ? "-" : "+"}
                          </div>
                          <div>
                            <TopicTwoToneIcon />
                          </div>
                          <div> RTM</div>
                        </div>
                      </div>
                      {isRTM ? (
                        <>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div onClick={handleTrackModel}>
                                  Q/DDTM/002.01
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div onClick={handleTrackModel}>
                                  Q/DDTM/004.01
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div onClick={handleTrackModel}>
                                  Q/DDTM/005.01
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div onClick={handleTrackModel}>
                                  Q/DDTM/006.01
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div
                                  onClick={handleTrackMatrix}
                                  className="cursor-pointer"
                                >
                                  Q/TM/Trackwise/2023/001.02-1
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div
                                  onClick={handleTrackMatrix}
                                  className="cursor-pointer"
                                >
                                  Q/TM/Trackwise/2024/002.01-1
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div
                                  onClick={handleTrackMatrix}
                                  className="cursor-pointer"
                                >
                                  Q/TM/Trackwise/2024/003.02-1
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                            <div className="flex border-l-2 border-dotted border-l-gray-500 gap-2 ml-[30px] mt-2">
                              <div className="flex ml-5 gap-2  ">
                                <div>
                                  <InventoryTwoToneIcon />
                                </div>
                                <div
                                  onClick={handleTrackMatrix}
                                  className="cursor-pointer"
                                >
                                  Q/TM/Trackwise/2024/004.02-1
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </>
                  ) : null}
                  <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                    <div className="flex ml-5 gap-2  ">
                      <div>
                        <TopicTwoToneIcon />
                      </div>
                      <div>Inactive/Terminated/Suspended</div>
                    </div>
                  </div>
                  <div className=" border-l-2 border-dotted border-l-gray-500 ml-3 mt-2 ">
                    <div className="flex ml-5 gap-2  ">
                      <div>
                        <TopicTwoToneIcon />
                      </div>
                      <div>WIP</div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="col-span-3 shadow-lg">
          {trackwiseForm ? (
            <div className="p-3">
              <h5>Entity Details</h5>
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 flex flex-col gap-1">
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    Building Name
                  </div>
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    Room Name
                  </div>
                  <div className="bg-slate-200 flex justify-end"> Entry</div>
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    Entity N0
                  </div>
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    Validation On
                  </div>
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    Assessment ID
                  </div>
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    System Owner
                  </div>
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    Validation Status
                  </div>
                  <div className="bg-slate-200 flex justify-end">
                    {" "}
                    Entity Type
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="col-span-2 flex flex-col gap-1">
                    <div>N/A</div>
                    <div>N/A</div>
                    <div>Trackwise</div>
                    <div>Trackwise</div>
                    <div>N/A</div>
                    <div>Q-SA-0003.01</div>
                    <div>Pankaj Jat</div>
                    <div>WIP</div>
                    <div>Computer System Validation(CSV)</div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Assessment Details
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">
                          Assesment Name
                        </th>
                        <th className="p-2 border border-black">
                          Assessment ID
                        </th>
                        <th className="p-2 border border-black">Created On</th>
                        <th className="p-2 border border-black">Status</th>
                        <th className="p-2 border border-black">
                          Assessment Plan
                        </th>
                        <th className="p-2 border border-black">Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">Trackwise</td>
                        <td className="p-2 border border-black">
                          Q-SA-0003.01
                        </td>
                        <td className="p-2 border border-black">
                          {" "}
                          1 july 2024
                        </td>
                        <td className="p-2 border border-black">Approved</td>
                        <td className="p-2 border border-black  ">
                          <VisibilityTwoToneIcon style={{ color: "blue" }} />
                        </td>
                        <td className="p-2 border border-black">
                          <FileDownloadTwoToneIcon style={{ color: "blue" }} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Assessment Summary
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">Section</th>
                        <th className="p-2 border border-black">Results</th>
                        <th className="p-2 border border-black">
                          {" "}
                          Decision Tree
                        </th>
                        <th className="p-2 border border-black">
                          Performed By
                        </th>
                        <th className="p-2 border border-black">
                          Completed On
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          Gxp Assesment For CSV
                        </td>
                        <td className="p-2 border border-black">GxP Impact</td>
                        <td className="p-2 border border-black"> </td>
                        <td className="p-2 border border-black">Amit Guru</td>
                        <td className="p-2 border border-black  ">
                          21 july 2024
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Validation Framework Details
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">
                          Validation Framework ID
                        </th>
                        <th className="p-2 border border-black">
                          Framework Title
                        </th>
                        <th className="p-2 border border-black"> Created On</th>
                        <th className="p-2 border border-black">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          VF-002-Q-0.2
                        </td>
                        <td className="p-2 border border-black">
                          Computer System Validation Framework GAMP-4
                        </td>
                        <td className="p-2 border border-black">
                          21 july 2024{" "}
                        </td>
                        <td className="p-2 border border-black">Approved</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Validation Criteria
                  </div>
                </div>
                <div className="py-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-1 grid grid-cols-2 gap-2">
                      <div className="bg-slate-300 flex justify-end">
                        {" "}
                        Entity Status Validation Rule
                      </div>
                      <div>Validated</div>
                    </div>
                    <div className="col-span-1 grid grid-cols-2 gap-2">
                      <div className="bg-slate-300 flex justify-end">
                        {" "}
                        Color
                      </div>
                      <div className="bg-green-600 w-[20px] mb-1"></div>
                    </div>
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">Framework</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          Computer System Validation Framework GAMP-4
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Assessment Summary
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">Section</th>
                        <th className="p-2 border border-black">Results</th>
                        <th className="p-2 border border-black">
                          {" "}
                          Decision Tree
                        </th>
                        <th className="p-2 border border-black">
                          Performed By
                        </th>
                        <th className="p-2 border border-black">
                          Completed On
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          Gxp Assesment For CSV
                        </td>
                        <td className="p-2 border border-black">GxP Impact</td>
                        <td className="p-2 border border-black"> </td>
                        <td className="p-2 border border-black">Amit Guru</td>
                        <td className="p-2 border border-black  ">
                          21 july 2024
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full"> Project Details</div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">Project ID</th>
                        <th className="p-2 border border-black">
                          Project Name
                        </th>
                        <th className="p-2 border border-black"> Created On</th>
                        <th className="p-2 border border-black">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          Q/PRJ/2024/002.01
                        </td>
                        <td className="p-2 border border-black">
                          Trackwise Upgration
                        </td>
                        <td className="p-2 border border-black">
                          21 july 2024{" "}
                        </td>
                        <td className="p-2 border border-black">Approved</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          Q/PRJ/2024/001.02
                        </td>
                        <td className="p-2 border border-black">
                          Project For Enhancement Of Change Control WorkFlow
                        </td>
                        <td className="p-2 border border-black">
                          21 April 2024{" "}
                        </td>
                        <td className="p-2 border border-black">Approved</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Risk Assissment Details
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">
                          Risk Assissment Name{" "}
                        </th>
                        <th className="p-2 border border-black">
                          Risk Assissment ID
                        </th>
                        <th className="p-2 border border-black">
                          {" "}
                          Risk Model Name{" "}
                        </th>
                        <th className="p-2 border border-black">
                          Risk Based Process
                        </th>
                        <th className="p-2 border border-black">
                          Risk Assessment Details
                        </th>
                        <th className="p-2 border border-black">
                          Risk Assessment Summary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          FRA For Trackwise Upgrade
                        </td>
                        <td className="p-2 border border-black">
                          Q/RA/2024/003.01
                        </td>
                        <td className="p-2 border border-black">
                          Risk Model CSV
                        </td>
                        <td className="p-2 border border-black">
                          Requirement Label
                        </td>
                        <td className="p-2 border border-black">
                          <VisibilityTwoToneIcon />{" "}
                        </td>
                        <td className="p-2 border border-black">
                          <VisibilityTwoToneIcon />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full"> Documents</div>
                </div>
                <div className="py-2"></div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Historical Documents
                  </div>
                </div>
                <div className="py-2"></div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Associate Schedules Details
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">Schedule ID</th>
                        <th className="p-2 border border-black">
                          Schedule Name
                        </th>
                        <th className="p-2 border border-black">
                          {" "}
                          Schedule Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>

                        <td className="p-2 border border-black">
                          Q/SCH/2024/007
                        </td>
                        <td className="p-2 border border-black">
                          Quaterly Audit Trail Review For Trackwise
                        </td>
                        <td className="p-2 border border-black">
                          Periodic Review
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Associate Schedules Details
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">Schedule ID</th>
                        <th className="p-2 border border-black">
                          Schedule Name
                        </th>
                        <th className="p-2 border border-black">
                          {" "}
                          Schedule Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>

                        <td className="p-2 border border-black">
                          Q/SCH/2024/007
                        </td>
                        <td className="p-2 border border-black">
                          Quaterly Audit Trail Review For Trackwise
                        </td>
                        <td className="p-2 border border-black">
                          Periodic Review
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Revalidation Review Schedule Task Details
                  </div>
                </div>
                <div className="py-2"></div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Periodic Review Schedule Task Details
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">Task Id</th>
                        <th className="p-2 border border-black">Task Type</th>
                        <th className="p-2 border border-black">
                          {" "}
                          Schedule ID
                        </th>
                        <th className="p-2 border border-black">
                          Schedule Name
                        </th>
                        <th className="p-2 border border-black">Due Date</th>
                        <th className="p-2 border border-black">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          Q/SCH/2024/007/ST/001
                        </td>
                        <td className="p-2 border border-black">
                          Quaterly Audit Trail Review
                        </td>
                        <td className="p-2 border border-black">
                          Q/SCH/2024/007
                        </td>
                        <td className="p-2 border border-black">
                          Quaterly Audit Trail Review For Trackwise
                        </td>
                        <td className="p-2 border border-black">
                          21 March 2024
                        </td>
                        <td className="p-2 border border-black">Completed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-2">
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Schedule Assessment
                  </div>
                </div>
                <div className="py-2">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-400 text-white">
                        <th className="p-2 border border-black">#</th>
                        <th className="p-2 border border-black">
                          Schedule Assessment Id
                        </th>
                        <th className="p-2 border border-black">
                          Schedule Assessment Name{" "}
                        </th>
                        <th className="p-2 border border-black">Created On</th>
                        <th className="p-2 border border-black">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-black">1</td>
                        <td className="p-2 border border-black">
                          Q/VSP/007/001
                        </td>
                        <td className="p-2 border border-black">Trackwise</td>
                        <td className="p-2 border border-black">15 Mar 2024</td>
                        <td className="p-2 border border-black">Approved</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : null}

          {trackModel ? (
            <>
              <div className="p-2">
                <h5 className="text-blue-600">Trace Model</h5>
                <div className="grid grid-cols-2 p-2 gap-2">
                  <div className="col-span-1 flex flex-col gap-3 ">
                    <div className="bg-slate-200 flex justify-end ">
                      Trace Model ID
                    </div>
                    <div className="bg-slate-200 flex justify-end">
                      {" "}
                      Target Date
                    </div>
                    <div className="bg-slate-200 flex justify-end pb-[30px]">
                      Trace Model Title
                    </div>
                    <div className="bg-slate-200 flex justify-end pb-[30px]">
                      Description
                    </div>
                  </div>
                  <div className="col-span-1 flex flex-col gap-3">
                    <div>Q/DDTM/004.01</div>
                    <div>12-Apr-2024</div>
                    <div>
                      <textarea rows={2} className="w-full bg-gray-100">
                        RTM For Addition Of Go And See Comments Flex Field In
                        Market Complaint Process Workflow
                      </textarea>
                    </div>
                    <div>
                      <textarea rows={2} className="w-full bg-gray-100">
                        RTM For Addition Of Go And See Comments Flex Field In
                        Market Complaint Process Workflow
                      </textarea>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full"> Trace Model</div>
                </div>

                <div className="flex py-2">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Trace Model Audit Details
                  </div>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-400 text-white">
                      <td className="p-2 border border-black">
                        Trace Model Id
                      </td>
                      <td className="p-2 border border-black">
                        Trace Model Title
                      </td>
                      <td className="p-2 border border-black">View</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-black">Q/DDTM/002.01</td>
                      <td className="p-2 border border-black">
                        Trace Model For Trackwise Version Upgrade From 9.1 to
                        10.8
                      </td>
                      <td className="p-2 border border-black">
                        <a href="">View</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex py-2">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Additional Information
                  </div>
                  <div className=" flex justify-end p-2 bg-sky-200 cursor-pointer">
                    <AddTwoToneIcon />
                  </div>
                </div>
              </div>
            </>
          ) : null}

          {trackMatrix ? (
            <>
              <div className="p-2">
                <h5 className="text-blue-600">Trace Matrix</h5>
                <div className="p-3">
                  <div className="grid grid-cols-2 p-2 gap-2">
                    <div className="col-span-1 flex flex-col gap-3 ">
                      <div className="bg-slate-200 flex justify-end ">
                        Category
                      </div>
                      <div className="bg-slate-200 flex justify-end ">
                        Sub Category
                      </div>
                      <div className="bg-slate-200 flex justify-end ">
                        Entity
                      </div>
                      <div className="bg-slate-200 flex justify-end ">
                        Entity No
                      </div>
                      <div className="bg-slate-200 flex justify-end ">
                        Trace Matrix ID
                      </div>
                      <div className="bg-slate-200 flex justify-end">
                        {" "}
                        Target Date
                      </div>
                      <div className="bg-slate-200 flex justify-end ">
                        Trace Model ID
                      </div>
                      <div className="bg-slate-200 flex justify-end pb-[30px]">
                        Trace Matrix Title
                      </div>
                      <div className="bg-slate-200 flex justify-end pb-[30px]">
                        Description
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-3">
                      <div>Computer System Validation</div>
                      <div>Global Application</div>
                      <div>Trackwise</div>
                      <div>Trackwise</div>
                      <div>Q/TM/Trackwise/2024/0002.01</div>
                      <div>12-Apr-2024</div>
                      <div>Q/DDTM/004.01</div>

                      <div>
                        <textarea rows={2} className="w-full bg-gray-100">
                          RTM For Addition Of Go And See Comments Flex Field In
                          Market Complaint Process Workflow
                        </textarea>
                      </div>
                      <div>
                        <textarea rows={2} className="w-full bg-gray-100">
                          RTM For Addition Of Go And See Comments Flex Field In
                          Market Complaint Process Workflow
                        </textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex py-2">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full"> Trace Model</div>
                </div>

                <div className="flex py-2">
                  <div className="bg-sky-300 p-2">
                    <AppsTwoToneIcon />
                  </div>
                  <div className="p-2 bg-sky-200 w-full">
                    {" "}
                    Document Mapping{" "}
                  </div>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-400 text-white">
                      <th className="p-2 border border-black">#</th>
                      <th className="p-2 border border-black">Y-Axis</th>
                      <th className="p-2 border border-black">X-Axis</th>
                      <th className="p-2 border border-black">
                        Document Linking To
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-black">1</td>
                      <td className="p-2 border border-black">
                        Q/TM/URS/Trackwise/2024/0002.01
                      </td>
                      <td className="p-2 border border-black">
                        Q/TM/CSV/IQ/Trackwise/2024/0002.01
                      </td>
                      <td className="p-2 border border-black">URS-IQ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
  const tab = [
    { label: "Default", content: DefaultData },
    { label: "Project", content: ProjectData },
  ];
  return (
    <div className="">
      <div className="p-2 grid grid-cols-6">
        <h5 className="text-[#003366] col-span-3">Inventory Manager</h5>

        <div>
          <select className=" border border-black rounded-lg px-4  py-2">
            <option>All</option>
            <option>Default</option>
            <option>Project</option>
          </select>
        </div>
        <div>
          <input
            placeholder="Search Here"
            className="rounded-full border border-black py-2 px-3 ml-4"
          />
        </div>

        <div className="flex gap-8 items-center justify-end">
          <NoteAltOutlinedIcon
            color=""
            style={{ fontSize: 40 }}
            onClick={() => setIsOpen(!isOpen)}
          />
          <LocalPrintshopOutlinedIcon style={{ fontSize: 40 }} />
        </div>
      </div>
      <Tab tabs={tab} />
      <Dialog open={isOpen} maxWidth={"xl"} fullWidth={true}>
        <div className=" p-3">
          <div className="flex justify-end">
            <RxCross1 onClick={() => setIsOpen(false)} size={25} color="blue" className="cursor-pointer" />
          </div>
          <div className="border-b-2  border-indigo-500">
            <h5>Create Query</h5>
          </div>
          <div className="grid grid-cols-5 gap-5 py-3">
            <div className="col-span-2">
              <div className="bg-slate-200 flex justify-end pb-[25px]">
                {" "}
                Query Name
              </div>
            </div>
            <div className="col-span-3">
              <div>
                <textarea
                  rows={2}
                  className="border-2 border-gray-300 w-full"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="py-4 bg-gray-200 flex justify-between ">
            <div></div>
            <div className="flex justify-center "> With Criteria</div>
            <div className="flex justify-end items-center mr-2 ">
              Add/Remove Grouping
            </div>
          </div>
          <table className="w-full my-2">
            <thead>
              <tr className="bg-blue-400 text-white">
                <th className="p-2 border border-black">Row No</th>
                <th className="p-2 border border-black">Content Type</th>
                <th className="p-2 border border-black">Expression</th>
                <th className="p-2 border border-black">Search Term</th>
                <th className="p-2 border border-black">Operator</th>
                <th className="p-2 border border-black">Add/Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-black">1</td>
                <td className="p-2 border border-black">
                  <select>
                    <option>--Select--</option>
                  </select>
                </td>
                <td className="p-2 border border-black">
                  <select>
                    <option>--Select--</option>
                  </select>
                </td>
                <td className="p-2 border border-black">
                  <input />
                </td>
                <td className="p-2 border border-black">
                  <select>
                    <option>--Select--</option>
                  </select>
                </td>
                <td className="p-2 border border-black">
                  <div className="flex gap-5">
                    <button>
                      <a href="">Add</a>
                    </button>
                    <RxCross1 color="red" size={25} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-end ">
            {" "}
            <button className="py-1 px-4 border-1 border-green-600 shadow-xl rounded-lg hover:bg-green-100">
              Add
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="flex flex-col gap-4 ">
              <div className="bg-gray-200 pb-[120px] flex justify-end">
                Select Column To Display
              </div>
              <div className="bg-gray-200 flex justify-end">
                User or Group Assignment
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="h-[150px] overflow-y-auto ">
                <div className="flex gap-3">
                  <CheckBox /> <span>Approved On</span>
                </div>
                <div className="flex gap-3">
                  <CheckBox /> <span>Assigned Record Number</span>
                </div>
                <div className="flex gap-3">
                  <CheckBox /> <span>Authered By</span>
                </div>
                <div className="flex gap-3">
                  <CheckBox /> <span>CCR No</span>
                </div>
                <div className="flex gap-3">
                  <CheckBox /> <span>Content Library Name </span>
                </div>
                <div className="flex gap-3">
                  <CheckBox /> <span>Content Library No </span>
                </div>
                <div className="flex gap-3">
                  <CheckBox /> <span>Doc No </span>
                </div>
              </div>
              <div className="flex">
                <div className="p-1 border border-gray-300 rounded cursor-pointer">
                  User
                </div>
                <div className="p-1 border border-gray-300 rounded cursor-pointer">
                  Group
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="flex justify-between ">
            {" "}
            <button className="py-1 px-4 border-1 border-green-600 shadow-xl rounded-lg hover:bg-green-100">
              Preview
            </button>
            <div className="flex gap-2">
              <button className="py-1 px-4 border-1 border-green-600 shadow-xl rounded-lg hover:bg-green-100 ">
                Submit
              </button>
              <button className="py-1 px-4 border-1 border-green-600 shadow-xl rounded-lg hover:bg-green-100">
                Reset
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
