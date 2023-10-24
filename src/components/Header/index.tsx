import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="flex sm:flex-1 flex-row gap-9 items-center justify-start w-[443px] sm:w-full">
            <Img
              className="h-[35px] w-[84px]"
              src="images/img_clock.svg"
              alt="clock"
            />
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-row gap-5 items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-start px-3 py-6 w-auto">
                  <Text
                    className="text-[15px] text-blue-A200 w-auto"
                    size="txtPlusJakartaSansRomanSemiBold15BlueA200"
                  >
                    Home
                  </Text>
                </div>
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
          <Text
            className="border border-black-900_a3 border-solid pl-3 sm:pr-5 pr-[35px] py-[11px] rounded-[20px] text-black-900_4c text-sm w-[460px]"
            size="txtInterRegular14Black9004c"
          >
            Search
          </Text>
          <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
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
    </>
  );
};

Header.defaultProps = {};

export default Header;
