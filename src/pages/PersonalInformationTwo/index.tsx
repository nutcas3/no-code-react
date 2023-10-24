import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const PersonalInformationTwoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs10 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mx-auto md:px-5 w-full">
          <Sidebar11 className="!sticky !w-[822px] bg-deep_purple-A200 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-9 items-start justify-start md:ml-[0] ml-[121px] md:mt-0 mt-[35px] w-full">
            <div className="flex flex-col items-start justify-start w-[78%] md:w-full">
              <Img
                className="h-[151px] md:h-auto rounded-[50%] w-[152px]"
                src="images/img_ellipse8.png"
                alt="ellipseEight"
              />
              <Text
                className="mt-[30px] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                size="txtInterBold42Black900"
              >
                Enter project details
              </Text>
              <Text
                className="mt-[22px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterRegular24Black900"
              >
                <>
                  Update Project details in order to Get one Step closer in{" "}
                  <br />
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
            </div>
            <List
              className="bg-white-A700 flex flex-col gap-[17px] items-center outline outline-[2px] outline-indigo-900_e0 p-[60px] md:px-10 sm:px-5 rounded-[22px] w-full"
              orientation="vertical"
            >
              <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
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
              <div className="flex md:flex-1 flex-col items-center justify-start w-[81%] md:w-full">
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
          </div>
          <div className="flex flex-1 flex-col items-center justify-start md:ml-[0] ml-[217px] md:mt-0 mt-[1207px] w-full">
            <Button
              className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[246px] rounded-[22px] md:text-2xl sm:text-[22px] text-[26px] text-center"
              onClick={() => navigate("/personalinformationone")}
              color="indigo_900"
              size="2xl"
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

export default PersonalInformationTwoPage;
