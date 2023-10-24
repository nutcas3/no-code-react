import React from "react";

import { Button, Img, Input, Text } from "components";

type BoardsProfileAScrollableNavbarlogoleftProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "home" | "aboutOne" | "logintext" | "signupbutton"
> &
  Partial<{
    home: string;
    aboutOne: string;
    logintext: string;
    signupbutton: string;
  }>;

const BoardsProfileAScrollableNavbarlogoleft: React.FC<
  BoardsProfileAScrollableNavbarlogoleftProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
          <Img
            className="h-[35px] max-h-[35px] sm:w-[] md:w-[]"
            src="images/img_clock.svg"
            alt="clock"
          />
          <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[220px] items-center justify-between w-full">
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-row gap-5 items-center justify-start w-full">
                <div className="flex flex-1 md:flex-1 flex-col items-start justify-start px-3 py-6 w-auto md:w-full">
                  <Text
                    className="text-[15px] text-blue-A200 w-auto"
                    size="txtPlusJakartaSansRomanSemiBold15BlueA200"
                  >
                    {props?.home}
                  </Text>
                </div>
                <div className="flex flex-1 md:flex-1 flex-col items-start justify-start px-3 py-6 w-auto md:w-full">
                  <Text
                    className="text-[15px] text-black-900 w-auto"
                    size="txtPlusJakartaSansRegular15"
                  >
                    {props?.aboutOne}
                  </Text>
                </div>
              </div>
            </div>
            <Input
              name="navbarlink"
              placeholder="Search"
              className="!placeholder:text-black-900_4c !text-black-900_4c font-inter p-0 text-left text-sm w-full"
              wrapClassName="flex-1 md:flex-1 rounded-[20px] md:w-full"
              color="black_900_a3"
              size="md"
              variant="outline"
            ></Input>
            <div className="flex flex-1 flex-row gap-5 items-center justify-end w-full">
              <div className="flex flex-col items-start justify-start px-3 py-6 w-auto">
                <Text
                  className="text-[15px] text-black-900 w-auto"
                  size="txtPlusJakartaSansRomanRegular15"
                >
                  {props?.logintext}
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold font-plusjakartasans min-w-[84px] text-center text-xs"
                shape="round"
                color="black_900"
                size="sm"
                variant="fill"
              >
                {props?.signupbutton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BoardsProfileAScrollableNavbarlogoleft.defaultProps = {
  home: "Home",
  aboutOne: "About",
  logintext: "Log In",
  signupbutton: "Sign up",
};

export default BoardsProfileAScrollableNavbarlogoleft;
