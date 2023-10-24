import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
          <div className="header-row my-[18px]">
            <Img
              className="h-[35px] max-h-[35px] md:w-[]"
              src="images/img_clock.svg"
              alt="clock"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[220px] sm:hidden items-center justify-between w-full">
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-row gap-5 items-center justify-start w-full">
                <div className="flex flex-1 md:flex-1 flex-col items-start justify-start px-3 py-6 w-auto md:w-full">
                  <Text
                    className="text-[15px] text-blue-A200 w-auto"
                    size="txtPlusJakartaSansRomanSemiBold15BlueA200"
                  >
                    Home
                  </Text>
                </div>
                <div className="flex flex-1 md:flex-1 flex-col items-start justify-start px-3 py-6 w-auto md:w-full">
                  <Text
                    className="text-[15px] text-black-900 w-auto"
                    size="txtPlusJakartaSansRegular15"
                  >
                    About
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="border border-black-900_a3 border-solid flex-1 pl-3 sm:pr-5 pr-[35px] py-[11px] rounded-[20px] text-black-900_4c text-sm w-full"
              size="txtInterRegular14Black9004c"
            >
              Search
            </Text>
            <div className="flex flex-1 flex-row gap-5 items-center justify-end w-full">
              <div className="flex flex-col items-start justify-start px-3 py-6 w-auto">
                <Text
                  className="text-[15px] text-black-900 w-auto"
                  size="txtPlusJakartaSansRomanRegular15"
                >
                  Log In
                </Text>
              </div>
              <Button
                className="common-pointer cursor-pointer font-bold font-plusjakartasans min-w-[84px] text-center text-xs"
                onClick={() => navigate("/signup")}
                shape="round"
                color="black_900"
                size="sm"
                variant="fill"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
