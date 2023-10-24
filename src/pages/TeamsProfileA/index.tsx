import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import BoardsProfileAScrollableNavbarlogoleft from "components/BoardsProfileAScrollableNavbarlogoleft";
import TeamsProfileARowfeed from "components/TeamsProfileARowfeed";

const TeamsProfileAPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-32 items-center justify-start mx-auto pb-[72px] w-full">
        <div className="h-[1117px] md:h-[1658px] sm:h-[760px] md:px-5 relative w-full">
          <div className="absolute h-[1113px] md:h-[760px] inset-[0] justify-center m-auto w-[83%] md:w-full">
            <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
              <div className="h-[319px] mx-auto w-full">
                <Img
                  className="h-[319px] m-auto object-cover w-full"
                  src="images/img_rectangle1_319x1184.png"
                  alt="rectangleOne"
                />
                <Img
                  className="absolute bottom-[4%] h-7 right-[0] w-7"
                  src="images/img_ictwotonesavealt_black_900.svg"
                  alt="ictwotonesaveal"
                />
              </div>
              <div className="bg-gray-50 flex flex-col justify-center mb-auto mt-[-319px] p-2 w-[23%] z-[1]">
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
                  <div className="absolute border border-solid deep_orange_300_gray_600_border3 h-[131px] inset-x-[0] mx-auto rounded-[65px] shadow-bs6 top-[0] w-[131px]"></div>
                </div>
                <div className="flex flex-col gap-2 justify-start mt-7">
                  <Text
                    className="md:ml-[0] ml-[77px] text-base text-black-900"
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
                <div className="flex flex-col items-start justify-start mb-[91px] ml-3 md:ml-[0] mt-[30px] w-[96%] md:w-full">
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
            <Img
              className="absolute bottom-[0] h-[749px] right-[0] w-[928px]"
              src="images/img_group55.svg"
              alt="frame1000001086"
            />
          </div>
          <TeamsProfileARowfeed className="absolute bg-gray-50 flex md:flex-col flex-row md:gap-5 items-center justify-start pt-2.5 px-2.5 right-[12%] top-[29%] w-auto" />
          <div className="absolute bottom-[0] md:h-[1658px] sm:h-[741px] h-[743px] right-[5%] w-[65%] md:w-full">
            <div className="md:h-[1658px] sm:h-[741px] h-[743px] m-auto w-full">
              <div className="absolute bg-gray-300_2d border border-blue_gray-100_6c border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col items-start justify-start mb-[18px] w-[91%] md:w-full">
                  <div className="bg-blue_gray-50 flex md:flex-col flex-row md:gap-5 items-start justify-end p-0.5 w-full">
                    <a
                      href="javascript:"
                      className="md:mt-0 mt-2.5 text-blue_gray-500 text-sm tracking-[-0.08px]"
                    >
                      <Text size="txtInterRegular14Bluegray500">TEAMS</Text>
                    </a>
                    <Line className="bg-black-900_33 h-[30px] md:h-px md:ml-[0] ml-[331px] md:w-full w-px" />
                    <Text
                      className="md:ml-[0] ml-[30px] mr-[17px] md:mt-0 mt-[11px] text-blue_gray-500 text-sm tracking-[-0.08px]"
                      size="txtInterRegular14Bluegray500"
                    >
                      PROJECT SUMMARY CONTRIBUTIONS
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[96%] md:w-full">
                    <div className="flex flex-col items-center justify-start pt-0.5 w-[65%] md:w-full">
                      <List
                        className="flex flex-col gap-6 items-start w-auto"
                        orientation="vertical"
                      >
                        <div className="h-[151px] sm:h-[252px] my-0 relative shadow-bs6 w-full">
                          <div className="absolute bg-white-A700 flex flex-col gap-[7px] h-max inset-[0] items-start justify-center m-auto pb-3 px-3 w-full">
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[19px] py-1.5 w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtInterRegular14Black900"
                              >
                                Design team
                              </Text>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start md:ml-[0] ml-[19px] w-auto sm:w-full">
                              <div className="flex flex-col gap-3 items-center justify-start pb-2 w-[48%] sm:w-full">
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row gap-1.5 items-center justify-between w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_25x25.png"
                                          alt="ellipseFour"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[82%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Mwanahamisi
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row gap-1.5 items-start justify-between w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_1.png"
                                          alt="ellipseFour_One"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[82%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Joe Kiragu
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-3 items-center justify-start pb-2 w-[48%] sm:w-full">
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row gap-1.5 items-center justify-between w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_25x25.png"
                                          alt="ellipseFour_Two"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[82%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Mwanahamisi
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row gap-1.5 items-start justify-between w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_1.png"
                                          alt="ellipseFour_Three"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[82%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Joe Kiragu
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-blue-A200_99 h-[151px] inset-y-[0] left-[1%] my-auto rotate-[-90deg] w-[2%]"></div>
                        </div>
                        <div className="h-[151px] sm:h-[252px] my-0 relative shadow-bs6 w-full">
                          <div className="absolute bg-white-A700 flex flex-col gap-[7px] h-max inset-[0] items-start justify-center m-auto pb-3 px-3 w-full">
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[19px] py-1.5 w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtInterRegular14Black900"
                              >
                                Development team
                              </Text>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start md:ml-[0] ml-[19px] w-auto sm:w-full">
                              <div className="flex flex-col gap-3 items-center justify-start pb-2 w-[48%] sm:w-full">
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_25x25.png"
                                          alt="ellipseFour"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[83%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Mwanahamisi
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row items-start justify-start w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_1.png"
                                          alt="ellipseFour_One"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start ml-1">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Joe Kiragu
                                        </Text>
                                        <Text
                                          className="text-[7.37px] text-gray-600_02"
                                          size="txtInterRegular737"
                                        >
                                          Ui/Ux Designer
                                        </Text>
                                      </div>
                                      <Text
                                        className="ml-[49px] mt-3.5 text-[7.37px] text-gray-600_02"
                                        size="txtInterRegular737"
                                      >
                                        15 projects
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-3 items-center justify-start pb-2 w-[48%] sm:w-full">
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_25x25.png"
                                          alt="ellipseFour_Two"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[83%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Mwanahamisi
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row gap-1.5 items-start justify-between w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_1.png"
                                          alt="ellipseFour_Three"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[82%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Joe Kiragu
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-blue-A200_33 h-[151px] inset-y-[0] left-[1%] my-auto rotate-[-90deg] w-[2%]"></div>
                        </div>
                        <div className="h-[151px] sm:h-[252px] my-0 relative shadow-bs6 w-full">
                          <div className="absolute bg-white-A700 flex flex-col gap-[7px] h-max inset-[0] items-start justify-center m-auto pb-3 px-3 w-full">
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[19px] py-1.5 w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtInterRegular14Black900"
                              >
                                Scrum team
                              </Text>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start md:ml-[0] ml-[19px] w-auto sm:w-full">
                              <div className="flex flex-col gap-3 items-center justify-start pb-2 w-[48%] sm:w-full">
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_25x25.png"
                                          alt="ellipseFour"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[83%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Mwanahamisi
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_1.png"
                                          alt="ellipseFour_One"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[83%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Joe Kiragu
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-3 items-center justify-start pb-2 w-[48%] sm:w-full">
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_25x25.png"
                                          alt="ellipseFour_Two"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[83%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Mwanahamisi
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_1.png"
                                          alt="ellipseFour_Three"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[83%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Joe Kiragu
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-blue-A200_33 h-[151px] inset-y-[0] left-[1%] my-auto rotate-[-90deg] w-[2%]"></div>
                        </div>
                        <div className="h-[149px] md:h-[151px] sm:h-[252px] my-0 relative shadow-bs6 w-full">
                          <div className="absolute bg-white-A700 flex flex-col gap-[7px] h-max inset-[0] items-start justify-center m-auto pb-3 px-3 w-full">
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[19px] py-1.5 w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtInterRegular14Black900"
                              >
                                Product team{" "}
                              </Text>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start md:ml-[0] ml-[19px] w-auto sm:w-full">
                              <div className="flex flex-col gap-3 items-center justify-start pb-2 w-[48%] sm:w-full">
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_25x25.png"
                                          alt="ellipseFour"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[83%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Mwanahamisi
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_1.png"
                                          alt="ellipseFour_One"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[83%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Joe Kiragu
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-3 items-center justify-start pb-2 w-[48%] sm:w-full">
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_25x25.png"
                                          alt="ellipseFour_Two"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[83%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Mwanahamisi
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gray-100_02 flex flex-col items-center justify-start p-1.5 rounded w-full">
                                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                                        <Img
                                          className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                          src="images/img_ellipse4_1.png"
                                          alt="ellipseFour_Three"
                                        />
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[83%]">
                                        <Text
                                          className="text-[10px] text-black-900"
                                          size="txtInterRegular10Black900"
                                        >
                                          Joe Kiragu
                                        </Text>
                                        <div className="flex flex-row items-start justify-between w-full">
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            Ui/Ux Designer
                                          </Text>
                                          <Text
                                            className="text-[7.37px] text-gray-600_02"
                                            size="txtInterRegular737"
                                          >
                                            15 projects
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-blue-A200_33 h-[151px] inset-y-[0] left-[1%] my-auto rotate-[-90deg] w-[2%]"></div>
                        </div>
                      </List>
                    </div>
                    <Line className="bg-gray-800_4c h-[686px] md:h-px ml-4 md:ml-[0] md:mt-0 mt-0.5 md:w-full w-px" />
                    <div className="border border-gray-400 border-solid flex flex-col items-center justify-center md:ml-[0] ml-[38px] md:mt-0 mt-[30px] p-1 rounded-lg w-auto">
                      <Text
                        className="text-[10px] text-blue_gray-900_04 w-auto"
                        size="txtInterRegular10Bluegray90004"
                      >
                        {" "}
                        Dev team{" "}
                      </Text>
                    </div>
                    <div className="border border-gray-400 border-solid flex flex-col items-center justify-center md:ml-[0] ml-[19px] md:mt-0 mt-[30px] p-1 rounded-lg w-auto">
                      <Text
                        className="text-[10px] text-black-900 w-auto"
                        size="txtInterRegular10Black900"
                      >
                        {" "}
                        Scrum team{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px] md:mt-0 mt-[5px] w-[10%] md:w-full">
                      <Text
                        className="bg-blue_gray-50_01 border border-blue-A200 border-solid justify-center md:ml-[0] ml-[5px] px-1 py-[3px] rounded-lg text-[10px] text-blue_gray-900_04 w-auto"
                        size="txtInterRegular10Bluegray90004"
                      >
                        <span className="text-blue_gray-900_04 tracking-[-0.06px] font-inter text-left font-normal">
                          Design Team
                        </span>
                        <span className="text-blue_gray-900_04 font-inter text-left font-normal">
                          {" "}
                        </span>
                      </Text>
                      <div className="border border-gray-400 border-solid flex flex-col items-center justify-center mt-[5px] p-1 rounded-lg w-auto">
                        <Text
                          className="text-[10px] text-blue_gray-900_04 w-auto"
                          size="txtInterRegular10Bluegray90004"
                        >
                          {" "}
                          Product team{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[2%] md:h-[579px] h-[643px] px-1.5 right-[0] w-[38%]">
                <div className="absolute md:h-[579px] h-[627px] inset-y-[0] left-[1%] my-auto w-[84%]">
                  <div className="absolute md:h-[579px] h-[595px] inset-x-[0] mx-auto top-[0] w-full">
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-col gap-14 items-center justify-start w-full">
                        <div className="h-[271px] relative w-full">
                          <div className="flex flex-col gap-[25px] h-full items-center justify-start ml-auto mr-[109px] mt-[77px]">
                            <Text
                              className="text-[7.37px] text-gray-600_02"
                              size="txtInterRegular737"
                            >
                              3 days ago
                            </Text>
                            <Text
                              className="text-[7.37px] text-gray-600_02"
                              size="txtInterRegular737"
                            >
                              3 days ago
                            </Text>
                          </div>
                          <div className="absolute h-[271px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute h-[271px] inset-y-[0] left-[0] my-auto sm:pl-5 pl-[30px] w-[90%]">
                              <Img
                                className="h-[271px] ml-auto my-auto"
                                src="images/img_frame1000001073.svg"
                                alt="frame1000001073"
                              />
                              <div className="absolute flex flex-row items-start justify-center right-[0] top-[13%] w-[85%]">
                                <Img
                                  className="h-[9px] ml-1.5 mt-0.5 w-[9px]"
                                  src="images/img_feedit.svg"
                                  alt="feedit"
                                />
                                <Text
                                  className="ml-[9px] text-[10px] text-blue_gray-900_04"
                                  size="txtInterRegular10Bluegray90004"
                                >
                                  Changed the user ....
                                </Text>
                                <Text
                                  className="ml-[13px] mr-[41px] mt-0.5 text-[7.37px] text-gray-600_02"
                                  size="txtInterRegular737"
                                >
                                  3 days ago
                                </Text>
                              </div>
                            </div>
                            <div className="absolute bottom-[16%] flex flex-col gap-[17px] items-center justify-start right-[0] w-auto">
                              <div className="flex flex-row gap-[9px] items-start justify-start pb-1 px-1 w-full">
                                <Img
                                  className="h-[11px] w-[11px]"
                                  src="images/img_mdirepost_gray_700.svg"
                                  alt="mdirepost"
                                />
                                <Text
                                  className="text-[10px] text-blue_gray-900_04"
                                  size="txtInterRegular10Bluegray90004"
                                >
                                  Added the user ....
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[11px] items-start justify-start pb-1 px-1 w-full">
                                <Img
                                  className="h-[9px] mt-[3px] w-[9px]"
                                  src="images/img_feedit.svg"
                                  alt="feedit_One"
                                />
                                <Text
                                  className="text-[10px] text-blue_gray-900_04"
                                  size="txtInterRegular10Bluegray90004"
                                >
                                  Wireframed the ....
                                </Text>
                              </div>
                              <div className="flex flex-row items-start justify-start w-full">
                                <Img
                                  className="h-[9px] ml-1 w-[9px]"
                                  src="images/img_feedit.svg"
                                  alt="feedit_Two"
                                />
                                <Text
                                  className="ml-[11px] text-[10px] text-blue_gray-900_04"
                                  size="txtInterRegular10Bluegray90004"
                                >
                                  Changed the user ....
                                </Text>
                                <Text
                                  className="ml-[13px] mt-0.5 text-[7.37px] text-gray-600_02"
                                  size="txtInterRegular737"
                                >
                                  3 days ago
                                </Text>
                              </div>
                              <div className="flex flex-row items-start justify-start w-full">
                                <Img
                                  className="h-[9px] ml-1 mt-0.5 w-[9px]"
                                  src="images/img_feedit.svg"
                                  alt="feedit_Three"
                                />
                                <Text
                                  className="ml-[11px] text-[10px] text-blue_gray-900_04"
                                  size="txtInterRegular10Bluegray90004"
                                >
                                  Changed the user ....
                                </Text>
                                <Text
                                  className="ml-[13px] mt-0.5 text-[7.37px] text-gray-600_02"
                                  size="txtInterRegular737"
                                >
                                  8 days ago
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-start w-full">
                                <Img
                                  className="h-[9px] ml-1 w-[9px]"
                                  src="images/img_feedit.svg"
                                  alt="feedit_Four"
                                />
                                <Text
                                  className="ml-[11px] text-[10px] text-blue_gray-900_04"
                                  size="txtInterRegular10Bluegray90004"
                                >
                                  Changed the user ....
                                </Text>
                                <Text
                                  className="ml-[13px] text-[7.37px] text-gray-600_02"
                                  size="txtInterRegular737"
                                >
                                  10 days ago
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="md:h-[252px] h-[255px] pr-1 relative w-[67%]">
                          <div className="absolute md:h-[252px] h-[255px] inset-[0] justify-center m-auto w-[98%]">
                            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[3px] w-[98%]">
                              <div className="flex flex-col items-start justify-start mb-[7px] mt-[13px] w-[97%] md:w-full">
                                <div className="flex flex-row gap-3 items-start justify-between w-[99%] md:w-full">
                                  <Text
                                    className="text-[10px] text-blue_gray-900_04"
                                    size="txtInterRegular10Bluegray90004"
                                  >
                                    Changed the wireframing
                                  </Text>
                                  <Text
                                    className="mt-0.5 text-[7.37px] text-gray-600_02"
                                    size="txtInterRegular737"
                                  >
                                    3 days ago
                                  </Text>
                                </div>
                                <Img
                                  className="h-[159px] md:h-auto mt-[7px] object-cover w-[159px]"
                                  src="images/img_frame1000001036_2.png"
                                  alt="frame1000001036"
                                />
                                <div className="flex flex-row gap-[13px] items-start justify-between mt-[34px] w-full">
                                  <Text
                                    className="text-[10px] text-blue_gray-900_04"
                                    size="txtInterRegular10Bluegray90004"
                                  >
                                    Updated the user journey
                                  </Text>
                                  <Text
                                    className="text-[7.37px] text-gray-600_02"
                                    size="txtInterRegular737"
                                  >
                                    5 days ago
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[9px] left-[0] top-[7%] w-[9px]"
                              src="images/img_feedit.svg"
                              alt="feedit_Five"
                            />
                            <Img
                              className="absolute h-[9px] left-[1%] top-[46%]"
                              src="images/img_vector17.svg"
                              alt="vectorSeventeen"
                            />
                          </div>
                          <Img
                            className="absolute h-[9px] right-[2%] top-[46%]"
                            src="images/img_arrowright_gray_800_03.svg"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[2%] h-[11px] left-[15%] w-[11px]"
                      src="images/img_mdirepost_gray_700.svg"
                      alt="mdirepost_One"
                    />
                    <div className="absolute bg-gray-300_7f h-80 right-[12%] top-[0] w-[5%]"></div>
                  </div>
                  <div className="absolute bg-gray-300_7f bottom-[0] flex flex-col items-center justify-start py-5 right-[12%] w-[6%]">
                    <div className="bg-gray-300_01 h-[46px] mb-[219px] w-full"></div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[2%] h-[21px] right-1/4"
                  src="images/img_arrowup_gray_100_01.svg"
                  alt="arrowup"
                />
                <div className="absolute flex flex-col items-center justify-start right-[6%] top-[44%] w-[84%]">
                  <div className="h-11 md:h-[41px] relative w-full">
                    <div className="absolute h-[41px] left-[0] top-[0] w-[78%]">
                      <div className="h-[41px] my-auto rounded-[3px] shadow-bs9 w-[92%]"></div>
                      <div className="absolute bg-gray-100_02 flex flex-row gap-[22px] h-full inset-[0] items-center justify-between m-auto p-1.5 rounded-[3px] w-full">
                        <div className="flex flex-col items-start justify-start">
                          <div className="flex flex-row items-start justify-start w-1/2 md:w-full">
                            <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                              <Img
                                className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                                src="images/img_ellipse4_1.png"
                                alt="ellipseFour"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start ml-1 mt-[3px]">
                              <Text
                                className="text-[8.42px] text-black-900"
                                size="txtInterRegular842"
                              >
                                Joe Kiragu
                              </Text>
                              <Text
                                className="text-[7.37px] text-gray-600_02"
                                size="txtInterRegular737"
                              >
                                Ui/Ux Designer
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-2.5 mr-[11px] w-[11px]"
                          src="images/img_sort.svg"
                          alt="sort"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[0] md:h-3.5 h-[19px] pb-[5px] right-[0] w-[62%]">
                      <div className="absolute bg-gray-200_03 h-3.5 left-[0] top-[0] w-[54%]"></div>
                      <div className="absolute flex flex-row gap-6 items-start justify-between right-[0] top-[0] w-[95%]">
                        <Text
                          className="text-[8.42px] text-black-900"
                          size="txtInterRegular842"
                        >
                          List
                        </Text>
                        <div className="h-[11px] md:pr-10 sm:pr-5 pr-[93px] relative w-[77%]">
                          <Text
                            className="absolute left-[4%] text-[8.42px] text-black-900 top-[0]"
                            size="txtInterRegular842"
                          >
                            Boards
                          </Text>
                          <div className="absolute bg-gray-800_03 bottom-[0] h-px left-[0] w-[29%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col items-center justify-start left-[11%] top-[0] w-[64%]">
                  <div className="h-[41px] relative w-full">
                    <div className="h-[41px] my-auto rounded shadow-bs9 w-[93%]"></div>
                    <div className="absolute bg-gray-100_02 flex flex-row gap-[22px] h-full inset-[0] items-center justify-between m-auto p-1.5 rounded-md w-full">
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-start justify-start w-[51%] md:w-full">
                          <div className="flex flex-col h-[25px] items-center justify-start w-[25px]">
                            <Img
                              className="h-[25px] md:h-auto rounded-[50%] w-[25px]"
                              src="images/img_ellipse4_25x25.png"
                              alt="ellipseFour_One"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start ml-1 mt-0.5">
                            <Text
                              className="text-[8.42px] text-black-900"
                              size="txtInterRegular842"
                            >
                              Mwanahamisi
                            </Text>
                            <Text
                              className="mt-0.5 text-[7.37px] text-gray-600_02"
                              size="txtInterRegular737"
                            >
                              Ui/Ux Designer
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="h-2.5 mr-[9px] w-[11px]"
                        src="images/img_sort_blue_gray_300_02.svg"
                        alt="sort_One"
                      />
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-11 left-[19%] object-cover w-[45%]"
                  src="images/img_rectangle45.png"
                  alt="rectangleFortyFive"
                />
              </div>
            </div>
            <div className="absolute bg-gray-300_7f bottom-[1%] flex flex-col items-center justify-start pb-0.5 right-[6%] w-[2%]">
              <Img
                className="h-[21px]"
                src="images/img_arrowup_gray_100_01.svg"
                alt="arrowup_One"
              />
              <div className="bg-gray-300_01 h-[106px] mt-[26px] w-full"></div>
              <Img
                className="h-[21px] mt-[521px]"
                src="images/img_arrowup_gray_100_01.svg"
                alt="arrowup_Two"
              />
            </div>
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

export default TeamsProfileAPage;
