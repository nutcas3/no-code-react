import React from "react";

import { Button, Img, Line, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-8 items-center justify-center w-full">
          <div className="flex md:flex-col flex-row gap-6 items-end justify-between w-full">
            <div className="flex flex-1 flex-col items-center justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-[51px] items-start justify-start w-full">
                <Img
                  className="h-[41px] w-[53px]"
                  src="images/img_offer.svg"
                  alt="offer"
                />
                <Text
                  className="md:text-5xl text-[172px] text-white-A700 tracking-[6.88px] w-auto"
                  size="txtGRIFTERBold172"
                >
                  TeamFolio
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start p-6 sm:px-5 w-auto">
              <Text
                className="leading-[30.00px] max-w-[168px] md:max-w-full text-blue_gray-100_01 text-xl tracking-[-0.40px]"
                size="txtPlusJakartaSansRomanSemiBold20"
              >
                Collaborate to Bring Value
              </Text>
            </div>
          </div>
          <Line className="bg-blue_gray-100_01 h-px w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-80">
              <div className="flex flex-col items-start justify-start pt-4 w-full">
                <Text
                  className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700 tracking-[-1.36px] w-full"
                  size="txtPlusJakartaSansRomanBold34"
                >
                  Find us on
                </Text>
              </div>
              <div className="flex flex-row gap-8 items-center justify-start w-full">
                <Button
                  className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                  shape="circle"
                  color="blue_gray_100_3f"
                  size="lg"
                  variant="outline"
                >
                  <Img
                    className="h-5"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                </Button>
                <Button
                  className="flex h-[53px] items-center justify-center rounded-bl-[50%] rounded-br-[26px] rounded-tl-[50%] rounded-tr-[26px] w-[53px]"
                  shape="circle"
                  color="blue_gray_100_3f"
                  size="lg"
                  variant="outline"
                >
                  <Img
                    className="h-[21px]"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                </Button>
                <Button
                  className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                  shape="circle"
                  color="gray_800_01"
                  size="lg"
                  variant="outline"
                >
                  <Img
                    className="h-[18px]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                </Button>
                <Button
                  className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                  shape="circle"
                  color="blue_gray_100_3f"
                  size="lg"
                  variant="outline"
                >
                  <Img
                    className="h-[18px]"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </Button>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start pt-4 w-[600px] md:w-full">
              <div className="flex flex-row gap-40 items-start justify-between w-auto">
                <ul className="flex flex-col gap-[31px] items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtPlusJakartaSansRomanRegular15WhiteA700"
                    >
                      Home
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtPlusJakartaSansRomanRegular15WhiteA700"
                    >
                      About Us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtPlusJakartaSansRomanRegular15WhiteA700"
                    >
                      Projects
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtPlusJakartaSansRomanRegular15WhiteA700"
                    >
                      Contact Us
                    </Text>
                  </li>
                </ul>
                <div className="flex flex-col gap-[31px] items-start justify-start w-auto">
                  <Text
                    className="text-[15px] text-white-A700 w-auto"
                    size="txtPlusJakartaSansRomanRegular15WhiteA700"
                  >
                    Terms and Conditions
                  </Text>
                  <Text
                    className="text-[15px] text-white-A700 w-auto"
                    size="txtPlusJakartaSansRomanRegular15WhiteA700"
                  >
                    Privacy Policy
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-blue_gray-100_01 h-px w-full" />
          <div className="flex flex-col items-center justify-center py-4 shadow-bs3 w-full">
            <Text
              className="text-blue_gray-100_01 text-xs w-auto"
              size="txtPlusJakartaSansRomanRegular12Bluegray10001"
            >
              Copyright 2023 . TeamFolio . All rights reserved.{" "}
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
