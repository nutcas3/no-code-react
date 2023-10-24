import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import BoardsProfileAScrollableNavbarlogoleft from "components/BoardsProfileAScrollableNavbarlogoleft";
import BoardsProfileAScrollableRowfeed from "components/BoardsProfileAScrollableRowfeed";

const BoardsProfileAScrollablePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[78px] items-center justify-start mx-auto pb-[76px] w-full">
        <div className="h-[1027px] md:h-[1390px] sm:h-[744px] md:px-5 relative w-full">
          <div className="absolute flex flex-col inset-[0] justify-center m-auto w-[83%] md:w-full">
            <Img
              className="h-[319px] mx-auto object-cover w-full"
              src="images/img_rectangle1_319x1184.png"
              alt="rectangleOne"
            />
            <BoardsProfileAScrollableRowfeed className="bg-gray-50 flex md:flex-col flex-row md:gap-5 items-center justify-start ml-auto mr-[43px] mt-[-NaNpx] pt-2.5 px-2.5 w-auto z-[1]" />
            <div className="bg-gray-50 flex flex-col gap-[29px] justify-end mb-auto mt-[-319px] p-2 w-[23%] z-[1]">
              <div className="h-[196px] md:h-[282px] md:ml-[0] ml-[57px] mr-[61px] mt-24 relative w-[53%]">
                <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-[91%]">
                  <Img
                    className="h-[116px] md:h-auto md:ml-[0] ml-[3px] rounded-[50%] w-[116px]"
                    src="images/img_ellipse1_116x116.png"
                    alt="ellipseOne"
                  />
                  <Text
                    className="mt-4 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterSemiBold24Black900_1"
                  >
                    TeamFolio
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[17px] mt-[7px] text-blue_gray-900_04 text-sm tracking-[-0.08px]"
                    size="txtInterRegular14Bluegray90004"
                  >
                    @teamfolio
                  </Text>
                </div>
                <div className="absolute border border-solid deep_orange_300_gray_600_border h-[131px] inset-x-[0] mx-auto rounded-[65px] shadow-bs6 top-[0] w-[131px]"></div>
              </div>
              <div className="flex flex-col gap-[7px] justify-start mx-auto">
                <Text
                  className="md:ml-[0] ml-[75px] text-base text-black-900"
                  size="txtInterMedium16"
                >
                  About
                </Text>
                <Text
                  className="leading-[20.00px] text-blue_gray-900_04 text-sm tracking-[-0.08px] w-full"
                  size="txtInterRegular14Bluegray90004"
                >
                  Lorem ipsum dolor sit amet consectetur. Vitae vivamus enim
                  pellentesque dolor.
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mb-[3px] ml-3 md:ml-[0] w-[96%] md:w-full">
                <div className="flex flex-row gap-[60px] items-start justify-start pt-0.5 w-[79%] md:w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start">
                    <Text
                      className="text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      3050
                    </Text>
                    <Text
                      className="text-black-900 text-sm"
                      size="txtInterRegular14Black900"
                    >
                      Followers
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start">
                    <Text
                      className="text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      184
                    </Text>
                    <Text
                      className="text-black-900 text-sm"
                      size="txtInterRegular14Black900"
                    >
                      Following
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[38px] pb-[5px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="mb-[30px] text-black-900 text-sm"
                        size="txtInterRegular14Black900"
                      >
                        Followed by{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[58%]">
                      <Img
                        className="h-8"
                        src="images/img_avatarstack.svg"
                        alt="avatarstack"
                      />
                      <div className="flex flex-row items-center justify-center w-[58%] md:w-full">
                        <Text
                          className="border border-blue_gray-100_02 border-solid h-8 pr-[5px] py-2 rounded-[50%] text-center text-gray-900_02 text-xs w-8"
                          size="txtInterRegular12"
                        >
                          +119
                        </Text>
                        <div className="flex flex-row items-start justify-end ml-1 pr-0.5 w-[54%]">
                          <a
                            href="javascript:"
                            className="text-[10px] text-blue-A200"
                          >
                            <Text size="txtInterRegular10">See all</Text>
                          </a>
                          <Img
                            className="h-2 ml-0.5 mt-1"
                            src="images/img_arrowdown_blue_a200.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-5 items-center justify-start mt-[37px] w-[91%] md:w-full">
                  <div className="border border-blue-A200_35 border-solid flex flex-row gap-[10.69px] h-8 md:h-auto items-center justify-center px-[12.83px] py-[4.28px] rounded-md w-[97px]">
                    <Img
                      className="h-[13px] w-[13px]"
                      src="images/img_user_gray_500_01.svg"
                      alt="user"
                    />
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-[14.97px] text-center text-gray-500_01 tracking-[-0.09px] w-auto"
                        size="txtInterMedium1497"
                      >
                        Join
                      </Text>
                    </div>
                  </div>
                  <div className="bg-blue-A200 flex flex-row gap-2.5 items-start justify-center px-3 py-1 rounded-md w-[98px]">
                    <Img
                      className="h-4 w-[15px]"
                      src="images/img_carbonuserfollow.svg"
                      alt="carbonuserfollo"
                    />
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-center text-gray-100 text-sm tracking-[-0.08px] w-auto"
                        size="txtInterSemiBold14Gray100"
                      >
                        Follow
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="ml-1.5 md:ml-[0] mt-[220px] text-black-900 text-sm"
                  size="txtInterRegular14Black900"
                >
                  Links
                </Text>
                <div className="flex flex-col gap-3 items-start justify-start ml-1.5 md:ml-[0] mt-2 w-auto">
                  <Text
                    className="text-blue-A200 text-sm tracking-[-0.08px] w-auto"
                    size="txtInterRegular14BlueA200"
                  >
                    @teamfolio
                  </Text>
                  <Text
                    className="text-blue-A200 text-sm tracking-[-0.08px] w-auto"
                    size="txtInterRegular14BlueA200"
                  >
                    @teamfolio
                  </Text>
                  <Text
                    className="text-blue-A200 text-sm tracking-[-0.08px] w-auto"
                    size="txtInterRegular14BlueA200"
                  >
                    @teamfolio
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col gap-2.5 h-[748px] md:h-auto items-center justify-end p-2.5 right-[8%] w-auto">
            <div className="flex flex-col gap-[47px] justify-start w-full">
              <Img
                className="h-7 md:ml-[0] ml-[880px] w-7"
                src="images/img_ictwotonesavealt.svg"
                alt="ictwotonesaveal"
              />
              <div className="md:h-[1284px] sm:h-[638px] h-[653px] relative w-full">
                <div className="absolute bg-gray-300_4c border border-gray-50 border-solid flex md:flex-col flex-row md:gap-5 h-max inset-[0] items-center justify-center m-auto pr-0.5 py-0.5 w-[99%]">
                  <div className="sm:h-[1238px] h-[630px] md:mt-0 mt-1 relative w-[51%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[13px] h-full items-center justify-between m-auto w-full">
                      <div className="md:h-[595px] h-[629px] relative w-[47%] sm:w-full">
                        <Img
                          className="absolute bottom-[0] h-[595px] right-[0]"
                          src="images/img_group8.svg"
                          alt="groupEight"
                        />
                        <div className="absolute bg-blue-100_26 border border-black-900_0c border-solid h-[35px] inset-x-[0] mx-auto top-[0] w-full"></div>
                      </div>
                      <div className="h-[630px] relative w-[52%] sm:w-full">
                        <div className="border border-gray-400_0c border-solid h-[630px] my-auto w-[94%]"></div>
                        <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
                          <div className="bg-blue-100_26 border border-black-900_0c border-solid h-[35px] w-[94%]"></div>
                          <div className="h-[595px] ml-0.5 md:ml-[0] relative w-[99%]">
                            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[1%] w-full">
                              <div className="flex flex-col md:gap-10 gap-[297px] items-center justify-start w-full">
                                <div className="h-[123px] md:pr-10 sm:pr-5 pr-[41px] relative w-[99%]">
                                  <div className="bg-white-A700 h-[123px] my-auto w-[82%]"></div>
                                  <div className="absolute flex flex-col gap-2.5 h-max inset-y-[0] items-start justify-start left-[3%] my-auto w-[77%]">
                                    <div className="flex flex-row gap-[34px] items-start justify-between w-full">
                                      <Text
                                        className="text-[11.31px] text-black-900"
                                        size="txtInterRegular1131"
                                      >
                                        Lorem Ipsum vini vicee
                                      </Text>
                                      <Img
                                        className="h-[15px] w-[15px]"
                                        src="images/img_charmmenukebab.svg"
                                        alt="charmmenukebab"
                                      />
                                    </div>
                                    <Input
                                      name="rectangleTwentyNine"
                                      placeholder=""
                                      className="p-0 w-full"
                                      wrapClassName="flex h-[49px] w-[91%]"
                                      shape="square"
                                      color="gray_50"
                                      variant="fill"
                                    ></Input>
                                    <div className="flex flex-row items-end justify-between md:ml-[0] ml-[3px] w-[96%] md:w-full">
                                      <div className="flex flex-row items-end justify-evenly w-[30%]">
                                        <Img
                                          className="h-4 mt-[7px] w-4"
                                          src="images/img_link.svg"
                                          alt="link"
                                        />
                                        <div className="flex flex-row items-start justify-center mb-0.5 pr-2.5 w-[59%]">
                                          <Img
                                            className="h-3 mt-2 w-3"
                                            src="images/img_user_blue_100.svg"
                                            alt="user_One"
                                          />
                                          <Text
                                            className="mb-[9px] text-[9.42px] text-gray-600_01"
                                            size="txtInterRegular942"
                                          >
                                            2
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="flex flex-row items-start justify-end mt-1.5 px-2.5 w-[45%]">
                                        <div className="h-[17px] relative w-[59%]">
                                          <div className="absolute h-[17px] inset-y-[0] my-auto outline outline-[1px] outline-white-A700 right-[0] rounded-lg w-[17px]"></div>
                                          <div className="absolute h-[17px] inset-y-[0] left-[0] my-auto outline outline-[1px] outline-white-A700 rounded-lg w-[17px]"></div>
                                        </div>
                                        <Text
                                          className="border border-blue_gray-100_02 border-solid flex h-4 items-center justify-center rounded-[50%] text-[8.86px] text-center text-gray-900_02 w-4"
                                          size="txtInterRegular886"
                                        >
                                          2
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[122px] md:pr-10 sm:pr-5 pr-[41px] relative w-[99%]">
                                  <div className="bg-white-A700 h-[122px] my-auto w-[82%]"></div>
                                  <div className="absolute flex flex-col gap-2.5 h-max inset-y-[0] items-start justify-start left-[3%] my-auto w-[78%]">
                                    <div className="flex flex-row gap-[34px] items-start justify-between w-[98%] md:w-full">
                                      <Text
                                        className="text-[11.31px] text-black-900"
                                        size="txtInterRegular1131"
                                      >
                                        Lorem Ipsum vini vicee
                                      </Text>
                                      <Img
                                        className="h-[15px] w-[15px]"
                                        src="images/img_charmmenukebab.svg"
                                        alt="charmmenukebab_One"
                                      />
                                    </div>
                                    <Input
                                      name="rectangleTwentyNine_One"
                                      placeholder=""
                                      className="p-0 w-full"
                                      wrapClassName="flex h-[49px] w-[90%]"
                                      shape="square"
                                      color="gray_50"
                                      variant="fill"
                                    ></Input>
                                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[3px] w-[98%] md:w-full">
                                      <div className="flex flex-row items-end justify-evenly w-[29%]">
                                        <Img
                                          className="h-4 mt-[7px] w-4"
                                          src="images/img_link.svg"
                                          alt="link_One"
                                        />
                                        <div className="flex flex-row items-start justify-center mb-0.5 pr-2.5 w-[59%]">
                                          <Img
                                            className="h-3 mt-2 w-3"
                                            src="images/img_user_blue_100.svg"
                                            alt="user_Two"
                                          />
                                          <Text
                                            className="mb-[9px] text-[9.42px] text-gray-600_01"
                                            size="txtInterRegular942"
                                          >
                                            2
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="flex flex-row items-start justify-end px-2.5 w-[43%]">
                                        <div className="h-[17px] relative w-[59%]">
                                          <div className="absolute h-[17px] inset-y-[0] my-auto outline outline-[1px] outline-white-A700 right-[0] rounded-lg w-[17px]"></div>
                                          <div className="absolute h-[17px] inset-y-[0] left-[0] my-auto outline outline-[1px] outline-white-A700 rounded-lg w-[17px]"></div>
                                        </div>
                                        <Text
                                          className="border border-blue_gray-100_02 border-solid flex h-4 items-center justify-center rounded-[50%] text-[8.86px] text-center text-gray-900_02 w-4"
                                          size="txtInterRegular886"
                                        >
                                          2
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bg-white-A700 flex flex-col items-center justify-start left-[0] p-1 top-1/4 w-[81%]">
                              <div className="flex flex-col items-start justify-start my-[3px] w-[99%] md:w-full">
                                <div className="flex flex-row gap-[34px] items-start justify-between w-[99%] md:w-full">
                                  <Text
                                    className="text-[11.31px] text-black-900"
                                    size="txtInterRegular1131"
                                  >
                                    Lorem Ipsum vini vicee
                                  </Text>
                                  <Img
                                    className="h-[15px] w-[15px]"
                                    src="images/img_charmmenukebab.svg"
                                    alt="charmmenukebab_Two"
                                  />
                                </div>
                                <Input
                                  name="rectangleTwentyNine_Two"
                                  placeholder=""
                                  className="p-0 w-full"
                                  wrapClassName="flex h-[27px] md:ml-[0] ml-[3px] mt-1 w-[91%]"
                                  shape="square"
                                  color="gray_50"
                                  variant="fill"
                                ></Input>
                                <Img
                                  className="h-[159px] md:h-auto mt-[5px] object-cover w-[159px]"
                                  src="images/img_frame1000001036.png"
                                  alt="frame1000001036"
                                />
                                <div className="flex flex-row items-end justify-between mt-1 w-full">
                                  <div className="flex flex-row items-end justify-evenly w-[28%]">
                                    <Img
                                      className="h-4 mt-[7px] w-4"
                                      src="images/img_link.svg"
                                      alt="link_Two"
                                    />
                                    <div className="flex flex-row items-start justify-center mb-0.5 pr-2.5 w-[59%]">
                                      <Img
                                        className="h-3 mt-2 w-3"
                                        src="images/img_user_blue_100.svg"
                                        alt="user_Three"
                                      />
                                      <Text
                                        className="mb-[9px] text-[9.42px] text-gray-600_01"
                                        size="txtInterRegular942"
                                      >
                                        2
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start mt-1.5 w-[43%]">
                                    <div className="flex flex-row items-start justify-start pr-2.5 w-full">
                                      <div className="h-[17px] relative w-[72%]">
                                        <div className="absolute h-[17px] inset-y-[0] my-auto right-[0] w-[69%]">
                                          <div className="absolute h-[17px] inset-y-[0] my-auto outline outline-[1px] outline-white-A700 right-[0] rounded-lg w-[17px]"></div>
                                          <div className="absolute h-[17px] inset-y-[0] left-[0] my-auto outline outline-[1px] outline-white-A700 rounded-lg w-[17px]"></div>
                                        </div>
                                        <div className="absolute h-[17px] inset-y-[0] left-[0] my-auto outline outline-[1px] outline-white-A700 rounded-lg w-[17px]"></div>
                                      </div>
                                      <Text
                                        className="border border-blue_gray-100_02 border-solid flex h-4 items-center justify-center rounded-[50%] text-[8.86px] text-center text-gray-900_02 w-4"
                                        size="txtInterRegular886"
                                      >
                                        3
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[595px] inset-y-[0] my-auto right-[7%]"
                              src="images/img_group8.svg"
                              alt="groupThirteen"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-start justify-start left-[1%] my-auto w-1/2">
                      <div className="h-[123px] md:pr-10 sm:pr-5 pr-[41px] relative w-full">
                        <div className="bg-white-A700 h-[123px] my-auto w-[82%]"></div>
                        <div className="absolute flex flex-col gap-2.5 h-max inset-y-[0] items-center justify-start left-[3%] my-auto w-[76%]">
                          <div className="flex flex-row gap-[34px] items-start justify-between w-full">
                            <Text
                              className="text-[11.31px] text-black-900"
                              size="txtInterRegular1131"
                            >
                              Lorem Ipsum vini vicee
                            </Text>
                            <Img
                              className="h-[15px] w-[15px]"
                              src="images/img_charmmenukebab.svg"
                              alt="charmmenukebab_Three"
                            />
                          </div>
                          <Input
                            name="rectangleTwentyNine_Three"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="flex h-[49px] rounded-[5px] w-[95%]"
                            shape="round"
                            color="blue_gray_100_33"
                            variant="fill"
                          ></Input>
                          <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                            <Img
                              className="h-4 mt-[7px] w-4"
                              src="images/img_link_gray_700.svg"
                              alt="link_Three"
                            />
                            <div className="flex flex-row items-start justify-center mb-0.5 ml-0.5 pr-2.5 w-[17%]">
                              <Img
                                className="h-3 mt-2 w-3"
                                src="images/img_user_blue_100.svg"
                                alt="user_Four"
                              />
                              <Text
                                className="mb-[9px] text-[9.42px] text-blue_gray-900_04"
                                size="txtInterRegular942Bluegray90004"
                              >
                                2
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start ml-[47px] mt-1 w-[44%]">
                              <div className="flex flex-row items-start justify-start pr-2.5 w-full">
                                <div className="h-[17px] relative w-[72%]">
                                  <div className="absolute h-[17px] inset-y-[0] my-auto right-[0] w-[69%]">
                                    <div className="absolute h-[17px] inset-y-[0] my-auto outline outline-[1px] outline-white-A700 right-[0] rounded-lg w-[17px]"></div>
                                    <div className="absolute h-[17px] inset-y-[0] left-[0] my-auto outline outline-[1px] outline-white-A700 rounded-lg w-[17px]"></div>
                                  </div>
                                  <div className="absolute h-[17px] inset-y-[0] left-[0] my-auto outline outline-[1px] outline-white-A700 rounded-lg w-[17px]"></div>
                                </div>
                                <Text
                                  className="border border-blue_gray-100_02 border-solid flex h-4 items-center justify-center rounded-[50%] text-[8.86px] text-blue_gray-900_04 text-center w-4"
                                  size="txtInterRegular886Bluegray90004"
                                >
                                  3
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[122px] md:pr-10 sm:pr-5 pr-[41px] relative w-full">
                        <div className="bg-white-A700 h-[122px] my-auto w-[82%]"></div>
                        <div className="absolute flex flex-col gap-2.5 h-max inset-y-[0] items-start justify-start left-[3%] my-auto w-[76%]">
                          <div className="flex flex-row gap-[34px] items-start justify-between w-full">
                            <Text
                              className="text-[11.31px] text-black-900"
                              size="txtInterRegular1131"
                            >
                              Lorem Ipsum vini vicee
                            </Text>
                            <Img
                              className="h-[15px] w-[15px]"
                              src="images/img_charmmenukebab.svg"
                              alt="charmmenukebab_Four"
                            />
                          </div>
                          <Input
                            name="rectangleTwentyNine_Four"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="flex h-[49px] ml-0.5 md:ml-[0] w-[95%]"
                            shape="square"
                            color="gray_50"
                            variant="fill"
                          ></Input>
                          <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-[86%] md:w-full">
                            <Img
                              className="h-4 mt-[7px] w-4"
                              src="images/img_link.svg"
                              alt="link_Four"
                            />
                            <div className="flex flex-row items-start justify-center mb-0.5 ml-0.5 pr-2.5 w-1/5">
                              <Img
                                className="h-3 mt-2 w-3"
                                src="images/img_user_blue_100.svg"
                                alt="user_Five"
                              />
                              <Text
                                className="mb-[9px] text-[9.42px] text-blue_gray-900_04"
                                size="txtInterRegular942Bluegray90004"
                              >
                                2
                              </Text>
                            </div>
                            <div className="flex flex-col items-end justify-start ml-[26px] mt-[5px] sm:pl-5 pl-[26px] w-1/2">
                              <div className="flex flex-row items-start justify-end pl-[13px] w-full">
                                <div className="h-[17px] relative w-[92%]">
                                  <div className="absolute h-[17px] inset-y-[0] my-auto outline outline-[1px] outline-white-A700 right-[0] rounded-lg w-[17px]"></div>
                                  <div className="absolute h-[17px] inset-y-[0] left-[0] my-auto outline outline-[1px] outline-white-A700 rounded-lg w-[17px]"></div>
                                </div>
                                <Text
                                  className="border border-blue_gray-100_02 border-solid h-4 pl-[5px] py-0.5 rounded-[1px] text-[8.86px] text-center text-gray-900_02 w-px"
                                  size="txtInterRegular886"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-1 w-[82%] md:w-full">
                        <div className="flex flex-col items-start justify-start my-0.5 w-[98%] md:w-full">
                          <div className="flex flex-row gap-[34px] items-start justify-between w-full">
                            <Text
                              className="text-[11.31px] text-black-900"
                              size="txtInterRegular1131"
                            >
                              Lorem Ipsum vini vicee
                            </Text>
                            <Img
                              className="h-[15px] w-[15px]"
                              src="images/img_charmmenukebab.svg"
                              alt="charmmenukebab_Five"
                            />
                          </div>
                          <Input
                            name="rectangleTwentyNine_Five"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="flex h-[27px] md:ml-[0] ml-[3px] mt-1 w-[91%]"
                            shape="square"
                            color="blue_gray_100_33"
                            variant="fill"
                          ></Input>
                          <Img
                            className="h-[159px] md:h-auto mt-[5px] object-cover w-[159px]"
                            src="images/img_frame1000001036_159x159.png"
                            alt="frame1000001036_One"
                          />
                          <div className="flex flex-row items-start justify-between mt-1 w-[98%] md:w-full">
                            <div className="flex flex-row items-end justify-evenly w-[29%]">
                              <Img
                                className="h-4 mt-[7px] w-4"
                                src="images/img_link.svg"
                                alt="link_Five"
                              />
                              <div className="flex flex-row items-start justify-center mb-0.5 pr-2.5 w-[59%]">
                                <Img
                                  className="h-3 mt-2 w-3"
                                  src="images/img_user_blue_100.svg"
                                  alt="user_Six"
                                />
                                <Text
                                  className="mb-[9px] text-[9.42px] text-blue_gray-900_04"
                                  size="txtInterRegular942Bluegray90004"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-center mt-1 pr-[9px] w-[28%]">
                              <Img
                                className="h-[18px]"
                                src="images/img_volume.svg"
                                alt="volume"
                              />
                              <Text
                                className="ml-0.5 text-[11.31px] text-black-900"
                                size="txtInterRegular1131"
                              >
                                2
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[3px] md:mt-0 mt-1 w-[26%] md:w-full">
                    <div className="flex flex-col justify-start w-full">
                      <div className="bg-blue-100_26 border border-black-900_0c border-solid h-[35px] mr-4 w-[93%]"></div>
                      <div className="h-[595px] ml-1.5 md:ml-[0] relative w-[97%]">
                        <div className="absolute flex flex-col gap-[25px] inset-x-[0] items-start justify-start mx-auto top-[1%] w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-6 items-center justify-start w-full">
                              <div className="h-[123px] md:pr-10 sm:pr-5 pr-[41px] relative w-full">
                                <div className="bg-white-A700 h-[123px] my-auto w-[82%]"></div>
                                <div className="absolute flex flex-col gap-2.5 h-max inset-y-[0] items-start justify-start left-[3%] my-auto w-[77%]">
                                  <div className="flex flex-row gap-[34px] items-start justify-between w-full">
                                    <Text
                                      className="text-[11.31px] text-black-900"
                                      size="txtInterRegular1131"
                                    >
                                      Lorem Ipsum vini vicee
                                    </Text>
                                    <Img
                                      className="h-[15px] w-[15px]"
                                      src="images/img_charmmenukebab.svg"
                                      alt="charmmenukebab_Six"
                                    />
                                  </div>
                                  <Input
                                    name="rectangleTwentyNine_Six"
                                    placeholder=""
                                    className="p-0 w-full"
                                    wrapClassName="flex h-[49px] w-[91%]"
                                    shape="square"
                                    color="gray_50"
                                    variant="fill"
                                  ></Input>
                                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[3px] w-[98%] md:w-full">
                                    <Img
                                      className="h-4 mt-[7px] w-4"
                                      src="images/img_link.svg"
                                      alt="link_Six"
                                    />
                                    <div className="flex flex-row items-start justify-center mb-0.5 ml-0.5 pr-2.5 w-[17%]">
                                      <Img
                                        className="h-3 mt-2 w-3"
                                        src="images/img_user_blue_100.svg"
                                        alt="user_Seven"
                                      />
                                      <Text
                                        className="mb-[9px] text-[9.42px] text-gray-600_01"
                                        size="txtInterRegular942"
                                      >
                                        2
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-center justify-start ml-[47px] mt-1.5 w-[44%]">
                                      <div className="flex flex-row items-start justify-start pr-2.5 w-full">
                                        <div className="h-[17px] relative w-[72%]">
                                          <div className="absolute h-[17px] inset-y-[0] my-auto right-[0] w-[69%]">
                                            <div className="absolute h-[17px] inset-y-[0] my-auto outline outline-[1px] outline-white-A700 right-[0] rounded-lg w-[17px]"></div>
                                            <div className="absolute h-[17px] inset-y-[0] left-[0] my-auto outline outline-[1px] outline-white-A700 rounded-lg w-[17px]"></div>
                                          </div>
                                          <div className="absolute h-[17px] inset-y-[0] left-[0] my-auto outline outline-[1px] outline-white-A700 rounded-lg w-[17px]"></div>
                                        </div>
                                        <Text
                                          className="border border-blue_gray-100_02 border-solid flex h-4 items-center justify-center rounded-[50%] text-[8.86px] text-center text-gray-900_02 w-4"
                                          size="txtInterRegular886"
                                        >
                                          3
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[122px] md:pr-10 sm:pr-5 pr-[41px] relative w-full">
                                <div className="bg-white-A700 h-[122px] my-auto w-[82%]"></div>
                                <div className="absolute flex flex-col gap-2.5 h-max inset-y-[0] items-start justify-start left-[3%] my-auto w-[77%]">
                                  <div className="flex flex-row gap-[34px] items-start justify-between w-full">
                                    <Text
                                      className="text-[11.31px] text-black-900"
                                      size="txtInterRegular1131"
                                    >
                                      Lorem Ipsum vini vicee
                                    </Text>
                                    <Img
                                      className="h-[15px] w-[15px]"
                                      src="images/img_charmmenukebab.svg"
                                      alt="charmmenukebab_Seven"
                                    />
                                  </div>
                                  <Input
                                    name="rectangleTwentyNine_Seven"
                                    placeholder=""
                                    className="p-0 w-full"
                                    wrapClassName="flex h-[49px] w-[91%]"
                                    shape="square"
                                    color="gray_50"
                                    variant="fill"
                                  ></Input>
                                  <div className="flex flex-row items-end justify-between md:ml-[0] ml-[3px] w-[98%] md:w-full">
                                    <div className="flex flex-row items-end justify-evenly w-[29%]">
                                      <Img
                                        className="h-4 mt-[7px] w-4"
                                        src="images/img_link.svg"
                                        alt="link_Seven"
                                      />
                                      <div className="flex flex-row items-start justify-center mb-0.5 pr-2.5 w-[59%]">
                                        <Img
                                          className="h-3 mt-2 w-3"
                                          src="images/img_user_blue_100.svg"
                                          alt="user_Eight"
                                        />
                                        <Text
                                          className="mb-[9px] text-[9.42px] text-gray-600_01"
                                          size="txtInterRegular942"
                                        >
                                          2
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-end mt-[5px] px-2.5 w-[44%]">
                                      <div className="h-[17px] relative w-[59%]">
                                        <div className="absolute h-[17px] inset-y-[0] my-auto outline outline-[1px] outline-white-A700 right-[0] rounded-lg w-[17px]"></div>
                                        <div className="absolute h-[17px] inset-y-[0] left-[0] my-auto outline outline-[1px] outline-white-A700 rounded-lg w-[17px]"></div>
                                      </div>
                                      <Text
                                        className="border border-blue_gray-100_02 border-solid flex h-4 items-center justify-center rounded-[50%] text-[8.86px] text-center text-gray-900_02 w-4"
                                        size="txtInterRegular886"
                                      >
                                        2
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-col items-center justify-start p-1 w-[82%] md:w-full">
                            <div className="flex flex-col items-start justify-start my-0.5 w-[98%] md:w-full">
                              <div className="flex flex-row gap-[34px] items-start justify-between w-full">
                                <Text
                                  className="text-[11.31px] text-black-900"
                                  size="txtInterRegular1131"
                                >
                                  Lorem Ipsum vini vicee
                                </Text>
                                <Img
                                  className="h-[15px] w-[15px]"
                                  src="images/img_charmmenukebab.svg"
                                  alt="charmmenukebab_Eight"
                                />
                              </div>
                              <Input
                                name="rectangleTwentyNine_Eight"
                                placeholder=""
                                className="p-0 w-full"
                                wrapClassName="flex h-[27px] md:ml-[0] ml-[3px] mt-1 w-[91%]"
                                shape="square"
                                color="gray_50"
                                variant="fill"
                              ></Input>
                              <Img
                                className="h-[159px] md:h-auto mt-[5px] object-cover w-[159px]"
                                src="images/img_frame1000001036_1.png"
                                alt="frame1000001036_Two"
                              />
                              <div className="flex flex-row items-center justify-between mt-1 w-full">
                                <div className="flex flex-row items-end justify-evenly w-[28%]">
                                  <Img
                                    className="h-4 mt-[7px] w-4"
                                    src="images/img_link.svg"
                                    alt="link_Eight"
                                  />
                                  <div className="flex flex-row items-start justify-center mb-0.5 pr-2.5 w-[59%]">
                                    <Img
                                      className="h-3 mt-2 w-3"
                                      src="images/img_user_blue_100.svg"
                                      alt="user_Nine"
                                    />
                                    <Text
                                      className="mb-[9px] text-[9.42px] text-gray-600_01"
                                      size="txtInterRegular942"
                                    >
                                      2
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-end px-2.5 w-[43%]">
                                  <div className="h-[17px] relative w-[59%]">
                                    <div className="absolute h-[17px] inset-y-[0] my-auto outline outline-[1px] outline-white-A700 right-[0] rounded-lg w-[17px]"></div>
                                    <div className="absolute h-[17px] inset-y-[0] left-[0] my-auto outline outline-[1px] outline-white-A700 rounded-lg w-[17px]"></div>
                                  </div>
                                  <Text
                                    className="border border-blue_gray-100_02 border-solid flex h-4 items-center justify-center rounded-[50%] text-[8.86px] text-center text-gray-900_02 w-4"
                                    size="txtInterRegular886"
                                  >
                                    2
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[595px] inset-y-[0] my-auto right-[7%]"
                          src="images/img_group8.svg"
                          alt="groupThirteen_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                  <div className="md:h-[1110px] sm:h-[631px] h-[651px] relative w-full">
                    <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-full">
                      <div className="bg-blue-100_26 border border-black-900_0c border-solid h-[35px] md:ml-[0] ml-[675px] mr-[11px] w-[24%]"></div>
                      <div className="md:h-[1075px] sm:h-[584px] h-[595px] relative w-full">
                        <div className="absolute h-[123px] sm:pr-5 pr-9 right-[0] top-[1%] w-1/4">
                          <div className="bg-white-A700 h-[123px] my-auto w-[84%]"></div>
                          <div className="absolute flex flex-col gap-1.5 h-max inset-y-[0] items-start justify-start left-[3%] my-auto w-[79%]">
                            <div className="flex flex-row gap-[34px] items-start justify-between w-full">
                              <Text
                                className="text-[11.31px] text-black-900"
                                size="txtInterRegular1131"
                              >
                                Lorem Ipsum vini vicee
                              </Text>
                              <Img
                                className="h-[15px] w-[15px]"
                                src="images/img_charmmenukebab.svg"
                                alt="charmmenukebab_Nine"
                              />
                            </div>
                            <Input
                              name="rectangleTwentyNine_Nine"
                              placeholder=""
                              className="p-0 w-full"
                              wrapClassName="flex h-[57px] w-[91%]"
                              shape="square"
                              color="gray_50"
                              variant="fill"
                            ></Input>
                            <div className="flex flex-row items-end justify-between md:ml-[0] ml-[3px] w-[98%] md:w-full">
                              <div className="flex flex-row items-end justify-evenly w-[29%]">
                                <Img
                                  className="h-4 mt-[7px] w-4"
                                  src="images/img_link.svg"
                                  alt="link_Nine"
                                />
                                <div className="flex flex-row items-start justify-center mb-0.5 pr-2.5 w-[59%]">
                                  <Img
                                    className="h-3 mt-2 w-3"
                                    src="images/img_user_blue_100.svg"
                                    alt="user_Ten"
                                  />
                                  <Text
                                    className="mb-[9px] text-[9.42px] text-gray-600_01"
                                    size="txtInterRegular942"
                                  >
                                    2
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-end mt-[7px] px-2.5 w-[44%]">
                                <div className="h-[17px] relative w-[59%]">
                                  <div className="absolute h-[17px] inset-y-[0] my-auto outline outline-[1px] outline-white-A700 right-[0] rounded-lg w-[17px]"></div>
                                  <div className="absolute h-[17px] inset-y-[0] left-[0] my-auto outline outline-[1px] outline-white-A700 rounded-lg w-[17px]"></div>
                                </div>
                                <Text
                                  className="border border-blue_gray-100_02 border-solid flex h-4 items-center justify-center rounded-[50%] text-[8.86px] text-center text-gray-900_02 w-4"
                                  size="txtInterRegular886"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col items-center justify-start left-[0] top-[6%] w-[96%]">
                          <div className="flex flex-col gap-[52px] items-center justify-start w-full">
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                              <Text
                                className="leading-[16.00px] md:mt-0 mt-[9px] text-blue_gray-900_04 text-xs tracking-[-0.07px] w-[19%] sm:w-full"
                                size="txtInterLight12"
                              >
                                Lorem ipsum dolor sit amet consectetur. Vitae
                                vivamus enim pellentesque dolor.
                              </Text>
                              <Text
                                className="leading-[16.00px] mb-[9px] md:ml-[0] ml-[58px] text-blue_gray-900_04 text-xs tracking-[-0.07px] w-[19%] sm:w-full"
                                size="txtInterLight12"
                              >
                                Lorem ipsum dolor sit amet consectetur. Vitae
                                vivamus enim pellentesque dolor.
                              </Text>
                              <Text
                                className="leading-[16.00px] mb-[9px] md:ml-[0] ml-[78px] text-blue_gray-900_04 text-xs tracking-[-0.07px] w-[19%] sm:w-full"
                                size="txtInterLight12"
                              >
                                Lorem ipsum dolor sit amet consectetur. Vitae
                                vivamus enim pellentesque dolor.
                              </Text>
                              <Text
                                className="leading-[16.00px] mb-[9px] md:ml-[0] ml-[76px] text-blue_gray-900_04 text-xs tracking-[-0.07px] w-[19%] sm:w-full"
                                size="txtInterLight12"
                              >
                                Lorem ipsum dolor sit amet consectetur. Vitae
                                vivamus enim pellentesque dolor.
                              </Text>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-[58px] items-start justify-between w-full">
                              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[26px] w-[72%] md:w-full">
                                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                                  <Text
                                    className="leading-[16.00px] sm:mt-0 mt-[18px] text-blue_gray-900_04 text-xs tracking-[-0.07px]"
                                    size="txtInterLight12"
                                  >
                                    Lorem ipsum dolor sit amet consectetur.
                                    Vitae vivamus enim pellentesque dolor.
                                  </Text>
                                  <Text
                                    className="leading-[16.00px] text-blue_gray-900_04 text-xs tracking-[-0.07px]"
                                    size="txtInterLight12"
                                  >
                                    Lorem ipsum dolor sit amet consectetur.{" "}
                                  </Text>
                                  <Text
                                    className="leading-[16.00px] mb-[7px] sm:mt-0 mt-[11px] text-blue_gray-900_04 text-xs tracking-[-0.07px]"
                                    size="txtInterLight12"
                                  >
                                    Lorem ipsum dolor sit amet consectetur.
                                    Vitae vivamus enim pellentesque dolor.
                                  </Text>
                                </div>
                                <div className="flex flex-row sm:gap-10 items-start justify-between mt-[85px] w-full">
                                  <Text
                                    className="leading-[16.00px] mt-[7px] text-blue_gray-900_04 text-xs tracking-[-0.07px]"
                                    size="txtInterLight12"
                                  >
                                    Lorem ipsum dolor sit amet consectetur.{" "}
                                  </Text>
                                  <Text
                                    className="leading-[16.00px] mb-[7px] text-blue_gray-900_04 text-xs tracking-[-0.07px]"
                                    size="txtInterLight12"
                                  >
                                    Lorem ipsum dolor sit amet consectetur.{" "}
                                  </Text>
                                </div>
                                <Text
                                  className="leading-[16.00px] md:ml-[0] ml-[216px] mt-[93px] text-blue_gray-900_04 text-xs tracking-[-0.07px] w-[26%] sm:w-full"
                                  size="txtInterLight12"
                                >
                                  Lorem ipsum dolor sit amet consectetur. Vitae
                                  vivamus enim pellentesque dolor.
                                </Text>
                              </div>
                              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[104px] p-1 w-[22%] md:w-full">
                                <div className="flex flex-col items-center justify-start my-0.5 w-[98%] md:w-full">
                                  <div className="flex flex-row gap-[34px] items-start justify-between w-full">
                                    <Text
                                      className="text-[11.31px] text-blue_gray-900_04"
                                      size="txtInterRegular1131Bluegray90004"
                                    >
                                      Lorem Ipsum vini vicee
                                    </Text>
                                    <Img
                                      className="h-[15px] w-[15px]"
                                      src="images/img_charmmenukebab.svg"
                                      alt="charmmenukebab_Ten"
                                    />
                                  </div>
                                  <div className="h-8 md:h-[35px] mt-[3px] relative w-[93%]">
                                    <Input
                                      name="rectangleTwentyNine_Ten"
                                      placeholder=""
                                      className="justify-center p-0 w-full"
                                      wrapClassName="absolute flex h-[31px] inset-[0] m-auto w-[99%]"
                                      shape="square"
                                      color="gray_50"
                                      variant="fill"
                                    ></Input>
                                    <Text
                                      className="absolute h-full inset-[0] justify-center leading-[16.00px] m-auto text-blue_gray-900_04 text-xs tracking-[-0.07px] w-full"
                                      size="txtInterLight12"
                                    >
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </Text>
                                  </div>
                                  <Img
                                    className="h-[159px] md:h-auto mt-0.5 object-cover w-[91%]"
                                    src="images/img_frame1000001036_159x155.png"
                                    alt="frame1000001036_Three"
                                  />
                                  <div className="flex flex-row items-end justify-between mt-1 pl-1 w-[98%] md:w-full">
                                    <div className="flex flex-row items-end justify-start w-[30%]">
                                      <Img
                                        className="h-4 mt-[7px] w-4"
                                        src="images/img_link.svg"
                                        alt="link_Ten"
                                      />
                                      <div className="flex flex-row items-start justify-center mb-0.5 ml-0.5 pr-2.5 w-[59%]">
                                        <Img
                                          className="h-3 mt-2 w-3"
                                          src="images/img_user_blue_100.svg"
                                          alt="user_Eleven"
                                        />
                                        <Text
                                          className="mb-[9px] text-[9.42px] text-gray-600_01"
                                          size="txtInterRegular942"
                                        >
                                          2
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-end mt-[5px] px-[7px] w-[43%]">
                                      <div className="h-[17px] relative w-[57%]">
                                        <div className="absolute h-[17px] inset-y-[0] my-auto outline outline-[1px] outline-white-A700 right-[0] rounded-lg w-[17px]"></div>
                                        <div className="absolute h-[17px] inset-y-[0] left-[0] my-auto outline outline-[1px] outline-white-A700 rounded-lg w-[17px]"></div>
                                      </div>
                                      <Text
                                        className="border border-blue_gray-100_02 border-solid flex h-4 items-center justify-center rounded-[50%] text-[8.86px] text-center text-gray-900_02 w-4"
                                        size="txtInterRegular886"
                                      >
                                        2
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-gray-300_7f flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[1%] w-[2%]">
                          <div className="bg-gray-100_70 flex flex-col items-end justify-start p-0.5 w-full">
                            <Img
                              className="h-1.5 my-0.5"
                              src="images/img_arrowdown_black_900.svg"
                              alt="arrowdown_One"
                            />
                          </div>
                          <div className="bg-gray-300_01 h-[90px] mt-[22px] w-full"></div>
                          <div className="bg-gray-100_70 flex flex-col items-end justify-start mt-[444px] p-0.5 w-full">
                            <Img
                              className="h-1.5 my-0.5"
                              src="images/img_arrowdown_black_900.svg"
                              alt="arrowdown_Two"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gray-300_01 flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[1%] w-[3%]">
                      <div className="bg-gray-100_70 flex flex-col items-end justify-start p-[3px] w-5 md:w-full">
                        <Img
                          className="h-[7px] my-0.5"
                          src="images/img_arrowdown_black_900.svg"
                          alt="arrowdown_Three"
                        />
                      </div>
                      <div className="bg-gray-100_d1 h-[97px] mt-6 w-full"></div>
                      <div className="bg-gray-100_70 flex flex-col items-end justify-start mt-[476px] p-[3px] w-5 md:w-full">
                        <Img
                          className="h-[7px] my-0.5"
                          src="images/img_arrowdown_black_900.svg"
                          alt="arrowdown_Four"
                        />
                      </div>
                    </div>
                    <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto pr-0.5 pt-0.5 top-[4%] w-[88%]">
                      <Text
                        className="mb-0.5 text-blue_gray-500 text-xs tracking-[-0.07px]"
                        size="txtInterRegular12Bluegray500"
                      >
                        TO DO
                      </Text>
                      <Text
                        className="mt-0.5 text-blue_gray-500 text-xs tracking-[-0.07px]"
                        size="txtInterRegular12Bluegray500"
                      >
                        IN PROGRESS
                      </Text>
                      <Text
                        className="mt-0.5 text-blue_gray-500 text-xs tracking-[-0.07px]"
                        size="txtInterRegular12Bluegray500"
                      >
                        PENDING
                      </Text>
                      <Text
                        className="mr-[33px] mt-0.5 text-blue_gray-500 text-xs tracking-[-0.07px]"
                        size="txtInterRegular12Bluegray500"
                      >
                        COMPLETE
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-gray-50 border border-gray-50 border-solid h-px w-full" />
          </div>
          <BoardsProfileAScrollableNavbarlogoleft className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-center max-w-[1440px] mx-auto sm:px-5 px-[30px] top-[0] w-full" />
        </div>
        <div className="flex flex-col gap-[26px] justify-start max-w-[1188px] mx-auto md:px-5 w-full">
          <Text
            className="ml-2 md:ml-[0] text-base text-blue_gray-900_04 tracking-[-0.10px]"
            size="txtInterSemiBold16Bluegray90004"
          >
            View Similar Projects
          </Text>
          <div className="h-[295px] md:h-[490px] sm:h-[755px] relative w-full">
            <div className="bg-gray-50 h-[297px] m-auto w-full"></div>
            <List
              className="absolute bottom-[5%] sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-[0] justify-center mx-auto w-[96%]"
              orientation="horizontal"
            >
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="md:h-[225px] h-[236px] relative w-full">
                  <div className="flex flex-col h-full items-center justify-start mx-auto pb-[59px] shadow-bs7 w-full">
                    <div className="bg-gray-200_a5 flex flex-col gap-2 justify-start py-3 rounded-[15px] w-full">
                      <div className="bg-gray-200_01 h-[55px] ml-3.5 md:ml-[0] mr-[259px] rounded-[10px] w-[23%]"></div>
                      <Line className="bg-blue_gray-300_01 h-px mb-[51px] w-full" />
                    </div>
                  </div>
                  <div className="absolute md:h-[225px] h-[236px] inset-[0] justify-center m-auto pb-[11px] w-full">
                    <div className="bg-white-A700 h-[225px] mx-auto rounded-lg w-full"></div>
                    <div className="absolute bg-white-A700 border-gray-400_a0 border-solid border-t flex flex-row inset-x-[0] items-end justify-start mx-auto p-3 rounded-tl-[15px] rounded-tr-[15px] top-[0] w-full">
                      <Img
                        className="h-[55px] md:h-auto mb-[5px] ml-0.5 object-cover rounded-[5px] w-1/4"
                        src="images/img_rectangle29.png"
                        alt="rectangleTwentyNine_One"
                      />
                      <div className="flex flex-col gap-[7px] items-start justify-start ml-[15px] my-2 pr-0.5 pt-0.5">
                        <Text
                          className="text-blue_gray-900_04 text-sm tracking-[-0.08px]"
                          size="txtInterBold14"
                        >
                          Lorem Ipsum
                        </Text>
                        <Text
                          className="text-black-900 text-sm tracking-[-0.08px]"
                          size="txtInterRegular14Black900"
                        >
                          Lorem Ipsum
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start ml-[49px] mt-[9px] w-[15%]">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <div className="bg-blue-50 flex flex-col items-center justify-end p-[3px] rounded-[3px] w-[52%]">
                            <Img
                              className="h-3 w-3"
                              src="images/img_bxsuparrow.svg"
                              alt="bxsuparrow"
                            />
                          </div>
                          <Text
                            className="mt-0.5 text-[11.39px] text-blue_gray-900_03 tracking-[-0.07px]"
                            size="txtInterSemiBold1139"
                          >
                            156
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[5px] w-[88%] md:w-full">
                          <Img
                            className="h-[26px] rounded-[5px] w-[26px]"
                            src="images/img_iconbutton_orange_a100.svg"
                            alt="iconbutton"
                          />
                          <Text
                            className="text-[11.42px] text-blue_gray-900_03 tracking-[-0.07px]"
                            size="txtInterSemiBold1142"
                          >
                            4.5
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="absolute bg-blue_gray-300_7f h-px inset-x-[0] mx-auto top-[36%] w-full" />
                    <div className="absolute bottom-[14%] flex flex-col gap-3 inset-x-[0] items-end justify-start mx-auto">
                      <Text
                        className="leading-[20.00px] text-blue_gray-900_04 text-sm tracking-[-0.08px] w-full"
                        size="txtInterRegular14Bluegray90004"
                      >
                        Lorem ipsum dolor sit amet consectetur. Faucibus viverra
                        eu vitae aenean massa Lorem ipsum dolor sit amet
                        consectetur. Faucibus viverra eu vitae aenean massa{" "}
                      </Text>
                      <Text
                        className="text-blue-A200 text-xs"
                        size="txtInterRegular12BlueA200"
                      >
                        See More
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:h-[226px] h-[236px] relative w-full">
                <div className="flex flex-col h-full items-center justify-start mx-auto pb-[59px] shadow-bs7 w-full">
                  <div className="bg-gray-200_a5 flex flex-col gap-2 justify-start py-3 rounded-[15px] w-full">
                    <div className="bg-gray-200_01 h-[55px] ml-3.5 md:ml-[0] mr-[259px] rounded-[10px] w-[23%]"></div>
                    <Line className="bg-blue_gray-300_01 h-px mb-[51px] w-full" />
                  </div>
                </div>
                <div className="absolute md:h-[226px] h-[236px] inset-[0] justify-center m-auto pb-2.5 w-full">
                  <div className="bg-white-A700 h-[226px] mx-auto rounded-lg w-full"></div>
                  <div className="absolute bg-white-A700 border-gray-400_a0 border-solid border-t flex flex-row inset-x-[0] items-end justify-start mx-auto p-3 rounded-tl-[15px] rounded-tr-[15px] top-[0] w-full">
                    <Img
                      className="h-[55px] md:h-auto mb-[5px] ml-0.5 object-cover rounded-[5px] w-1/4"
                      src="images/img_rectangle29_55x80.png"
                      alt="rectangleTwentyNine_One"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start ml-[15px] my-2 pr-0.5 pt-0.5">
                      <Text
                        className="text-blue_gray-900_04 text-sm tracking-[-0.08px]"
                        size="txtInterBold14"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtInterRegular14Black900"
                      >
                        Lorem Ipsum
                      </Text>
                    </div>
                    <div className="flex flex-col items-end justify-start ml-[53px] mt-2 w-[15%]">
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <div className="bg-blue-50 flex flex-col items-center justify-end p-[3px] rounded-[3px] w-[49%]">
                          <Img
                            className="h-3 w-3"
                            src="images/img_bxsuparrow.svg"
                            alt="bxsuparrow"
                          />
                        </div>
                        <Text
                          className="mt-0.5 text-[11.39px] text-blue_gray-900_03 tracking-[-0.07px]"
                          size="txtInterSemiBold1139"
                        >
                          286
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start mt-[5px] w-[84%] md:w-full">
                        <Img
                          className="h-[26px] rounded-[5px] w-[26px]"
                          src="images/img_iconbutton_orange_a100.svg"
                          alt="iconbutton"
                        />
                        <Text
                          className="text-[11.42px] text-blue_gray-900_03 tracking-[-0.07px]"
                          size="txtInterSemiBold1142"
                        >
                          4.5
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="absolute bg-blue_gray-300_7f h-px inset-x-[0] mx-auto top-[36%] w-full" />
                  <div className="absolute bottom-[14%] flex flex-col gap-3 inset-x-[0] items-end justify-start mx-auto">
                    <Text
                      className="leading-[20.00px] text-blue_gray-900_04 text-sm tracking-[-0.08px] w-full"
                      size="txtInterRegular14Bluegray90004"
                    >
                      Lorem ipsum dolor sit amet consectetur. Faucibus viverra
                      eu vitae aenean massa Lorem ipsum dolor sit amet
                      consectetur. Faucibus viverra eu vitae aenean massa{" "}
                    </Text>
                    <Text
                      className="text-blue-A200 text-xs"
                      size="txtInterRegular12BlueA200"
                    >
                      See More
                    </Text>
                  </div>
                </div>
              </div>
              <div className="md:h-[227px] h-[236px] relative w-full">
                <div className="flex flex-col h-full items-center justify-start mx-auto pb-[59px] shadow-bs7 w-full">
                  <div className="bg-gray-200_a5 flex flex-col gap-2 justify-start py-3 rounded-[15px] w-full">
                    <div className="bg-gray-200_01 h-[55px] ml-3.5 md:ml-[0] mr-[259px] rounded-[10px] w-[23%]"></div>
                    <Line className="bg-blue_gray-300_01 h-px mb-[51px] w-full" />
                  </div>
                </div>
                <div className="absolute md:h-[227px] h-[236px] inset-[0] justify-center m-auto pb-[9px] w-full">
                  <div className="bg-white-A700 h-[227px] m-auto rounded-lg w-full"></div>
                  <div className="absolute bg-white-A700 border-gray-400_a0 border-solid border-t flex flex-row inset-x-[0] items-center justify-start mx-auto p-3 rounded-tl-[15px] rounded-tr-[15px] top-[0] w-full">
                    <Img
                      className="h-[55px] md:h-auto mb-[5px] ml-0.5 object-cover rounded-[5px] w-1/4"
                      src="images/img_rectangle29_1.png"
                      alt="rectangleTwentyNine_One"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start ml-[15px] pr-0.5 pt-0.5">
                      <Text
                        className="text-blue_gray-900_04 text-sm tracking-[-0.08px]"
                        size="txtInterBold14"
                      >
                        Lorem Ipsum
                      </Text>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtInterRegular14Black900"
                      >
                        Lorem Ipsum
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-[52px] w-[15%]">
                      <div className="flex flex-row items-start justify-start w-full">
                        <div className="bg-blue-50 flex flex-col items-center justify-end p-[3px] rounded-[3px] w-[52%]">
                          <Img
                            className="h-3 w-3"
                            src="images/img_bxsuparrow.svg"
                            alt="bxsuparrow"
                          />
                        </div>
                        <Text
                          className="ml-[3px] mt-0.5 text-[11.39px] text-blue_gray-900_03 tracking-[-0.07px]"
                          size="txtInterSemiBold1139"
                        >
                          16
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start mt-[5px] w-[88%] md:w-full">
                        <Img
                          className="h-[26px] rounded-[5px] w-[26px]"
                          src="images/img_iconbutton_orange_a100.svg"
                          alt="iconbutton"
                        />
                        <Text
                          className="text-[11.42px] text-blue_gray-900_03 tracking-[-0.07px]"
                          size="txtInterSemiBold1142"
                        >
                          4.5
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="absolute bg-blue_gray-300_7f h-px inset-x-[0] mx-auto top-[36%] w-full" />
                  <div className="absolute bottom-[14%] flex flex-col gap-3 inset-x-[0] items-end justify-start mx-auto">
                    <Text
                      className="leading-[20.00px] text-blue_gray-900_04 text-sm tracking-[-0.08px] w-full"
                      size="txtInterRegular14Bluegray90004"
                    >
                      Lorem ipsum dolor sit amet consectetur. Faucibus viverra
                      eu vitae aenean massa Lorem ipsum dolor sit amet
                      consectetur. Faucibus viverra eu vitae aenean massa{" "}
                    </Text>
                    <Text
                      className="text-blue-A200 text-xs"
                      size="txtInterRegular12BlueA200"
                    >
                      See More
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardsProfileAScrollablePage;
