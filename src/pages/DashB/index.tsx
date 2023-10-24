import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, List, ReactTable, Text } from "components";
import DashBCard from "components/DashBCard";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

type TableRowType = {
  projectname: string;
  tags: string;
  deadline: string;
  priority: string;
  members: string;
};

const DashBPage: React.FC = () => {
  const tableData = React.useRef<TableRowType[]>([
    {
      projectname: "Project A",
      tags: "Research",
      deadline: "30th July",
      priority: "High",
      members: "9",
    },
    {
      projectname: "Project A",
      tags: "Research",
      deadline: "30th July",
      priority: "Medium",
      members: "9",
    },
    {
      projectname: "Project A",
      tags: "Research",
      deadline: "30th July",
      priority: "Low",
      members: "9",
    },
    {
      projectname: "Project A",
      tags: "Research",
      deadline: "30th July",
      priority: "Low",
      members: "9",
    },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("projectname", {
        cell: (info) => (
          <Text
            className="pb-[7px] sm:pl-5 pl-[35px] pt-[33px] text-base text-blue_gray-900 text-center"
            size="txtInterSemiBold16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[249px] sm:pl-5 pl-[21px] py-[15px] text-blue_gray-500 text-center text-sm uppercase"
            size="txtInterSemiBold14Bluegray500"
          >
            Project name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("tags", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row font-plusjakartasans gap-2.5 items-start justify-start sm:w-full">
            <Button
              className="cursor-pointer font-semibold min-w-[105px] text-center text-xs tracking-[-0.48px]"
              shape="round"
              color="blue_gray_500"
              size="sm"
              variant="fill"
            >
              Social media
            </Button>
            <Button
              className="cursor-pointer font-semibold min-w-[86px] text-center text-xs tracking-[-0.48px]"
              shape="round"
              color="blue_gray_500"
              size="sm"
              variant="fill"
            >
              Web app
            </Button>
            <Button
              className="cursor-pointer font-semibold min-w-[87px] text-center text-xs tracking-[-0.48px]"
              shape="round"
              color="blue_gray_500"
              size="sm"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[420px] sm:px-5 px-[35px] py-[15px] text-blue_gray-500 text-sm uppercase"
            size="txtInterSemiBold14Bluegray500"
          >
            Tags
          </Text>
        ),
      }),
      tableColumnHelper.accessor("deadline", {
        cell: (info) => (
          <Text
            className="pb-2.5 pl-1.5 pt-[34px] text-blue_gray-900 text-center text-sm"
            size="txtInterRegular14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[120px] py-[15px] text-blue_gray-500 text-center text-sm uppercase"
            size="txtInterSemiBold14Bluegray500"
          >
            Deadline
          </Text>
        ),
      }),
      tableColumnHelper.accessor("priority", {
        cell: (info) => (
          <div className="flex flex-row font-plusjakartasans items-center justify-center p-0.5">
            <Button
              className="cursor-pointer font-semibold min-w-[62px] ml-[5px] mr-[57px] mt-[23px] text-center text-xs tracking-[-0.48px]"
              shape="round"
              color="pink_100"
              size="sm"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[130px] pl-[13px] py-[15px] text-blue_gray-500 text-center text-sm uppercase"
            size="txtInterSemiBold14Bluegray500"
          >
            Priority
          </Text>
        ),
      }),
      tableColumnHelper.accessor("members", {
        cell: (info) => (
          <div className="flex font-inter relative">
            <div className="flex mt-auto w-[54%]">
              <Img
                className="h-8 my-auto rounded-[50%] w-8"
                src="images/img_ellipse19.png"
                alt="ellipseNineteen"
              />
              <Img
                className="h-8 ml-[-6px] my-auto rounded-[50%] w-8 z-[1]"
                src="images/img_ellipse22.png"
                alt="ellipseTwentyTwo"
              />
            </div>
            <Text
              className="border border-blue_gray-100 border-solid flex h-8 items-center justify-center ml-[-6px] mt-auto rounded-[50%] text-center text-gray-900_02 text-xs w-8 z-[1]"
              size="txtInterRegular12"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[108px] pl-[7px] py-[15px] text-blue_gray-500 text-center text-sm uppercase"
            size="txtInterSemiBold14Bluegray500"
          >
            Members
          </Text>
        ),
      }),
    ];
  }, []);

  const [textinputvalue, setTextinputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-3.5 items-start justify-end w-full">
          <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[30px] w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start md:px-5 w-[96%] md:w-full">
            <Sidebar1 className="!sticky !w-[280px] bg-light_blue-50 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-[42px] w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Input
                  name="textinput"
                  placeholder="Search"
                  value={textinputvalue}
                  onChange={(e) => setTextinputvalue(e)}
                  className="!placeholder:text-blue_gray-300 !text-blue_gray-300 p-0 text-left text-sm tracking-[-0.08px] w-full"
                  wrapClassName="border border-gray-300 border-solid flex"
                  prefix={
                    <Img
                      className="cursor-pointer h-6 mr-1.5 my-auto"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#9aa6ac"
                      className="cursor-pointer h-6 my-auto"
                      onClick={() => setTextinputvalue("")}
                      style={{
                        visibility:
                          textinputvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={24}
                      width={24}
                      viewBox="0 0 24 24"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[125px] rounded-md"
                  onClick={() => navigate("/personalinformationtwo")}
                  leftIcon={
                    <div className="h-2.5 mt-0.5 mb-1 mr-2.5 w-2.5 border-white-A700 border border-solid bg-white-A700">
                      <Img
                        className="h-2.5"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                    </div>
                  }
                  color="blue_A400"
                  size="sm"
                  variant="fill"
                >
                  <div className="font-semibold text-center text-sm tracking-[-0.08px]">
                    New project
                  </div>
                </Button>
              </div>
              <div className="flex flex-col mt-[30px] relative w-full">
                <div className="flex flex-col items-center justify-start mx-auto w-full">
                  <div className="flex flex-row md:gap-10 items-end justify-between w-full">
                    <div className="flex flex-col items-center justify-center p-2.5 w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
                        size="txtInterSemiBold24"
                      >
                        My projects
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center mb-0.5 mt-2.5 p-2.5 w-auto">
                      <a
                        href="javascript:"
                        className="text-blue-A400 text-center text-sm w-auto"
                      >
                        <Text size="txtInterSemiBold14">View more</Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="overflow-auto gap-3 mt-[-6px] mx-auto py-6 w-auto z-[1]">
                  <ReactTable
                    columns={tableColumns}
                    data={tableData.current}
                    rowClass={""}
                    headerClass="bg-gray-50"
                  />
                </div>
              </div>
              <div className="sm:h-[1315px] h-[498px] md:h-[887px] mt-[3px] relative w-full">
                <div className="absolute flex flex-col items-center justify-center left-[0] p-2.5 top-[1%] w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Followed projects
                  </Text>
                </div>
                <div className="absolute flex flex-col items-center justify-center p-2.5 right-[0] top-[0] w-auto">
                  <a
                    href="javascript:"
                    className="text-blue-A400 text-center text-sm w-auto"
                  >
                    <Text size="txtInterSemiBold14">View more</Text>
                  </a>
                </div>
                <List
                  className="absolute bottom-[0] sm:flex-col flex-row font-plusjakartasans gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-[0] justify-start mx-auto py-6 w-auto"
                  orientation="horizontal"
                >
                  {new Array(3).fill({}).map((props, index) => (
                    <React.Fragment key={`DashBCard${index}`}>
                      <DashBCard
                        className="bg-white-A700 flex flex-col gap-8 items-center justify-start pb-6 pt-2 px-2 rounded-md shadow-bs2 w-auto"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
              <List
                className="sm:flex-col flex-row font-plusjakartasans gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start py-6 w-auto md:w-full"
                orientation="horizontal"
              >
                {new Array(3).fill({}).map((props, index) => (
                  <React.Fragment key={`DashBCard${index}`}>
                    <DashBCard
                      className="bg-white-A700 flex flex-col gap-8 items-center justify-start pb-6 pt-2 px-2 rounded-md shadow-bs2 w-auto"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBPage;
