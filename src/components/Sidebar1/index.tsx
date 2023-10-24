import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

type Sidebar1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Sidebar1: React.FC<Sidebar1Props> = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Menu
          menuItemStyles={{
            button: {
              padding: "11px 11px 11px 32px",
              gap: "8px",
              textAlign: "center",
              fontSize: "14px",
              fontFamily: "Inter",
            },
          }}
          className="flex flex-col items-center justify-start mb-[1611px] mt-[49px] sm:pr-5 pr-8 w-[89%]"
        >
          <MenuItem
            icon={
              <Img className="h-4 w-4" src="images/img_work.svg" alt="work" />
            }
          >
            <Text className="font-semibold mb-[5px] text-blue-A400 w-auto">
              My Projects
            </Text>
          </MenuItem>
          <MenuItem
            icon={
              <Img
                className="h-[18px] mb-2 w-[18px]"
                src="images/img_trendingup.svg"
                alt="trendingup"
              />
            }
          >
            <Text className="font-medium mt-0.5 text-blue_gray-900 w-auto">
              Reports
            </Text>
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
