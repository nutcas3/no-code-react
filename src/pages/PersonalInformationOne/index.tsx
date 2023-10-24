import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const PersonalInformationOnePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs10 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar11 className="!sticky !w-[822px] bg-deep_purple-A200 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col items-start justify-start md:mt-0 mt-[35px] w-full">
            <Img
              className="h-[151px] md:h-auto rounded-[50%] w-[152px]"
              src="images/img_ellipse8.png"
              alt="ellipseEight"
            />
            <Text
              className="mt-[26px] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
              size="txtInterBold42Black900"
            >
              Invite members
            </Text>
            <Text
              className="mt-[26px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterRegular24Black900"
            >
              <>
                Update Project details in order to Get one Step closer in <br />
                order to create and collaborate on a project.
              </>
            </Text>
            <div className="flex flex-row md:gap-10 items-start justify-between max-w-[1153px] mt-[81px] w-full">
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtInterBold20"
              >
                Email
              </Text>
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtInterBold20"
              >
                Role
              </Text>
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtInterBold20"
              >
                Permission
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-10 w-full">
              <Input
                name="frame1000001135"
                placeholder="Enter Email Adress"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="sm:flex-1 sm:mt-0 mt-1 rounded sm:w-full"
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
                wrapClassName="sm:flex-1 sm:mt-0 mt-1 rounded sm:w-full"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
              <Input
                name="frame1000001141"
                placeholder="Can View"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="sm:flex-1 mb-1 rounded sm:w-full"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-9 w-full">
              <Input
                name="frame1000001136"
                placeholder="Enter Email Adress"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="sm:flex-1 sm:mt-0 mt-1 rounded sm:w-full"
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
                wrapClassName="sm:flex-1 sm:mt-0 mt-1 rounded sm:w-full"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
              <Input
                name="frame1000001142"
                placeholder="Can Edit"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="sm:flex-1 mb-1 rounded sm:w-full"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[43px] w-full">
              <Input
                name="frame1000001137"
                placeholder="Enter Email Adress"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="sm:flex-1 sm:mt-0 mt-1 rounded sm:w-full"
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
                wrapClassName="sm:flex-1 sm:mt-0 mt-1 rounded sm:w-full"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
              <Input
                name="frame1000001143"
                placeholder="Can View"
                className="leading-[normal] p-0 placeholder:text-black-900_a8 text-base text-left w-full"
                wrapClassName="sm:flex-1 mb-1 rounded sm:w-full"
                shape="round"
                color="deep_purple_200"
                size="md"
                variant="outline"
              ></Input>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[376px] sm:min-w-full mt-[83px] rounded-[12px]"
              leftIcon={
                <Img
                  className="h-9 mr-2.5"
                  src="images/img_plus_deep_purple_200.svg"
                  alt="plus"
                />
              }
              color="indigo_900"
              size="xl"
              variant="fill"
            >
              <div className="font-bold leading-[normal] md:text-2xl sm:text-[22px] text-[26px] text-left">
                Add more members
              </div>
            </Button>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-24 items-center justify-start md:ml-[0] ml-[792px] mt-[214px] w-auto sm:w-full">
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[63px] rounded-[15px] md:text-2xl sm:text-[22px] text-[26px] text-center text-indigo-900"
                onClick={() => navigate("/personalinformationtwo")}
                shape="round"
              >
                Back
              </Button>
              <div className="flex flex-col items-center justify-start w-[70%] sm:w-full">
                <Button
                  className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[369px] rounded-[22px] md:text-2xl sm:text-[22px] text-[26px] text-center"
                  onClick={() => navigate("/backlog")}
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
      </div>
    </>
  );
};

export default PersonalInformationOnePage;
