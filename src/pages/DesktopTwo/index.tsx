import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import Sidebar2 from "components/Sidebar2";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const DesktopTwoPage: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    { label: "Create a new Project" },
    {
      label:
        "<>Enter project details below and Invite new members to<br />get started!</>",
    },
    { label: "1" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-[54px] items-start justify-between w-full">
          <Sidebar2 className="!sticky !w-[560px] bg-deep_purple-A200 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-start justify-start md:mt-0 mt-[156px] md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterBold24Black900"
            >
              Invite members
            </Text>
            <div className="flex flex-row sm:gap-10 gap-56 items-start justify-start max-w-[826px] mt-[39px] w-full">
              <Text
                className="text-black-900_a8 text-xl w-auto"
                size="txtInterBold20Black900a8"
              >
                Email
              </Text>
              <Text
                className="text-black-900_a8 text-xl w-auto"
                size="txtInterBold20Black900a8"
              >
                Role
              </Text>
              <Text
                className="text-black-900_a8 text-xl w-auto"
                size="txtInterBold20Black900a8"
              >
                Permission
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[39px] w-[95%] md:w-full">
              <Input
                name="frame1000001135"
                placeholder="Enter Email Adress"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="rounded w-[30%] md:w-full"
                type="email"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
              <Input
                name="frame1000001138"
                placeholder="Select role"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="ml-12 md:ml-[0] rounded w-[30%] md:w-full"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
              <Input
                name="frame1000001141"
                placeholder="Can View"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="md:ml-[0] ml-[49px] rounded w-[30%] md:w-full"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-10 w-[95%] md:w-full">
              <Input
                name="frame1000001136"
                placeholder="Enter Email Adress"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="rounded w-[30%] md:w-full"
                type="email"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
              <Input
                name="frame1000001139"
                placeholder="Select role"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="ml-12 md:ml-[0] rounded w-[30%] md:w-full"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
              <Input
                name="frame1000001142"
                placeholder="Can Edit"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="md:ml-[0] ml-[49px] rounded w-[30%] md:w-full"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-10 w-[95%] md:w-full">
              <Input
                name="frame1000001137"
                placeholder="Enter Email Adress"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="rounded w-[30%] md:w-full"
                type="email"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
              <Input
                name="frame1000001140"
                placeholder="Select role"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="ml-12 md:ml-[0] rounded w-[30%] md:w-full"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
              <Input
                name="frame1000001143"
                placeholder="Can View"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="md:ml-[0] ml-[49px] rounded w-[30%] md:w-full"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-10 w-[95%] md:w-full">
              <Input
                name="frame1000001148"
                placeholder="Enter Email Adress"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="rounded w-[30%] md:w-full"
                type="email"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
              <Input
                name="frame1000001144"
                placeholder="Select role"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="ml-12 md:ml-[0] rounded w-[30%] md:w-full"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
              <Input
                name="frame1000001145"
                placeholder="Can Edit"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="md:ml-[0] ml-[49px] rounded w-[30%] md:w-full"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[138px] mt-12 rounded-md"
              leftIcon={
                <div className="h-2.5 mr-2.5 w-2.5 border-blue-A400 border border-solid bg-white-A700 my-[3px]">
                  <Img className="h-2.5" src="images/img_grid.svg" alt="grid" />
                </div>
              }
              color="blue_A400"
              size="sm"
              variant="outline"
            >
              <div className="font-semibold text-center text-sm tracking-[-0.08px]">
                Add members
              </div>
            </Button>
            <div className="flex flex-row gap-10 items-center justify-end md:ml-[0] ml-[510px] mt-[72px] w-[35%] md:w-full">
              <div className="flex flex-col items-center justify-center sm:px-5 px-6 py-2 w-auto">
                <Text
                  className="text-base text-blue-A400 text-center tracking-[-0.10px] underline w-auto"
                  size="txtInterSemiBold16BlueA400"
                >
                  Back
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[158px] rounded-md text-base text-center tracking-[-0.10px]"
                color="blue_A400"
                size="md"
                variant="fill"
              >
                Create project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
