import React from "react";

import { Img, Input, Text } from "components";

type UserProfileProjectsNavbarlogoleftProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "home" | "about"
> &
  Partial<{ home: string; about: string }>;

const UserProfileProjectsNavbarlogoleft: React.FC<
  UserProfileProjectsNavbarlogoleftProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
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
                    {props?.home}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start px-3 py-6 w-auto">
                  <Text
                    className="text-[15px] text-black-900 w-auto"
                    size="txtPlusJakartaSansRegular15"
                  >
                    {props?.about}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Input
            name="search"
            placeholder="Search"
            className="!placeholder:text-black-900_4c !text-black-900_4c font-inter p-0 text-left text-sm w-full"
            wrapClassName="md:flex-1 rounded-[20px] md:w-full"
            color="black_900_a3"
            size="md"
            variant="outline"
          ></Input>
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
              className="h-8 md:h-auto rounded-[50%] w-8"
              src="images/img_ellipse17.png"
              alt="ellipseSeventeen"
            />
          </div>
        </div>
      </div>
    </>
  );
};

UserProfileProjectsNavbarlogoleft.defaultProps = {
  home: "Home",
  about: "About",
};

export default UserProfileProjectsNavbarlogoleft;
