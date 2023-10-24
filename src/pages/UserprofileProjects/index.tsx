import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import UserProfileProjectsNavbarlogoleft from "components/UserProfileProjectsNavbarlogoleft";

const UserprofileProjectsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-plusjakartasans items-center justify-start mx-auto pb-[135px] w-full">
        <div className="flex flex-col gap-[55px] items-center justify-start w-full">
          <div className="md:h-56 sm:h-[156px] h-[321px] md:px-5 relative w-full">
            <Img
              className="absolute h-[156px] inset-x-[0] mx-auto object-cover rounded-[5px] top-[20%] w-[79%]"
              src="images/img_rectangle16.png"
              alt="rectangleSixteen"
            />
            <Img
              className="absolute bottom-[0] h-[130px] left-[10%] rounded-[50%] w-[130px]"
              src="images/img_ellipse2.png"
              alt="ellipseTwo"
            />
            <div className="absolute bottom-[7%] flex md:flex-col flex-row md:gap-5 items-end justify-start right-[12%] w-[69%]">
              <div className="flex flex-col gap-[5px] items-start justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPlusJakartaSansRomanRegular24"
                >
                  Emmanuel Kan
                </Text>
                <Text
                  className="text-base text-black-900_7f"
                  size="txtPlusJakartaSansRomanRegular16"
                >
                  Visual Designer
                </Text>
              </div>
              <Img
                className="h-10 mb-[3px] md:ml-[0] ml-[669px] md:mt-0 mt-3.5 w-10"
                src="images/img_share.svg"
                alt="share"
              />
              <Button
                className="capitalize cursor-pointer leading-[normal] mb-[3px] min-w-[89px] md:ml-[0] ml-[15px] md:mt-0 mt-3.5 rounded-md text-center text-sm"
                color="blue_A400"
                size="md"
                variant="fill"
              >
                Message
              </Button>
            </div>
            <UserProfileProjectsNavbarlogoleft className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-center max-w-[1440px] mx-auto sm:px-5 px-[30px] top-[0] w-full" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-start max-w-[1140px] mx-auto md:px-5 w-full">
            <div className="bg-gray-50_66 flex md:flex-1 flex-col items-center justify-start pl-[13px] py-[13px] rounded-[5px] w-[35%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[19px] mt-3.5 w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPlusJakartaSansRomanSemiBold16"
                  >
                    About me
                  </Text>
                  <Text
                    className="leading-[23.00px] text-black-900 text-sm w-full"
                    size="txtPlusJakartaSansRomanRegular14"
                  >
                    <>
                      I&#39;m Emmanuel, a skilled visual designer based in
                      Nairobi, Kenya. With a strong passion for creating
                      captivating designs, I specialize in crafting unique
                      branding and designing impactful social campaigns. I
                      believe in the power of design to tell meaningful stories
                      and evoke emotions.
                    </>
                  </Text>
                </div>
                <Line className="bg-black-900_19 h-px mt-5 w-[90%]" />
                <div className="flex flex-col gap-[13px] items-start justify-start mt-[21px]">
                  <Text
                    className="capitalize text-base text-black-900"
                    size="txtPlusJakartaSansSemiBold16"
                  >
                    Experience
                  </Text>
                  <Text
                    className="capitalize leading-[23.00px] text-black-900 text-sm w-full"
                    size="txtPlusJakartaSansRomanRegular14"
                  >
                    Proficient in Adobe Creative Suite (Illustrator, Photoshop,
                    InDesign) and experienced in working collaboratively within
                    a dynamic team
                  </Text>
                </div>
                <Line className="bg-black-900_19 h-px ml-1 md:ml-[0] mt-5 w-[90%]" />
                <Text
                  className="capitalize ml-1 md:ml-[0] mt-[19px] text-[15px] text-black-900"
                  size="txtPlusJakartaSansRomanMedium15"
                >
                  Skills
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start ml-1 md:ml-[0] mt-[11px] w-[66%] md:w-full">
                  <Input
                    name="frameTen"
                    placeholder="UI design"
                    className="capitalize p-0 placeholder:text-black-900 text-left text-sm w-full"
                    wrapClassName="rounded-[11px] w-[34%]"
                    color="black_900_7f"
                    size="sm"
                    variant="outline"
                  ></Input>
                  <Text
                    className="border border-black-900_7f border-solid capitalize pt-1 px-2.5 rounded-[11px] text-black-900 text-sm w-auto"
                    size="txtPlusJakartaSansRomanRegular14"
                  >
                    Figma
                  </Text>
                  <Text
                    className="border border-black-900_7f border-solid capitalize pt-1 px-2.5 rounded-[11px] text-black-900 text-sm w-auto"
                    size="txtPlusJakartaSansRomanRegular14"
                  >
                    UI design
                  </Text>
                </div>
                <div className="flex flex-row items-end justify-start ml-1 md:ml-[0] mt-10 w-[15%] md:w-full">
                  <Text
                    className="capitalize text-[15px] text-black-900"
                    size="txtPlusJakartaSansRomanMedium15"
                  >
                    Links
                  </Text>
                  <Img
                    className="h-3.5 ml-[3px] mt-[5px] w-3.5"
                    src="images/img_frame.svg"
                    alt="frame"
                  />
                </div>
                <Text
                  className="ml-1 md:ml-[0] mt-2.5 text-deep_purple-A200 text-xs underline"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  Behance
                </Text>
                <Text
                  className="ml-1 md:ml-[0] mt-3 text-deep_purple-A200 text-xs underline"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  Linkedin
                </Text>
                <Text
                  className="ml-1 md:ml-[0] mt-3 text-deep_purple-A200 text-xs underline"
                  size="txtPlusJakartaSansRomanRegular12"
                >
                  EmmanuelKan.com
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[57px] items-start justify-start w-[61%] md:w-full">
              <div className="sm:h-[101px] h-[50px] relative w-[688px] md:w-full">
                <div className="bg-gray-50_66 h-[50px] m-auto rounded-[10px] w-full"></div>
                <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-max inset-y-[0] items-center justify-between left-[0] my-auto w-4/5">
                  <Button
                    className="capitalize cursor-pointer font-semibold min-w-[321px] rounded-[10px] text-base text-center"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Projects
                  </Button>
                  <Text
                    className="capitalize text-base text-black-900_7f w-auto"
                    size="txtPlusJakartaSansSemiBold16Black9007f"
                  >
                    Activity
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-2 w-[63%]"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col h-[282px] md:h-auto items-center justify-start pt-2.5 px-2 shadow-bs2 w-[206px]">
                  <div className="flex flex-col gap-2.5 h-[272px] md:h-auto items-start justify-start w-[195px]">
                    <Img
                      className="h-[152px] md:h-auto object-cover w-full"
                      src="images/img_roundedrectangle.png"
                      alt="roundedrectangl"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start px-4 w-full">
                      <div className="flex flex-col items-start justify-between w-full">
                        <Text
                          className="text-[15px] text-gray-900_01 w-auto"
                          size="txtPlusJakartaSansRomanSemiBold15"
                        >
                          Team Folio
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-700 text-xs w-full"
                        size="txtPlusJakartaSansRomanRegular12Bluegray700"
                      >
                        Role: Design Team Lead
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-between w-[195px]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col items-center justify-start px-5 py-3 w-auto">
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Text
                                className="text-deep_purple-A200 text-xs underline w-auto"
                                size="txtPlusJakartaSansRomanSemiBold12"
                              >
                                View project
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-[282px] md:h-auto items-center justify-start px-2 py-[9px] shadow-bs2 w-[206px]">
                  <div className="flex flex-col gap-2.5 h-[272px] md:h-auto items-start justify-start w-[195px]">
                    <Img
                      className="h-[152px] md:h-auto object-cover w-full"
                      src="images/img_roundedrectangle.png"
                      alt="roundedrectangl"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start px-4 w-full">
                      <div className="flex flex-col items-start justify-between w-full">
                        <Text
                          className="text-[15px] text-gray-900_01 w-auto"
                          size="txtPlusJakartaSansRomanSemiBold15"
                        >
                          Greensave
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-700 text-xs w-full"
                        size="txtPlusJakartaSansRomanRegular12Bluegray700"
                      >
                        Role: UI Designer
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-between w-[195px]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col items-center justify-start px-5 py-3 w-auto">
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Text
                                className="text-deep_purple-A200 text-xs underline w-auto"
                                size="txtPlusJakartaSansRomanSemiBold12"
                              >
                                View project
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserprofileProjectsPage;
