import React from "react";

import { Button, Img, Input, Line, Text } from "components";

type SignUpLoginandsignProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "signup"
  | "language"
  | "languageOne"
  | "and"
  | "services"
  | "usersignup"
  | "or"
  | "confirmation"
  | "languageTwo"
> &
  Partial<{
    signup: string;
    language: string;
    languageOne: string;
    and: string;
    services: string;
    usersignup: string;
    or: string;
    confirmation: string;
    languageTwo: string;
  }>;

const SignUpLoginandsign: React.FC<SignUpLoginandsignProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[53%] md:w-full">
          <Img
            className="h-[1024px] md:h-auto object-cover w-full"
            src="images/img_unsplashnpxxwgq33zq_1024x720.png"
            alt="unsplashnpxxwgq"
          />
        </div>
        <div className="flex flex-col items-center justify-start w-[43%] md:w-full">
          <div className="flex flex-col gap-[37px] items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-9 items-start justify-start w-[97%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto"
                size="txtInterBold48"
              >
                {props?.signup}
              </Text>
              <div className="flex flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-[29.92px] items-start justify-start w-auto sm:w-full">
                  <Input
                    name="email"
                    placeholder="Email"
                    className="!placeholder:text-gray-500 !text-gray-500 font-inter font-light leading-[normal] p-0 text-left text-xl w-full"
                    wrapClassName="border border-gray-300 border-solid w-[99%]"
                    shape="round"
                    color="white_A700"
                    variant="fill"
                  ></Input>
                  <Input
                    name="username"
                    placeholder="Username "
                    className="!placeholder:text-gray-500 !text-gray-500 font-inter font-light leading-[normal] p-0 text-left text-xl w-full"
                    wrapClassName="border border-gray-300 border-solid w-[99%]"
                    shape="round"
                    color="white_A700"
                    variant="fill"
                  ></Input>
                  <Input
                    name="password"
                    placeholder="Password"
                    className="!placeholder:text-gray-500 !text-gray-500 font-inter font-light leading-[normal] p-0 text-left text-xl w-full"
                    wrapClassName="border border-gray-300 border-solid w-[99%]"
                    shape="round"
                    color="white_A700"
                    variant="fill"
                  ></Input>
                  <Input
                    name="confirmpassword_One"
                    placeholder="Confirm password"
                    className="!placeholder:text-gray-500 !text-gray-500 font-inter font-light leading-[normal] p-0 text-left text-xl w-full"
                    wrapClassName="border border-gray-300 border-solid w-[99%]"
                    shape="round"
                    color="white_A700"
                    variant="fill"
                  ></Input>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start p-2.5 w-auto sm:w-full">
                    <Img
                      className="h-5 w-9"
                      src="images/img_computer.svg"
                      alt="computer"
                    />
                    <div className="flex flex-col items-center justify-start w-[499px] sm:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-[95%]">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly w-full">
                          <Text
                            className="text-black-900 text-lg w-auto"
                            size="txtInterLight18"
                          >
                            {props?.language}
                          </Text>
                          <Text
                            className="text-lg text-light_blue-A700 w-auto"
                            size="txtInterLight18LightblueA700"
                          >
                            {props?.languageOne}
                          </Text>
                          <Text
                            className="text-lg text-light_blue-A700 w-auto"
                            size="txtInterLight18LightblueA700"
                          >
                            {props?.and}
                          </Text>
                        </div>
                        <Text
                          className="text-lg text-light_blue-A700 w-auto"
                          size="txtInterLight18LightblueA700"
                        >
                          {props?.services}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="!text-white-A700 cursor-pointer font-inter font-semibold leading-[normal] min-w-[557px] sm:min-w-full rounded-md text-center text-xl"
                  color="blue_300"
                  size="sm"
                  variant="fill"
                >
                  {props?.usersignup}
                </Button>
              </div>
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-auto sm:w-full">
                <Line className="bg-black-900 h-0.5 w-[47%]" />
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtInterSemiBold20Black900"
                >
                  {props?.or}
                </Text>
                <Line className="bg-black-900 h-0.5 w-[47%]" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start pb-6 sm:pr-5 pr-6 w-full">
                <div className="flex flex-col justify-start w-[87%] md:w-full">
                  <div className="flex md:ml-[0] ml-[145px] relative w-[319px]">
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
                  <div className="flex flex-col items-start justify-start mr-[129px] mt-[3px] p-2.5 w-auto">
                    <div className="flex flex-row gap-[7px] items-start justify-start px-5 w-auto">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtInterLight18"
                      >
                        {props?.confirmation}
                      </Text>
                      <Text
                        className="text-lg text-light_blue-A700 w-auto"
                        size="txtInterLight18LightblueA700"
                      >
                        {props?.languageTwo}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignUpLoginandsign.defaultProps = {
  signup: "SIGN UP",
  language: "By clicking this checkbox, you agree to these ",
  languageOne: "Terms ",
  and: "and",
  services: "Services",
  usersignup: "Sign up",
  or: "or",
  confirmation: "Already have an account?",
  languageTwo: "Log In ",
};

export default SignUpLoginandsign;
