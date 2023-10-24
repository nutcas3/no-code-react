import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header1 from "components/Header1";
import ProfileSectionOptBRowframe1000001147 from "components/ProfileSectionOptBRowframe1000001147";

const ProfileSectionOptBPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[84px] items-center justify-start mx-auto pb-[75px] w-full">
        <div className="h-[1022px] md:h-[1525px] sm:h-[683px] md:px-5 relative w-full">
          <div className="absolute bottom-[1%] flex flex-col inset-x-[0] mx-auto w-[83%] md:w-full">
            <div className="h-[252px] mx-auto w-full">
              <Img
                className="h-[252px] m-auto object-cover w-full"
                src="images/img_rectangle1_252x1184.png"
                alt="rectangleOne"
              />
              <Img
                className="absolute bottom-[5%] h-7 right-[0] w-7"
                src="images/img_ictwotonesavealt_black_900.svg"
                alt="ictwotonesaveal"
              />
            </div>
            <ProfileSectionOptBRowframe1000001147 className="bg-gray-50 flex md:flex-col flex-row md:gap-5 items-center justify-start ml-auto mr-[43px] mt-[-NaNpx] pt-2.5 px-2.5 w-auto z-[1]" />
            <div className="bg-gray-50 flex flex-col md:gap-10 gap-[170px] justify-end mt-[-101px] p-0.5 rounded-tl-[25px] rounded-tr-[25px] w-[23%] z-[1]">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[18px] mt-[161px] w-[94%] md:w-full">
                <div className="flex flex-col gap-1.5 items-center justify-start ml-1.5 md:ml-[0]">
                  <Text
                    className="text-base text-black-900"
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
                <div className="flex flex-row gap-[67px] items-center justify-start mt-[30px] pl-1.5 w-4/5 md:w-full">
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
                <div className="flex flex-col items-center justify-start ml-1.5 md:ml-[0] mt-[37px] pb-[5px] w-[98%] md:w-full">
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
                <div className="flex flex-row gap-5 items-center justify-start mt-[38px] w-[89%] md:w-full">
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
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mb-[9px] ml-6 md:ml-[0] mr-[163px] w-[29%] md:w-full">
                <Text
                  className="text-black-900 text-sm"
                  size="txtInterRegular14Black900"
                >
                  Links
                </Text>
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
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
          <div
            className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[658px] items-end justify-start p-2.5 right-[8%] w-[65%]"
            style={{ backgroundImage: "url('images/img_group55.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-[89%] md:w-full">
              <div className="flex flex-col gap-8 items-center justify-start md:mt-0 mt-[33px] w-[85%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                      <div className="flex flex-col h-[29px] items-center justify-start w-[29px]">
                        <Img
                          className="h-[29px] md:h-auto rounded-[50%] w-[29px]"
                          src="images/img_ellipse4.png"
                          alt="ellipseFour"
                        />
                      </div>
                      <Text
                        className="md:ml-[0] ml-[9px] md:mt-0 mt-[7px] text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                        size="txtInterRegular14Bluegray90003"
                      >
                        Teamfolio reshared a post
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[11px] md:mt-0 mt-[9px] text-gray-600_02 text-xs"
                        size="txtInterRegular12Gray60002"
                      >
                        3 days ago
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[364px] md:mt-0 mt-1 w-6"
                        src="images/img_solarmenudotsbold.svg"
                        alt="solarmenudotsbo"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-col items-start justify-end p-4 rounded-lg shadow-bs6 w-full">
                      <div className="flex flex-col gap-[13px] justify-start md:ml-[0] ml-[51px] mt-[7px] w-3/4 md:w-full">
                        <div className="flex flex-row items-center justify-start w-[33%] md:w-full">
                          <div className="flex flex-col h-[29px] items-center justify-start w-[29px]">
                            <Img
                              className="h-[29px] md:h-auto rounded-[50%] w-[29px]"
                              src="images/img_ellipse4_29x29.png"
                              alt="ellipseFour_One"
                            />
                          </div>
                          <Text
                            className="ml-[9px] text-[13px] text-blue_gray-900_03 tracking-[-0.08px]"
                            size="txtInterRegular13"
                          >
                            Teamlab{" "}
                          </Text>
                          <Text
                            className="ml-[7px] text-gray-600_02 text-xs"
                            size="txtInterRegular12Gray60002"
                          >
                            5 days ago
                          </Text>
                        </div>
                        <div className="bg-white-A700 border border-gray-600_4c border-solid flex flex-col items-center justify-start md:ml-[0] ml-[18px] p-[13px] rounded w-[97%] md:w-full">
                          <div className="flex flex-col gap-[18px] items-start justify-start mb-3.5 w-[97%] md:w-full">
                            <Text
                              className="text-blue_gray-900_03 text-xs tracking-[-0.07px]"
                              size="txtInterRegular12Bluegray90003"
                            >
                              We are excited to announce our new project launch
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between ml-0.5 md:ml-[0] w-full">
                              <Img
                                className="h-[193px] md:h-auto object-cover"
                                src="images/img_rectangle41.png"
                                alt="rectangleFortyOne"
                              />
                              <Img
                                className="h-[193px] md:h-auto object-cover"
                                src="images/img_rectangle42.png"
                                alt="rectangleFortyTwo"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start pt-1 w-4/5 md:w-full">
                      <Img
                        className="h-[26px] w-[26px]"
                        src="images/img_eicomment.svg"
                        alt="eicomment"
                      />
                      <Text
                        className="sm:mt-0 mt-[3px] text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                        size="txtInterRegular14Bluegray90003"
                      >
                        13
                      </Text>
                      <Img
                        className="h-5 sm:ml-[0] ml-[135px] sm:mt-0 mt-1.5 w-5"
                        src="images/img_favorite.svg"
                        alt="favorite"
                      />
                      <Text
                        className="sm:ml-[0] ml-[5px] sm:mt-0 mt-[7px] text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                        size="txtInterRegular14Bluegray90003"
                      >
                        256
                      </Text>
                      <Img
                        className="h-[22px] sm:ml-[0] ml-[116px] sm:mt-0 mt-1 w-[22px]"
                        src="images/img_mdirepost.svg"
                        alt="mdirepost"
                      />
                      <Text
                        className="sm:ml-[0] ml-[5px] sm:mt-0 mt-1.5 text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                        size="txtInterRegular14Bluegray90003"
                      >
                        13
                      </Text>
                      <Img
                        className="h-[26px] sm:ml-[0] ml-[129px] w-[26px]"
                        src="images/img_mdilightshare.svg"
                        alt="mdilightshare"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-[29px]">
                        <div className="flex flex-col h-[29px] items-center justify-start w-[29px]">
                          <Img
                            className="h-[29px] md:h-auto rounded-[50%] w-[29px]"
                            src="images/img_ellipse4.png"
                            alt="ellipseFour_Two"
                          />
                        </div>
                      </div>
                      <Text
                        className="ml-2 md:ml-[0] md:mt-0 mt-2 text-blue_gray-900_03 text-sm tracking-[-0.08px]"
                        size="txtInterRegular14Bluegray90003"
                      >
                        Teamfolio updated their profile photo
                      </Text>
                      <Text
                        className="ml-3.5 md:ml-[0] md:mt-0 mt-2.5 text-gray-600_02 text-xs"
                        size="txtInterRegular12Gray60002"
                      >
                        6 days ago
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[293px] md:mt-0 mt-[5px] w-6"
                        src="images/img_solarmenudotsbold.svg"
                        alt="solarmenudotsbo_One"
                      />
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100_04 border-solid flex flex-col items-center justify-end pt-9 sm:px-5 px-9 rounded-tl-lg rounded-tr-lg w-full">
                      <Img
                        className="h-[66px] md:h-auto object-cover w-[89%]"
                        src="images/img_rectangle43.png"
                        alt="rectangleFortyThree"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-300_01 flex flex-col items-center justify-start w-[3%] md:w-full">
                <div className="bg-gray-100_70 flex flex-col items-end justify-start p-[3px] w-5 md:w-full">
                  <Img
                    className="h-[7px] my-0.5"
                    src="images/img_arrowdown_black_900.svg"
                    alt="arrowdown_One"
                  />
                </div>
                <div className="bg-gray-100_d1 h-[97px] mt-6 w-full"></div>
                <div className="bg-gray-100_70 flex flex-col items-end justify-start mt-[476px] p-[3px] w-5 md:w-full">
                  <Img
                    className="h-[7px] my-0.5"
                    src="images/img_arrowdown_black_900.svg"
                    alt="arrowdown_Two"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col items-start justify-start left-[13%] top-[15%] w-[10%]">
            <div className="h-[131px] relative w-[131px]">
              <Img
                className="h-[116px] m-auto rounded-[50%] w-[116px]"
                src="images/img_ellipse1_116x116.png"
                alt="ellipseOne"
              />
              <div className="absolute border border-solid deep_orange_300_gray_600_border2 h-[131px] inset-[0] justify-center m-auto rounded-[65px] shadow-bs6 w-[131px]"></div>
            </div>
            <Text
              className="md:ml-[0] ml-[5px] mt-[9px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterSemiBold24Black900_1"
            >
              TeamFolio
            </Text>
            <Text
              className="md:ml-[0] ml-[22px] mt-[7px] text-blue_gray-900_04 text-sm tracking-[-0.08px]"
              size="txtInterRegular14Bluegray90004"
            >
              @teamfolio
            </Text>
          </div>
          <Header1 className="absolute bg-white-A700 flex inset-x-[0] items-center justify-center mx-auto sm:px-5 px-[30px] top-[0] w-full" />
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

export default ProfileSectionOptBPage;
