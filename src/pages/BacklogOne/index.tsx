import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Radio, SelectBox, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BacklogOnePage: React.FC = () => {
  const navigate = useNavigate();

  const [textinputvalue, setTextinputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto sm:pr-5 pr-[30px] w-full">
        <div className="flex flex-col items-end justify-end mx-auto md:px-5 w-full">
          <header className="bg-white-A700 flex items-center justify-center sm:px-5 px-[30px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="header-row ">
                <div className="flex flex-row font-plusjakartasans items-center justify-start">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <div className="flex flex-row gap-5 items-center justify-start w-auto">
                      <div className="h-[66px] w-[79%]"></div>
                      <div className="flex flex-col items-start justify-start px-3 py-6 w-auto">
                        <Text
                          className="text-[15px] text-black-900 w-auto"
                          size="txtPlusJakartaSansRegular15"
                        >
                          About
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <Text
                className="border border-black-900_a3 border-solid sm:hidden pl-3 sm:pr-5 pr-[35px] py-[11px] rounded-[20px] text-black-900_4c text-sm w-[460px]"
                size="txtInterRegular14Black9004c"
              >
                Search
              </Text>
              <div className="flex flex-row gap-[5px] sm:hidden items-start justify-start w-auto">
                <Img
                  className="h-8 rounded-md w-8"
                  src="images/img_iconbutton.svg"
                  alt="iconbutton"
                />
                <Img
                  className="h-8 rounded-md w-8"
                  src="images/img_iconbutton_blue_gray_600.svg"
                  alt="iconbutton_One"
                />
                <Img
                  className="h-8 rounded-md w-8"
                  src="images/img_iconbutton_blue_gray_600_32x32.svg"
                  alt="iconbutton_Two"
                />
                <Img
                  className="common-pointer h-8 md:h-auto rounded-[50%] w-8"
                  src="images/img_ellipse17.png"
                  alt="ellipseSeventeen"
                  onClick={() => navigate("/userprofileprojects")}
                />
              </div>
            </div>
          </header>
          <div className="flex md:flex-col flex-row gap-[39px] items-start justify-between mr-0.5 w-full">
            <Sidebar1 className="!sticky !w-[280px] bg-gray-50 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col items-start justify-start md:mt-0 mt-[15px] w-full">
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
                <div className="flex flex-row items-center justify-start w-auto">
                  <div className="flex flex-col items-center justify-start px-1 rounded w-auto">
                    <Text
                      className="text-blue_gray-500_01 text-xs w-auto"
                      size="txtInterRegular12Bluegray50001"
                    >
                      International
                    </Text>
                  </div>
                  <Img
                    className="h-4 w-3"
                    src="images/img_arrowright_blue_gray_200.svg"
                    alt="arrowright_One"
                  />
                </div>
                <div className="flex flex-col items-center justify-start px-1 rounded w-auto">
                  <Text
                    className="text-blue_gray-900_03 text-xs w-auto"
                    size="txtInterRegular12Bluegray90003"
                  >
                    Product Web
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[3px] mt-[15px] w-full">
                <Text
                  className="md:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.46px]"
                  size="txtInterSemiBold24Black900"
                >
                  All sprints
                </Text>
                <Img
                  className="h-8 md:ml-[0] ml-[734px] rounded-md w-8"
                  src="images/img_iconbutton_32x32.svg"
                  alt="iconbutton_Three"
                />
                <Button
                  className="cursor-pointer font-semibold min-w-[132px] ml-1 md:ml-[0] rounded-md text-center text-sm tracking-[-0.08px]"
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
                <Button
                  className="border border-gray-300 border-solid flex h-8 items-center justify-center ml-1 md:ml-[0] rounded-md w-8"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    src="images/img_iconbutton_1.svg"
                    alt="iconbutton_Four"
                  />
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-[11px] items-start justify-start md:ml-[0] ml-[7px] mt-3.5 w-auto md:w-full">
                <Input
                  name="textinput"
                  placeholder="Search"
                  value={textinputvalue}
                  onChange={(e) => setTextinputvalue(e)}
                  className="!placeholder:text-blue_gray-300 !text-blue_gray-300 p-0 text-left text-sm tracking-[-0.08px] w-full"
                  wrapClassName="border border-gray-300 border-solid flex w-[27%] md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-6 my-auto"
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
                <div className="h-8 relative w-[19%] md:w-full">
                  <div className="absolute h-8 inset-y-[0] my-auto right-[0] w-[81%]">
                    <div className="absolute h-8 inset-y-[0] my-auto right-[0] w-[77%]">
                      <div className="absolute h-8 inset-y-[0] my-auto right-[0] w-[70%]">
                        <div className="absolute border border-blue_gray-100_02 border-solid flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-2 right-[0] rounded-[50%] w-8">
                          <Text
                            className="text-center text-gray-900_02 text-xs"
                            size="txtInterRegular12"
                          >
                            9
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
                <div className="flex flex-col items-center justify-start px-3 py-1 rounded-md w-auto">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-blue_gray-900_03 text-center text-sm tracking-[-0.08px] w-auto"
                      size="txtInterRegular14Bluegray90003"
                    >
                      Only My Issues
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start px-3 py-1 rounded-md w-auto">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-blue_gray-900_03 text-center text-sm tracking-[-0.08px] w-auto"
                      size="txtInterRegular14Bluegray90003"
                    >
                      Recently Updated
                    </Text>
                  </div>
                </div>
                <SelectBox
                  className="!text-blue_gray-900_03 text-left text-sm tracking-[-0.08px] w-[14%] md:w-full"
                  placeholderClassName="!text-blue_gray-900_03"
                  isSearchable={false}
                  placeholder="All sprints"
                  isMulti={false}
                  options={dropdownOptionsList}
                  name="dropdown"
                  shape="round"
                  size="xs"
                />
              </div>
              <div className="gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[687px] md:h-auto items-start justify-start max-w-[1074px] md:ml-[0] ml-[7px] mt-[30px] w-full">
                <div className="bg-gray-100 flex flex-1 flex-col gap-2 h-full items-start justify-start px-2 py-3 rounded-tl-md rounded-tr-md w-full">
                  <div className="flex flex-col items-start justify-start pl-2 w-auto">
                    <Text
                      className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                      size="txtInterSemiBold14Bluegray50001"
                    >
                      To do
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-4 rounded-md shadow-bs8 w-full">
                    <Text
                      className="leading-[20.00px] max-w-[303px] md:max-w-full text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Bluegray90003"
                    >
                      As a translator, I want integrate Crowdin webhook to
                      notify translators about changed strings
                    </Text>
                    <Input
                      name="badge"
                      placeholder="Refactoring"
                      className="font-semibold p-0 placeholder:text-lime-900 text-left text-xs w-full"
                      wrapClassName="px-1 rounded w-[26%]"
                      shape="round"
                      color="amber_300"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          className="h-6 w-6"
                          src="images/img_bookmarkalt.svg"
                          alt="bookmarkalt"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowup.svg"
                          alt="arrowup"
                        />
                        <Button
                          className="cursor-pointer font-semibold h-6 rounded-[12px] text-center text-sm tracking-[-0.08px] w-[25px]"
                          color="gray_200_02"
                          size="xs"
                          variant="fill"
                        >
                          2
                        </Button>
                      </div>
                      <Radio
                        value="info"
                        className=""
                        inputClassName="bg-green-400 h-1.5 mr-[5px] outline outline-[2px] outline-white-A700 rounded-[3px] w-1.5"
                        checked={false}
                        name="info"
                        label="info"
                        id="info"
                      ></Radio>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-4 rounded-md shadow-bs8 w-full">
                    <Text
                      className="leading-[20.00px] max-w-[303px] md:max-w-full text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Bluegray90003"
                    >
                      As a user, I want to see actual overusage price for next
                      download
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-row items-center justify-evenly w-1/4">
                        <Img
                          className="h-6 w-6"
                          src="images/img_bookmarkalt.svg"
                          alt="bookmarkalt_One"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_questionmarkcircle.svg"
                          alt="questionmarkcir"
                        />
                        <Button
                          className="cursor-pointer font-semibold h-6 rounded-[11px] text-center text-sm tracking-[-0.08px] w-[23px]"
                          color="gray_200_02"
                          size="xs"
                          variant="fill"
                        >
                          1
                        </Button>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-between w-[26%]">
                        <Text
                          className="text-blue_gray-500_01 text-right text-sm tracking-[-0.08px]"
                          size="txtInterRegular14Bluegray50001"
                        >
                          BC – 14
                        </Text>
                        <Img
                          className="h-6 md:h-auto rounded-[50%] w-6"
                          src="images/img_avatarwphoto.png"
                          alt="avatarwphoto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-4 rounded-md shadow-bs8 w-full">
                    <Text
                      className="leading-[20.00px] max-w-[303px] md:max-w-full text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Bluegray90003"
                    >
                      As a team license owner, I want to use multiplied limits
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-row items-center justify-evenly w-[26%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_flag.svg"
                          alt="flag"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_questionmarkcircle.svg"
                          alt="questionmarkcir_One"
                        />
                        <Button
                          className="cursor-pointer font-semibold h-6 rounded-[12px] text-center text-sm tracking-[-0.08px] w-[25px]"
                          color="gray_200_02"
                          size="xs"
                          variant="fill"
                        >
                          2
                        </Button>
                      </div>
                      <div className="flex flex-row gap-[9px] items-center justify-between w-1/4">
                        <Text
                          className="text-blue_gray-500_01 text-right text-sm tracking-[-0.08px]"
                          size="txtInterRegular14Bluegray50001"
                        >
                          BC – 11
                        </Text>
                        <Img
                          className="h-6 md:h-auto rounded-[50%] w-6"
                          src="images/img_avatarwphoto.png"
                          alt="avatarwphoto_One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-4 rounded-md shadow-bs8 w-full">
                    <Text
                      className="leading-[20.00px] max-w-[303px] md:max-w-full text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Bluegray90003"
                    >
                      Font SCSS mixin does not recognise fallback for
                      font-family
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          className="h-6 w-6"
                          src="images/img_flag.svg"
                          alt="flag_One"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowup.svg"
                          alt="arrowup_One"
                        />
                        <Button
                          className="cursor-pointer font-semibold min-w-[26px] rounded-[12px] text-center text-sm tracking-[-0.08px]"
                          color="gray_200_02"
                          size="xs"
                          variant="fill"
                        >
                          3
                        </Button>
                      </div>
                      <Radio
                        value="infoOne"
                        className=""
                        inputClassName="bg-green-400 h-1.5 mr-[5px] outline outline-[2px] outline-white-A700 rounded-[3px] w-1.5"
                        checked={false}
                        name="infoOne"
                        label="infoOne"
                        id="infoOne"
                      ></Radio>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-4 rounded-md shadow-bs8 w-full">
                    <Text
                      className="leading-[20.00px] max-w-[303px] md:max-w-full text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Bluegray90003"
                    >
                      Interate nuxt-18n in product-developers project
                    </Text>
                    <Input
                      name="badge_One"
                      placeholder="Refactoring"
                      className="font-semibold p-0 placeholder:text-lime-900 text-left text-xs w-full"
                      wrapClassName="px-1 rounded w-[26%]"
                      shape="round"
                      color="amber_300"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          className="h-6 w-6"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowup.svg"
                          alt="arrowup_Two"
                        />
                        <Button
                          className="cursor-pointer font-semibold h-6 rounded-[12px] text-center text-sm tracking-[-0.08px] w-[25px]"
                          color="gray_200_02"
                          size="xs"
                          variant="fill"
                        >
                          5
                        </Button>
                      </div>
                      <Radio
                        value="infoTwo"
                        className=""
                        inputClassName="bg-green-400 h-1.5 mr-[5px] outline outline-[2px] outline-white-A700 rounded-[3px] w-1.5"
                        checked={false}
                        name="infoTwo"
                        label="infoTwo"
                        id="infoTwo"
                      ></Radio>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col gap-2 h-full items-start justify-start px-2 py-3 rounded-tl-md rounded-tr-md w-full">
                  <div className="flex flex-col items-start justify-start pl-2 w-auto">
                    <Text
                      className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                      size="txtInterSemiBold14Bluegray50001"
                    >
                      In progress
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-4 rounded-md shadow-bs8 w-full">
                    <Text
                      className="leading-[20.00px] max-w-[303px] md:max-w-full text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Bluegray90003"
                    >
                      As an external contributor, I want to be able to see
                      status of uploaded materials
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-row items-center justify-evenly w-[26%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_bookmarkalt.svg"
                          alt="bookmarkalt_Two"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_airplane.svg"
                          alt="airplane"
                        />
                        <Button
                          className="cursor-pointer font-semibold min-w-[26px] rounded-[12px] text-center text-sm tracking-[-0.08px]"
                          color="gray_200_02"
                          size="xs"
                          variant="fill"
                        >
                          3
                        </Button>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-between w-[29%]">
                        <Text
                          className="text-blue_gray-500_01 text-right text-sm tracking-[-0.08px]"
                          size="txtInterRegular14Bluegray50001"
                        >
                          MAR – 14
                        </Text>
                        <Img
                          className="h-6 md:h-auto rounded-[50%] w-6"
                          src="images/img_avatarwphoto_24x24.png"
                          alt="avatarwphoto_Two"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-4 rounded-md shadow-bs8 w-full">
                    <Text
                      className="text-blue_gray-900_03 text-sm tracking-[-0.08px] w-full"
                      size="txtInterRegular14Bluegray90003"
                    >
                      Replace JustComments with something
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          className="h-6 w-6"
                          src="images/img_checkmark.svg"
                          alt="checkmark_One"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrownarrowup.svg"
                          alt="arrownarrowup"
                        />
                        <Button
                          className="cursor-pointer font-semibold min-w-[26px] rounded-[12px] text-center text-sm tracking-[-0.08px]"
                          color="gray_200_02"
                          size="xs"
                          variant="fill"
                        >
                          3
                        </Button>
                      </div>
                      <Radio
                        value="infoThree"
                        className=""
                        inputClassName="bg-light_blue-50_01 h-6 mr-[5px] rounded-[12px] w-6"
                        checked={true}
                        name="infoThree"
                        label="infoThree"
                        id="infoThree"
                      ></Radio>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-4 rounded-md shadow-bs8 w-full">
                    <Text
                      className="leading-[20.00px] max-w-[303px] md:max-w-full text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Bluegray90003"
                    >
                      As manual licensed User, I want to see my limits
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-row items-center justify-evenly w-[26%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_bookmarkalt.svg"
                          alt="bookmarkalt_Three"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_questionmarkcircle.svg"
                          alt="questionmarkcir_Two"
                        />
                        <Button
                          className="cursor-pointer font-semibold h-6 rounded-[12px] text-center text-sm tracking-[-0.08px] w-[25px]"
                          color="gray_200_02"
                          size="xs"
                          variant="fill"
                        >
                          2
                        </Button>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-between w-[23%]">
                        <Text
                          className="text-blue_gray-500_01 text-right text-sm tracking-[-0.08px]"
                          size="txtInterRegular14Bluegray50001"
                        >
                          BC – 8
                        </Text>
                        <Img
                          className="h-6 md:h-auto rounded-[50%] w-6"
                          src="images/img_avatarwphoto.png"
                          alt="avatarwphoto_Three"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-4 rounded-md shadow-bs8 w-full">
                    <Text
                      className="leading-[20.00px] max-w-[303px] md:max-w-full text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Bluegray90003"
                    >
                      Create a storage to store common translations
                    </Text>
                    <Input
                      name="badge_Two"
                      placeholder="Refactoring"
                      className="font-semibold p-0 placeholder:text-lime-900 text-left text-xs w-full"
                      wrapClassName="px-1 rounded w-[26%]"
                      shape="round"
                      color="amber_300"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          className="h-6 w-6"
                          src="images/img_checkmark.svg"
                          alt="checkmark_Two"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowup.svg"
                          alt="arrowup_Three"
                        />
                        <Button
                          className="cursor-pointer font-semibold h-6 rounded-[12px] text-center text-sm tracking-[-0.08px] w-[25px]"
                          color="gray_200_02"
                          size="xs"
                          variant="fill"
                        >
                          5
                        </Button>
                      </div>
                      <Radio
                        value="infoFour"
                        className=""
                        inputClassName="bg-light_blue-50_01 h-6 mr-[5px] rounded-[12px] w-6"
                        checked={true}
                        name="infoFour"
                        label="infoFour"
                        id="infoFour"
                      ></Radio>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-4 rounded-md shadow-bs8 w-full">
                    <Text
                      className="leading-[20.00px] max-w-[303px] md:max-w-full text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Bluegray90003"
                    >
                      CLONE – As an external contributor, I want to be able to
                      upload a zip of my original materials
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-row items-center justify-evenly w-[26%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_bookmarkalt.svg"
                          alt="bookmarkalt_Four"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_airplane.svg"
                          alt="airplane_One"
                        />
                        <Button
                          className="cursor-pointer font-semibold h-6 rounded-[12px] text-center text-sm tracking-[-0.08px] w-[25px]"
                          color="gray_200_02"
                          size="xs"
                          variant="fill"
                        >
                          2
                        </Button>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-between w-[29%]">
                        <Text
                          className="text-blue_gray-500_01 text-right text-sm tracking-[-0.08px]"
                          size="txtInterRegular14Bluegray50001"
                        >
                          MAR – 18
                        </Text>
                        <Img
                          className="h-6 md:h-auto rounded-[50%] w-6"
                          src="images/img_avatarwphoto_24x24.png"
                          alt="avatarwphoto_Four"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-4 rounded-md shadow-bs8 w-full">
                    <Text
                      className="text-blue_gray-900_03 text-sm tracking-[-0.08px] w-full"
                      size="txtInterRegular14Bluegray90003"
                    >
                      As a contributor, I want new calculation algorithm for my
                      earnings
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-row items-start justify-evenly w-[26%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_bookmarkalt.svg"
                          alt="bookmarkalt_Five"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowup.svg"
                          alt="arrowup_Four"
                        />
                        <Text
                          className="bg-gray-200_02 justify-center px-2 rounded-[12px] text-blue_gray-900_03 text-sm tracking-[-0.08px] w-auto"
                          size="txtInterSemiBold14Bluegray90003"
                        >
                          3
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-between w-[29%]">
                        <Text
                          className="mt-0.5 text-blue_gray-500_01 text-right text-sm tracking-[-0.08px]"
                          size="txtInterRegular14Bluegray50001"
                        >
                          MAR – 17
                        </Text>
                        <Img
                          className="h-6 md:h-auto rounded-[50%] w-6"
                          src="images/img_avatarwphoto_24x24.png"
                          alt="avatarwphoto_Five"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 flex flex-1 flex-col gap-2 h-full items-start justify-start px-2 py-3 rounded-tl-md rounded-tr-md w-full">
                  <div className="flex flex-col items-start justify-start pl-2 w-auto">
                    <Text
                      className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                      size="txtInterSemiBold14Bluegray50001"
                    >
                      DONE
                    </Text>
                  </div>
                  <List
                    className="flex flex-col gap-2 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start p-4 rounded-md shadow-bs8 w-full">
                      <Text
                        className="leading-[20.00px] max-w-[303px] md:max-w-full text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                        size="txtInterRegular14Bluegray90003"
                      >
                        As a user, I want to access Intercom help center, so
                        that I am not confused by Crisp
                      </Text>
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-row items-center justify-evenly">
                          <Img
                            className="h-6 w-6"
                            src="images/img_bookmarkalt.svg"
                            alt="bookmarkalt"
                          />
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrownarrowdown.svg"
                            alt="arrownarrowdown"
                          />
                          <Button
                            className="cursor-pointer font-semibold h-6 rounded-[11px] text-center text-sm tracking-[-0.08px] w-[23px]"
                            color="gray_200_02"
                            size="xs"
                            variant="fill"
                          >
                            1
                          </Button>
                        </div>
                        <Radio
                          value="info1"
                          className=""
                          inputClassName="bg-light_blue-50_01 h-6 mr-[5px] rounded-[12px] w-6"
                          checked={true}
                          name="info1"
                          label="info1"
                          id="info1"
                        ></Radio>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-start justify-start p-4 rounded-md shadow-bs8 w-full">
                      <Text
                        className="leading-[20.00px] max-w-[303px] md:max-w-full text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                        size="txtInterRegular14Bluegray90003"
                      >
                        Remove requests to ipfy service from frontend
                      </Text>
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-row items-center justify-evenly">
                          <Img
                            className="h-6 w-6"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrownarrowup.svg"
                            alt="arrownarrowup"
                          />
                          <Button
                            className="cursor-pointer font-semibold h-6 rounded-[12px] text-center text-sm tracking-[-0.08px] w-[25px]"
                            color="gray_200_02"
                            size="xs"
                            variant="fill"
                          >
                            2
                          </Button>
                        </div>
                        <Radio
                          value="info2"
                          className=""
                          inputClassName="bg-light_blue-50_01 h-6 mr-[5px] rounded-[12px] w-6"
                          checked={true}
                          name="info2"
                          label="info2"
                          id="info2"
                        ></Radio>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BacklogOnePage;
