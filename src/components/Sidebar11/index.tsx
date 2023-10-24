import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Line, Text } from "components";

type Sidebar11Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Sidebar11: React.FC<Sidebar11Props> = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              flexDirection: "column",
              marginTop: "22px",
              paddingLeft: "163px",
              color: "#ffffff",
              fontFamily: "Inter",
              [`&:hover, &.ps-active`]: {
                color: "#dcc1ff",
                fontWeight: "700 !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mt-[94px] pb-[7px] md:pr-10 sm:pr-5 pr-80 w-[62%]"
        >
          <MenuItem>
            <div className="flex items-end justify-start">
              <Text className="font-bold sm:text-[32px] md:text-[38px] text-[42px]">
                Create a new Project
              </Text>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex items-end justify-start md:pl-10 sm:pl-5">
              <Text className="text-2xl md:text-[22px] sm:text-xl w-full">
                Enter project details below and Invite new members to get
                started!
              </Text>
            </div>
          </MenuItem>
        </Menu>
        <Text
          className="bg-gray-900_07 flex h-[60px] items-center justify-center md:ml-[0] ml-[163px] mr-[599px] mt-[194px] sm:px-5 rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-[60px]"
          size="txtInterRegular32"
        >
          1
        </Text>
        <Text
          className="md:ml-[0] ml-[294px] mr-[300px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_07 w-auto"
          size="txtInterBold32Gray90007"
        >
          Project Details
        </Text>
        <Line className="bg-gray-900_07 h-[86px] md:ml-[0] ml-[193px] mr-[626px] mt-6 w-[3px]" />
        <Text
          className="bg-gray-900_07 flex h-[60px] items-center justify-center md:ml-[0] ml-[163px] mr-[599px] mt-3.5 rounded-[50%] md:text-3xl sm:text-[28px] text-[32px] text-center text-purple-100 w-[60px]"
          size="txtInterBold32Purple100"
        >
          2
        </Text>
        <Text
          className="mb-[699px] md:ml-[0] ml-[294px] mr-[285px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_07 w-auto"
          size="txtInterBold32Gray90007"
        >
          Invite Members
        </Text>
      </Sidebar>
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
