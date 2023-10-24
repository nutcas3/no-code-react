import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Line, Text } from "components";

type Sidebar2Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;
type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Sidebar2: React.FC<Sidebar2Props> = (props) => {
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
      <Sidebar className={props.className}>
        <Menu
          menuItemStyles={{
            button: {
              padding: "6px",
              flexDirection: "column",
              marginTop: "33px",
              color: "#ffffff",
              fontSize: "16px",
              fontFamily: "Inter",
              [`&:hover, &.ps-active`]: {
                color: "#dcc1ff",
                fontWeight: "700 !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mt-[99px] md:pr-10 sm:pr-5 pr-[130px] w-[77%]"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
        <Text
          className="bg-gray-900_07 flex h-12 items-center justify-center md:ml-[0] ml-[58px] rounded-[50%] text-center w-12"
          size="txtInterRegular24"
        >
          1
        </Text>
        <Text
          className="md:ml-[0] ml-[184px] mr-[205px] text-2xl md:text-[22px] text-gray-900_07 sm:text-xl w-auto"
          size="txtInterBold24Gray90007"
        >
          Project Details
        </Text>
        <Line className="bg-deep_purple-200 h-[60px] md:ml-[0] ml-[89px] mr-[468px] mt-[27px] w-[3px]" />
        <Text
          className="bg-gray-900_07 flex h-12 items-center justify-center md:ml-[0] ml-[65px] mr-[447px] mt-5 rounded-[50%] text-2xl md:text-[22px] text-center text-purple-100 sm:text-xl w-12"
          size="txtInterBold24Purple100"
        >
          2
        </Text>
        <Text
          className="mb-[578px] md:ml-[0] ml-[184px] mr-[194px] text-2xl md:text-[22px] text-gray-900_07 sm:text-xl w-auto"
          size="txtInterBold24Gray90007"
        >
          Invite Members
        </Text>
      </Sidebar>
    </>
  );
};

Sidebar2.defaultProps = {};

export default Sidebar2;
