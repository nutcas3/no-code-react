import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Input, Line, Text, TextArea } from "components";
import Sidebar2 from "components/Sidebar2";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const DesktopOnePage: React.FC = () => {
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
        <div className="flex md:flex-col flex-row md:gap-[54px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar2 className="!sticky !w-[560px] bg-deep_purple-A200 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterBold24Black900"
            >
              Enter project details
            </Text>
            <Text
              className="mt-[38px] text-black-900_a8 text-xl"
              size="txtInterBold20Black900a8"
            >
              Project Name
            </Text>
            <Input
              name="groupSixtyEight"
              placeholder="TeamFolio"
              className="!placeholder:text-black-900_a8 !text-black-900_a8 leading-[normal] p-0 sm:px-5 text-base text-left w-full"
              wrapClassName="mt-[22px] outline outline-[1px] outline-indigo-900_e0 pl-7 pr-[35px] py-[25px] rounded-[15px] w-full"
              color="white_A700"
              variant="fill"
            ></Input>
            <Text
              className="mt-12 text-black-900_a8 text-xl"
              size="txtInterBold20Black900a8"
            >
              Project Description
            </Text>
            <TextArea
              className="bg-white-A700 border-0 leading-[150.00%] mt-[22px] outline outline-[1px] outline-indigo-900_e0 pb-[35px] pl-7 pr-[35px] pt-[19px] sm:px-5 rounded-[15px] text-base placeholder:text-black-900_a8 text-black-900_a8 text-left w-full"
              name="groupSixtySeven"
              placeholder="Loremipsumloremipsumloremipsum............
...................................................."
              name="groupSixtySeven"
              placeholder={`Loremipsumloremipsumloremipsum............
....................................................`}
            ></TextArea>
            <Text
              className="mt-12 text-black-900_a8 text-xl"
              size="txtInterBold20Black900a8"
            >
              About Project
            </Text>
            <div className="bg-white-A700 flex flex-col items-start justify-start mt-[22px] outline outline-[1px] outline-indigo-900_e0 p-1 rounded-[15px] w-full">
              <Text
                className="leading-[150.00%] ml-4 md:ml-[0] text-base text-black-900 w-[92%] sm:w-full"
                size="txtInterRegular16"
              >
                Lorem ipsum dolor sit amet consectetur. Pellentesque volutpat
                enim dui platea nunc. Mattis commodo faucibus egestas in. At
                nulla auctor scelerisque eu maecenas vivamus auctor id
                fermentum. Quam mattis massa suscipit morbi et adipiscing
                accumsan a. Integer mattis amet est quis ultrices.
              </Text>
            </div>
            <Button
              className="cursor-pointer font-semibold min-w-[84px] md:ml-[0] ml-[710px] mt-24 rounded-md text-base text-center tracking-[-0.10px]"
              color="blue_A400"
              size="md"
              variant="fill"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
