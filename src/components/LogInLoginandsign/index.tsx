import React from "react";

import { Button, Img, Input, Line, Text } from "components";

type LogInLoginandsignProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "language" | "loginbutton" | "or" | "confirmation" | "signupbutton"
> &
  Partial<{
    language: string;
    loginbutton: string;
    or: string;
    confirmation: string;
    signupbutton: string;
  }>;

const LogInLoginandsign: React.FC<LogInLoginandsignProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[53%] md:w-full">
          <Img
            className="h-[1024px] md:h-auto object-cover w-full"
            src="images/img_unsplashnpxxwgq33zq.png"
            alt="unsplashnpxxwgq"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-[42%] md:w-full">
          <Text
            className="ml-0.5 md:ml-[0] sm:text-[39.48px] md:text-[45.48px] text-[49.48px] text-gray-800"
            size="txtInterBold4948"
          >
            {props?.language}
          </Text>
          <div className="flex flex-col gap-[25px] items-start justify-start mt-10 w-auto sm:w-full">
            <div className="flex flex-col gap-[23.92px] items-start justify-start w-auto sm:w-full">
              <Input
                name="language_One"
                placeholder="Username "
                className="!placeholder:text-gray-500 !text-gray-500 font-inter font-light leading-[normal] p-0 text-left text-xl w-full"
                wrapClassName="rounded-[10px] shadow-bs1 w-full"
                color="white_A700"
                variant="fill"
              ></Input>
              <Input
                name="password"
                placeholder="Password"
                className="!placeholder:text-gray-500 !text-gray-500 font-inter font-light leading-[normal] p-0 text-left text-xl w-full"
                wrapClassName="rounded-[10px] shadow-bs1 w-full"
                color="white_A700"
                variant="fill"
              ></Input>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-inter font-semibold leading-[normal] min-w-[557px] sm:min-w-full text-center text-xl"
              shape="square"
              color="light_blue_100"
              size="sm"
              variant="fill"
            >
              {props?.loginbutton}
            </Button>
          </div>
          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-[38px] w-auto sm:w-full">
            <Line className="bg-black-900 h-0.5 w-[47%]" />
            <Text
              className="text-gray-800 text-xl w-auto"
              size="txtInterSemiBold20"
            >
              {props?.or}
            </Text>
            <Line className="bg-black-900 h-0.5 w-[47%]" />
          </div>
          <div className="flex flex-col gap-[18px] justify-start mt-[29px] w-full">
            <div className="flex md:ml-[0] ml-[136px] relative w-[319px]">
              <div className="flex my-auto w-[70%]">
                <div className="flex flex-col items-center justify-start my-auto w-[57%]">
                  <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[42px] w-full">
                    <Img
                      className="h-[42px] md:h-auto object-cover w-[41px] sm:w-full"
                      src="images/img_image5.png"
                      alt="imageFive"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start ml-[-32.25px] my-auto w-[57%] z-[1]">
                  <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[42px] w-full">
                    <Img
                      className="h-[41px] md:h-auto object-cover w-[41px]"
                      src="images/img_image3.png"
                      alt="imageThree"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start ml-[-31.72px] my-auto w-2/5 z-[1]">
                <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[42px] w-full">
                  <Img
                    className="h-[41px] md:h-auto object-cover w-[41px]"
                    src="images/img_image4.png"
                    alt="imageFour"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[7px] items-start justify-start w-auto">
              <Text
                className="text-gray-800 text-xl w-auto"
                size="txtInterLight20"
              >
                {props?.confirmation}
              </Text>
              <Text
                className="text-light_blue-A700 text-xl w-auto"
                size="txtInterLight20LightblueA700"
              >
                {props?.signupbutton}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LogInLoginandsign.defaultProps = {
  language: "LOG IN ",
  loginbutton: "Log in",
  or: "or",
  confirmation: "Don’t have an account?",
  signupbutton: "Sign up",
};

export default LogInLoginandsign;
