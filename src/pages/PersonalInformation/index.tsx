import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";

const PersonalInformationPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs10 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[822px] bg-pink-300 flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <Text
              className="md:ml-[0] ml-[163px] mr-[525px] mt-[90px] sm:text-[32px] md:text-[38px] text-[42px] text-white-A700"
              size="txtInterBold42"
            >
              Step 4
            </Text>
            <Text
              className="md:ml-[0] ml-[163px] mr-[90px] mt-[21px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtInterRegular24"
            >
              <>
                Enter Your Personal Information To Get Closer To <br />
                Create and collaborate on projects
              </>
            </Text>
            <div className="h-[778px] md:h-[863px] sm:h-[905px] md:ml-[0] ml-[163px] mr-[574px] mt-[127px] relative w-[11%]">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[92px] items-center justify-start w-full">
                  <div className="bg-white-A700 h-[82px] rounded-[42px] w-full"></div>
                  <div className="bg-white-A700 h-[82px] rounded-[42px] w-full"></div>
                  <div className="bg-white-A700 h-[82px] rounded-[42px] w-full"></div>
                  <div className="bg-white-A700 h-[82px] rounded-[42px] w-full"></div>
                  <div className="bg-indigo-900 h-[82px] rounded-[42px] w-full"></div>
                </div>
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[82px] h-max inset-[0] items-start justify-center m-auto w-[3%]">
                <Line className="bg-white-A700 h-[91px] rotate-[-89deg] w-px" />
                <Line className="bg-white-A700 h-[91px] rotate-[-89deg] w-px" />
                <Line className="bg-white-A700 h-[91px] rotate-[-89deg] w-px" />
                <Line className="bg-white-A700 h-[91px] rotate-[-89deg] w-px" />
              </div>
              <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto">
                <Text
                  className="ml-1 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInterBold32"
                >
                  1
                </Text>
                <Text
                  className="ml-1 md:ml-[0] mt-[138px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInterBold32"
                >
                  2
                </Text>
                <Text
                  className="mt-[133px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInterBold32"
                >
                  3
                </Text>
                <Text
                  className="ml-1 md:ml-[0] mt-[140px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtInterBold32"
                >
                  4
                </Text>
                <Text
                  className="ml-1 md:ml-[0] mt-[130px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtInterBold32WhiteA700"
                >
                  5
                </Text>
              </div>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  paddingLeft: "311px",
                  flexDirection: "column",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "32px",
                },
              }}
              className="flex flex-col items-center justify-start mb-[249px] md:pr-10 sm:pr-5 pr-[495px] w-2/5"
            >
              <div className="flex flex-col md:gap-10 gap-[135px] items-center justify-start w-full">
                <MenuItem
                  active={window.location.pathname === "/personalinformation"}
                  href="/personalinformation"
                >
                  <div className="flex items-end justify-start md:pl-10 sm:pl-5">
                    <Text className="md:text-3xl sm:text-[28px]">
                      Personal Information
                    </Text>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="flex items-end justify-start md:pl-10 sm:pl-5">
                    <Text className="md:text-3xl sm:text-[28px]">
                      Education
                    </Text>
                  </div>
                </MenuItem>
              </div>
              <div className="flex flex-col md:gap-10 gap-[135px] items-center justify-start mt-[138px] w-full">
                <MenuItem active={window.location.pathname === "/x"} href="/x">
                  <div className="flex items-end justify-start md:pl-10 sm:pl-5">
                    <Text className="md:text-3xl sm:text-[28px]">
                      Work Experience
                    </Text>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="flex items-end justify-start md:pl-10 sm:pl-5">
                    <Text className="md:text-3xl sm:text-[28px]">
                      Upload Photo
                    </Text>
                  </div>
                </MenuItem>
              </div>
              <div className="flex flex-col items-center justify-start mt-[134px] w-full">
                <MenuItem>
                  <div className="flex items-end justify-start md:pl-10 sm:pl-5">
                    <Text className="md:text-3xl sm:text-[28px]">
                      Create New Project
                    </Text>
                  </div>
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <Img
              className="h-[151px] md:h-auto rounded-[50%] w-[152px]"
              src="images/img_ellipse8.png"
              alt="ellipseEight"
            />
            <Text
              className="mt-[30px] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
              size="txtInterBold42Black900"
            >
              Create Project
            </Text>
            <Text
              className="mt-[22px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterRegular24Black900"
            >
              <>
                Update Project details in order to Get one Step closer in <br />
                order to create and collaborate on a project.
              </>
            </Text>
            <Text
              className="mt-[42px] text-2xl md:text-[22px] text-black-900_a8 sm:text-xl"
              size="txtInterRegular24Black900a8"
            >
              Project Name
            </Text>
            <div className="bg-white-A700 flex flex-col items-start justify-start mt-[29px] outline outline-[2px] outline-indigo-900_e0 p-[31px] sm:px-5 rounded-[22px]">
              <Text
                className="mb-[23px] mt-[5px] text-2xl md:text-[22px] text-black-900_a8 sm:text-xl"
                size="txtInterRegular24Black900a8"
              >
                TeamFolio
              </Text>
            </div>
            <Text
              className="mt-[42px] text-2xl md:text-[22px] text-black-900_a8 sm:text-xl"
              size="txtInterRegular24Black900a8"
            >
              Project Description
            </Text>
            <div className="bg-white-A700 flex flex-col items-center justify-end mt-8 outline outline-[2px] outline-indigo-900_e0 p-[23px] sm:px-5 rounded-[22px]">
              <Text
                className="mt-[17px] text-2xl md:text-[22px] text-black-900_a8 sm:text-xl"
                size="txtInterRegular24Black900a8"
              >
                <>
                  Loremipsumloremipsumloremipsum............
                  <br />
                  ....................................................
                </>
              </Text>
            </div>
            <Text
              className="mt-[29px] text-2xl md:text-[22px] text-black-900_a8 sm:text-xl"
              size="txtInterRegular24Black900a8"
            >
              About Project
            </Text>
            <List
              className="bg-white-A700 flex flex-col gap-[17px] mt-[35px] outline outline-[2px] outline-indigo-900_e0 p-[60px] md:px-10 sm:px-5 rounded-[22px] w-[64%]"
              orientation="vertical"
            >
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterRegular12Black900"
                      >
                        Lorem ipsum dolor sit amet consectetur. Amet mauris
                        quisque viverra etiam ipsum a in auctor et dolor .
                      </Text>
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterRegular12Black900"
                      >
                        Lorem ipsum dolor sit amet consectetur. Amet mauris
                        quisque viverra etiam ipsum a in auctor et dolor .
                      </Text>
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterRegular12Black900"
                      >
                        Lorem ipsum dolor sit amet consectetur. Amet mauris
                        quisque viverra etiam ipsum a in auctor et dolor .
                      </Text>
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterRegular12Black900"
                      >
                        Lorem ipsum dolor sit amet consectetur. Amet mauris
                        quisque viverra etiam ipsum a in auctor et dolor .
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[81%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterRegular12Black900"
                      >
                        Lorem ipsum dolor sit amet consectetur. Amet mauris
                        quisque viverra etiam ipsum a in auctor et dolor .
                      </Text>
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterRegular12Black900"
                      >
                        Lorem ipsum dolor sit amet consectetur. Amet mauris
                        quisque viverra etiam ipsum a in auctor et dolor .
                      </Text>
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterRegular12Black900"
                      >
                        Lorem ipsum dolor sit amet consectetur. Amet mauris
                        quisque viverra etiam ipsum a in auctor et dolor .
                      </Text>
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterRegular12Black900"
                      >
                        Lorem ipsum dolor sit amet consectetur. Amet mauris
                        quisque viverra etiam ipsum a in auctor et dolor .
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[809px] mt-[59px] w-[39%] md:w-full">
              <Text
                className="mt-[27px] text-2xl md:text-[22px] text-black-900_a8 sm:text-xl"
                size="txtInterBold24"
              >
                Back
              </Text>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[263px] rounded-[22px] md:text-2xl sm:text-[22px] text-[26px] text-center"
                color="indigo_900"
                size="2xl"
                variant="fill"
              >
                Create Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInformationPage;
