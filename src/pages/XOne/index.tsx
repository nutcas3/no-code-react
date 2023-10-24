import React from "react";

import { Button, Img, Line, List, Text } from "components";
import C1440xOneCardprogress from "components/C1440xOneCardprogress";
import C1440xOneCardprogress1 from "components/C1440xOneCardprogress1";
import C1440xOneCardprogress2 from "components/C1440xOneCardprogress2";
import C1440xOneCardprogress3 from "components/C1440xOneCardprogress3";
import C1440xOneContainer from "components/C1440xOneContainer";
import DashBCard from "components/DashBCard";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const XOnePage: React.FC = () => {
  const c1440XOneContainerPropList = [
    {},
    { fijit: "TeamFolio" },
    { fijit: "Magic 80" },
    { fijit: "DoomErasor" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-grifter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex items-center justify-center md:px-5 px-[30px] w-full" />
        <div className="bg-deep_purple-A200 flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start md:px-10 sm:px-5 px-[265px] py-10 w-full">
          <Img
            className="sm:flex-1 h-[164px] md:h-auto object-cover w-[155px] sm:w-full"
            src="images/img_ellipse1.png"
            alt="ellipseOne"
          />
          <div className="relative w-full">
            <div className="flex flex-col items-center justify-start max-w-[960px] p-8 sm:px-5 w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700"
                  size="txtGRIFTERBold45"
                >
                  <>
                    Collaborate with your team and <br />
                    showcase your projects to the world
                  </>
                </Text>
                <div className="flex md:flex-col flex-row font-plusjakartasans md:gap-5 items-center justify-center w-full">
                  <div className="flex flex-1 flex-col items-center justify-start sm:px-5 px-[23px] py-6 w-full">
                    <Button
                      className="cursor-pointer font-semibold rounded-[19px] text-center text-xs w-[400px]"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      Create a new project
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start p-6 sm:px-5 w-full">
                    <Button
                      className="cursor-pointer font-semibold rounded-[19px] text-center text-xs w-full"
                      color="white_A700"
                      size="md"
                      variant="outline"
                    >
                      Find Talent
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute bottom-[0] h-[150px] object-cover right-[0] w-[255px]"
              src="images/img_ellipse2_150x255.png"
              alt="ellipseTwo"
            />
          </div>
        </div>
        <div className="flex flex-col font-plusjakartasans gap-4 items-start justify-start pt-16 sm:px-5 px-8 w-full">
          <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start md:px-5 w-auto md:w-full">
            <Button
              className="cursor-pointer font-semibold min-w-[83px] text-center text-xs tracking-[-0.48px]"
              shape="round"
              color="blue_gray_100_01"
              size="sm"
              variant="outline"
            >
              Trending
            </Button>
            <Button
              className="cursor-pointer font-semibold min-w-[70px] text-center text-xs tracking-[-0.48px]"
              shape="round"
              color="blue_gray_100_01"
              size="sm"
              variant="outline"
            >
              Latest
            </Button>
            <Button
              className="cursor-pointer font-semibold min-w-[155px] text-center text-xs tracking-[-0.48px]"
              shape="round"
              color="blue_gray_100_01"
              size="sm"
              variant="outline"
            >
              Work and Productivity
            </Button>
            <Button
              className="cursor-pointer font-semibold min-w-[48px] text-center text-xs tracking-[-0.48px]"
              shape="round"
              color="blue_gray_100_01"
              size="sm"
              variant="outline"
            >
              AI
            </Button>
            <Button
              className="cursor-pointer font-semibold min-w-[110px] text-center text-xs tracking-[-0.48px]"
              shape="round"
              color="blue_gray_100_01"
              size="sm"
              variant="outline"
            >
              E-commerce
            </Button>
            <Button
              className="cursor-pointer font-semibold min-w-[86px] text-center text-xs tracking-[-0.48px]"
              shape="round"
              color="blue_gray_100_01"
              size="sm"
              variant="outline"
            >
              Finanace
            </Button>
            <Button
              className="cursor-pointer font-semibold min-w-[134px] text-center text-xs tracking-[-0.48px]"
              shape="round"
              color="blue_gray_100_01"
              size="sm"
              variant="outline"
            >
              Health and Fitness
            </Button>
            <Button
              className="flex h-[34px] items-center justify-center w-[34px]"
              shape="circle"
              color="gray_900_04"
              size="md"
              variant="fill"
            >
              <Img src="images/img_settings.svg" alt="settings" />
            </Button>
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-between max-w-[1376px] mx-auto md:px-5 w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start py-6 w-auto md:w-full"
              orientation="horizontal"
            >
              {new Array(3).fill({}).map((props, index) => (
                <React.Fragment key={`DashBCard${index}`}>
                  <DashBCard
                    className="bg-white-A700 flex flex-col gap-8 items-center justify-start pb-6 pt-2 px-2 rounded-md shadow-bs2 w-auto"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
            <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-start py-6 rounded-[16px] shadow-bs5 w-full">
              <div className="flex flex-row items-center justify-between sm:px-5 px-6 w-full">
                <Text
                  className="flex-1 text-blue_gray-600_01 text-xs tracking-[-0.50px] w-auto"
                  size="txtPlusJakartaSansRomanBold12"
                >
                  PROMOTED PROJECTS
                </Text>
                <a
                  href="javascript:"
                  className="flex-1 text-indigo-A200 text-right text-xs w-auto"
                >
                  <Text size="txtInterBold12">See all</Text>
                </a>
              </div>
              <List
                className="flex flex-col gap-6 items-center w-full"
                orientation="vertical"
              >
                {c1440XOneContainerPropList.map((props, index) => (
                  <React.Fragment key={`C1440xOneContainer${index}`}>
                    <C1440xOneContainer
                      className="bg-white-A700 flex flex-1 flex-col gap-[5px] items-start justify-start sm:px-5 px-6 py-2 rounded-[16px] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
          <Img
            className="h-5 max-w-[1376px] mx-auto w-full"
            src="images/img_frame51.svg"
            alt="frameFiftyOne"
          />
          <div className="flex md:flex-col flex-row gap-6 items-start justify-between max-w-[1381px] mx-auto pb-10 md:px-5 w-full">
            <div className="flex md:flex-1 flex-col h-[922px] md:h-auto items-start justify-start w-auto md:w-full">
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {new Array(6).fill({}).map((props, index) => (
                  <React.Fragment key={`DashBCard${index}`}>
                    <DashBCard
                      className="bg-white-A700 flex flex-1 flex-col gap-8 items-center justify-start pb-6 pt-2 px-2 rounded-md shadow-bs2 w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="md:h-[701px] h-[915px] py-6 relative w-full">
              <div className="absolute bg-white-A700 flex flex-1 flex-col gap-6 h-full inset-[0] items-center justify-start m-auto py-6 rounded-[16px] shadow-bs5 w-full">
                <div className="flex flex-row items-center justify-between sm:px-5 px-6 w-full">
                  <Text
                    className="flex-1 text-blue_gray-600_01 text-xs tracking-[-0.50px] w-auto"
                    size="txtPlusJakartaSansRomanBold12"
                  >
                    TOP PROJECTS PROGRESS
                  </Text>
                  <a
                    href="javascript:"
                    className="text-indigo-A200 text-right text-xs w-auto"
                  >
                    <Text size="txtInterBold12">See all</Text>
                  </a>
                </div>
                <List
                  className="flex flex-col gap-6 items-center w-full"
                  orientation="vertical"
                >
                  <C1440xOneCardprogress
                    className="bg-cover bg-no-repeat bg-white-A700 flex flex-1 flex-col h-[189px] items-center justify-start p-3 w-full"
                    style={{
                      backgroundImage: "url('images/img_cardprogress.svg')",
                    }}
                  />
                  <C1440xOneCardprogress1
                    className="bg-cover bg-no-repeat bg-white-A700 flex flex-1 flex-col h-[189px] items-center justify-start p-3 w-full"
                    style={{
                      backgroundImage: "url('images/img_cardprogress.svg')",
                    }}
                  />
                  <C1440xOneCardprogress2
                    className="bg-cover bg-no-repeat bg-white-A700 flex flex-1 flex-col h-[189px] items-center justify-start p-3 w-full"
                    style={{
                      backgroundImage: "url('images/img_cardprogress.svg')",
                    }}
                  />
                </List>
              </div>
              <C1440xOneCardprogress3 className="absolute md:h-[188px] h-[189px] inset-x-[0] mx-auto top-[3%] w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter h-full items-center justify-start w-full">
          <Text
            className="text-center text-indigo-A200 text-xs"
            size="txtInterBold12"
          >
            Load more projects
          </Text>
        </div>
        <Footer className="bg-gray-900_05 flex font-grifter gap-8 items-center justify-center pb-2 pt-16 md:px-5 px-[60px] w-full" />
      </div>
    </>
  );
};

export default XOnePage;
