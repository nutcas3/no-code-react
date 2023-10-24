import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";
import UserProfileProjectsNavbarlogoleft from "components/UserProfileProjectsNavbarlogoleft";

const BacklogPage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <UserProfileProjectsNavbarlogoleft className="bg-white-A700 flex flex-col items-start justify-center max-w-[1440px] sm:px-5 px-[30px] w-full" />
          <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[279px] bg-gray-50 flex h-screen md:hidden justify-start overflow-auto top-[0]"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "11px 11px 11px 31px",
                    gap: "8px",
                    textAlign: "center",
                    fontSize: "14px",
                  },
                }}
                className="flex flex-col items-center justify-start mb-[1611px] mt-[49px] sm:pr-5 pr-[31px] w-[89%]"
              >
                <MenuItem
                  icon={
                    <Img
                      className="h-4 w-4"
                      src="images/img_work.svg"
                      alt="work"
                    />
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
            <div className="flex flex-1 flex-col gap-[31px] items-center justify-start md:mt-0 mt-5 w-full">
              <div className="flex flex-col gap-[15px] justify-start w-full">
                <div className="flex flex-row items-start justify-start w-auto">
                  <div className="flex flex-row items-center justify-start w-auto">
                    <div className="flex flex-col items-center justify-start px-1 rounded w-auto">
                      <Text
                        className="text-blue_gray-500_01 text-xs w-auto"
                        size="txtInterRegular12Bluegray50001"
                      >
                        Projects
                      </Text>
                    </div>
                    <Img
                      className="h-4 w-3"
                      src="images/img_arrowright_blue_gray_200.svg"
                      alt="arrowright"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start px-1 rounded w-auto">
                    <Text
                      className="text-blue_gray-900_03 text-xs w-auto"
                      size="txtInterRegular12Bluegray90003"
                    >
                      Project A
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[7px] w-full">
                  <div className="md:h-[30px] h-[35px] md:mt-0 mt-[5px] relative w-[125px]">
                    <Text
                      className="absolute h-max inset-y-[0] left-[0] my-auto text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.46px] w-auto"
                      size="txtInterSemiBold24Black900"
                    >
                      Project A
                    </Text>
                    <Img
                      className="absolute bottom-[0] right-[0] rounded-[50%] w-auto"
                      src="images/img_edit.svg"
                      alt="edit"
                    />
                  </div>
                  <div className="h-8 ml-9 md:ml-[0] md:mt-0 mt-[5px] relative w-[13%] md:w-full">
                    <div className="absolute h-8 inset-y-[0] my-auto right-[0] w-[81%]">
                      <div className="absolute h-8 inset-y-[0] my-auto right-[0] w-[77%]">
                        <div className="absolute h-8 inset-y-[0] my-auto right-[0] w-[70%]">
                          <div className="absolute border border-blue_gray-100_02 border-solid flex flex-col h-full inset-y-[0] items-center justify-end my-auto p-[7px] right-[0] rounded-[50%] w-8">
                            <Text
                              className="text-center text-gray-900_02 text-xs"
                              size="txtInterRegular12"
                            >
                              +
                            </Text>
                          </div>
                          <div className="absolute h-8 inset-y-[0] left-[0] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-8"></div>
                        </div>
                        <div className="absolute h-8 inset-y-[0] left-[0] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-8"></div>
                      </div>
                      <div className="absolute h-8 inset-y-[0] left-[0] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-8"></div>
                    </div>
                    <div className="absolute h-8 inset-y-[0] left-[0] my-auto outline outline-[2px] outline-white-A700 rounded-[50%] w-8"></div>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold mb-2 min-w-[132px] md:ml-[0] ml-[628px] rounded-md text-center text-sm tracking-[-0.08px]"
                    color="blue_A200"
                    size="sm"
                    variant="fill"
                  >
                    Complete sprint
                  </Button>
                  <Img
                    className="h-8 ml-1 md:ml-[0] rounded-md w-8"
                    src="images/img_share_blue_gray_600.svg"
                    alt="share"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 h-[47px] md:h-auto items-start justify-start w-full">
                  <Input
                    name="todo"
                    placeholder="Task name"
                    className="font-semibold md:h-auto p-0 placeholder:text-blue_gray-500_01 sm:h-auto text-left text-sm tracking-[0.08px] uppercase w-full"
                    wrapClassName="border-black-900 border-r border-solid md:flex-1 rounded-bl-md rounded-tl-md w-[39%] md:w-full"
                    type="text"
                    color="gray_100"
                    size="2xl"
                    variant="fill"
                  ></Input>
                  <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                    <div className="flex flex-col items-start justify-start pl-2 w-auto">
                      <Text
                        className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                        size="txtInterSemiBold14Bluegray50001"
                      >
                        Assignee
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                    <div className="flex flex-col items-start justify-start pl-2 w-auto">
                      <Text
                        className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                        size="txtInterSemiBold14Bluegray50001"
                      >
                        Priority
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                    <div className="flex flex-col items-start justify-start pl-2 w-auto">
                      <Text
                        className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                        size="txtInterSemiBold14Bluegray50001"
                      >
                        due date
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                    <div className="flex flex-col items-start justify-start pl-2 w-auto">
                      <Text
                        className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                        size="txtInterSemiBold14Bluegray50001"
                      >
                        status
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto md:w-full">
                  <div className="bg-gray-100 border-b border-blue_gray-300_01 border-solid flex flex-row h-[47px] md:h-auto items-start justify-start px-2 py-3 rounded-tl-md rounded-tr-md w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright_One"
                    />
                    <div className="flex flex-col items-start justify-start pl-2 w-auto">
                      <Text
                        className="capitalize text-blue_gray-500_01 text-sm tracking-[0.08px] w-auto"
                        size="txtInterSemiBold14Bluegray50001"
                      >
                        To Do
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 h-[47px] md:h-auto items-start justify-start w-full">
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-[47px] md:h-auto items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <div className="flex flex-col items-start justify-start pl-2 w-auto">
                        <Text
                          className="text-blue_gray-500_01 text-sm tracking-[0.08px] w-auto"
                          size="txtInterSemiBold14Bluegray50001"
                        >
                          this is a task to be done
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-row h-full items-center justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <Img
                        className="h-[26px] md:h-auto object-cover rounded-[12px] w-[25px]"
                        src="images/img_rectangle.png"
                        alt="rectangle"
                      />
                      <div className="flex flex-col gap-[-10px] items-start justify-start pl-2 w-auto">
                        <Text
                          className="text-blue_gray-500_01 text-sm tracking-[0.08px] w-auto"
                          size="txtInterSemiBold14Bluegray50001"
                        >
                          John doe
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-xs tracking-[0.07px] w-auto"
                          size="txtInterRegular12Bluegray50001"
                        >
                          UI/UX designer
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <Text
                        className="bg-pink-100 justify-center px-4 py-[3px] rounded-md text-red-400_01 text-sm tracking-[0.08px] w-auto"
                        size="txtInterSemiBold14Red40001"
                      >
                        High
                      </Text>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <div className="flex flex-col items-start justify-start pl-2 w-auto">
                        <Text
                          className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                          size="txtInterSemiBold14Bluegray50001"
                        >
                          08-08-2023
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <Button
                        className="cursor-pointer font-semibold min-w-[106px] rounded-md text-center text-sm tracking-[0.08px] uppercase"
                        color="green_A100"
                        size="xs"
                        variant="fill"
                      >
                        on track
                      </Button>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 h-[47px] md:h-auto items-start justify-start w-full">
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-[47px] md:h-auto items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <div className="flex flex-col items-start justify-start pl-2 w-auto">
                        <Text
                          className="text-blue_gray-500_01 text-sm tracking-[0.08px] w-auto"
                          size="txtInterSemiBold14Bluegray50001"
                        >
                          this is a task to be done
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-row h-full items-center justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <Img
                        className="h-[26px] md:h-auto object-cover rounded-[12px] w-[25px]"
                        src="images/img_rectangle_26x25.png"
                        alt="rectangle_One"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col gap-[-10px] items-start justify-start pl-2 w-auto">
                          <Text
                            className="text-blue_gray-500_01 text-sm tracking-[0.08px] w-auto"
                            size="txtInterSemiBold14Bluegray50001"
                          >
                            John doe
                          </Text>
                          <Text
                            className="text-blue_gray-500_01 text-xs tracking-[0.07px] w-auto"
                            size="txtInterRegular12Bluegray50001"
                          >
                            UI/UX designer
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <Button
                        className="!text-lime-700_01 cursor-pointer font-semibold min-w-[87px] rounded-md text-center text-sm tracking-[0.08px]"
                        color="amber_100"
                        size="xs"
                        variant="fill"
                      >
                        Medium
                      </Button>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <div className="flex flex-col items-start justify-start pl-2 w-auto">
                        <Text
                          className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                          size="txtInterSemiBold14Bluegray50001"
                        >
                          08-08-2023
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <Button
                        className="cursor-pointer font-semibold min-w-[86px] rounded-md text-center text-sm tracking-[0.08px] uppercase"
                        color="amber_100"
                        size="xs"
                        variant="fill"
                      >
                        at risk
                      </Button>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 h-[47px] md:h-auto items-start justify-start w-full">
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-[47px] md:h-auto items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <div className="flex flex-col items-start justify-start pl-2 w-auto">
                        <Text
                          className="text-blue_gray-500_01 text-sm tracking-[0.08px] w-auto"
                          size="txtInterSemiBold14Bluegray50001"
                        >
                          this is a task to be done
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-row h-full items-center justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <Img
                        className="h-[26px] md:h-auto object-cover rounded-[12px] w-[25px]"
                        src="images/img_rectangle_1.png"
                        alt="rectangle_Two"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col gap-[-10px] items-start justify-start pl-2 w-auto">
                            <Text
                              className="text-blue_gray-500_01 text-sm tracking-[0.08px] w-auto"
                              size="txtInterSemiBold14Bluegray50001"
                            >
                              John doe
                            </Text>
                            <Text
                              className="text-blue_gray-500_01 text-xs tracking-[0.07px] w-auto"
                              size="txtInterRegular12Bluegray50001"
                            >
                              UI/UX designer
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <Button
                        className="cursor-pointer font-semibold min-w-[61px] rounded-md text-center text-sm tracking-[0.08px]"
                        color="blue_gray_300_01"
                        size="xs"
                        variant="fill"
                      >
                        Low
                      </Button>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <div className="flex flex-col items-start justify-start pl-2 w-auto">
                        <Text
                          className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                          size="txtInterSemiBold14Bluegray50001"
                        >
                          08-08-2023
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <Button
                        className="cursor-pointer font-semibold min-w-[112px] rounded-md text-center text-sm tracking-[0.08px] uppercase"
                        color="pink_100"
                        size="xs"
                        variant="fill"
                      >
                        off track
                      </Button>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 h-[47px] md:h-auto items-start justify-start w-full">
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-[47px] md:h-auto items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <div className="flex flex-col items-start justify-start pl-2 w-auto">
                        <Text
                          className="text-blue_gray-500_01 text-sm tracking-[0.08px] w-auto"
                          size="txtInterSemiBold14Bluegray50001"
                        >
                          this is a task to be done
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-row h-full items-center justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <Img
                        className="h-[26px] md:h-auto object-cover rounded-[12px] w-[25px]"
                        src="images/img_rectangle_2.png"
                        alt="rectangle_Three"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col gap-[-10px] items-start justify-start pl-2 w-auto">
                            <Text
                              className="text-blue_gray-500_01 text-sm tracking-[0.08px] w-auto"
                              size="txtInterSemiBold14Bluegray50001"
                            >
                              John doe
                            </Text>
                            <Text
                              className="text-blue_gray-500_01 text-xs tracking-[0.07px] w-auto"
                              size="txtInterRegular12Bluegray50001"
                            >
                              UI/UX designer
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <Text
                        className="bg-pink-100 justify-center px-4 py-[3px] rounded-md text-red-400_01 text-sm tracking-[0.08px] w-auto"
                        size="txtInterSemiBold14Red40001"
                      >
                        High
                      </Text>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <div className="flex flex-col items-start justify-start pl-2 w-auto">
                        <Text
                          className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                          size="txtInterSemiBold14Bluegray50001"
                        >
                          08-08-2023
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border-black-900 border-r border-solid flex flex-1 flex-col h-full items-start justify-start px-2 py-3 rounded-bl-md rounded-tl-md w-full">
                      <Button
                        className="cursor-pointer font-semibold min-w-[112px] rounded-md text-center text-sm tracking-[0.08px] uppercase"
                        color="pink_100"
                        size="xs"
                        variant="fill"
                      >
                        off track
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-black-900_33 border-l border-solid border-y flex flex-col h-[47px] md:h-auto items-start justify-start px-2 py-3 w-full">
                    <div className="flex flex-col items-start justify-start pl-2 w-auto">
                      <Text
                        className="capitalize text-blue_gray-500_01 text-sm tracking-[0.08px] w-auto"
                        size="txtInterSemiBold14Bluegray50001"
                      >
                        Add new Task
                      </Text>
                    </div>
                  </div>
                  <Input
                    name="todo_Two"
                    placeholder="In progress"
                    className="capitalize font-semibold md:h-auto p-0 placeholder:text-blue_gray-500_01 sm:h-auto text-left text-sm tracking-[0.08px] w-full"
                    wrapClassName="border-b border-blue_gray-300_01 border-solid flex w-full"
                    prefix={
                      <Img
                        className="h-6 mr-2 my-auto"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    shape="square"
                    color="gray_100"
                    size="lg"
                    variant="fill"
                  ></Input>
                  <Input
                    name="todo_Three"
                    placeholder="Done"
                    className="capitalize font-semibold md:h-auto p-0 placeholder:text-blue_gray-500_01 sm:h-auto text-left text-sm tracking-[0.08px] w-full"
                    wrapClassName="border-b border-blue_gray-300_01 border-solid flex rounded-tl-md rounded-tr-md w-full"
                    prefix={
                      <Img
                        className="h-6 mr-2 my-auto"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    color="gray_100"
                    size="lg"
                    variant="fill"
                  ></Input>
                  <Input
                    name="todo_Four"
                    placeholder="Add section"
                    className="capitalize font-semibold md:h-auto p-0 placeholder:text-blue_gray-500_01 sm:h-auto text-left text-sm tracking-[0.08px] w-full"
                    wrapClassName="border-b border-blue_gray-300_01 border-solid flex rounded-tl-md rounded-tr-md w-full"
                    prefix={
                      <Img
                        className="h-4 mr-2 my-px"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    }
                    color="gray_100"
                    size="2xl"
                    variant="fill"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BacklogPage;
