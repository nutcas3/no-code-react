import React from "react";

import { Img, Text } from "components";

type DashBCardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "headline" | "description" | "seemoretext"
> &
  Partial<{ headline: string; description: string; seemoretext: string }>;

const DashBCard: React.FC<DashBCardProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start w-[313px]">
          <Img
            className="h-[200px] md:h-auto object-cover rounded-bl-[3px] rounded-br-[3px] w-full"
            src="images/img_roundedrectangle_200x313.png"
            alt="roundedrectangl"
          />
          <div className="flex flex-col gap-4 items-start justify-start px-4 w-full">
            <div className="flex flex-row gap-4 items-start justify-between w-full">
              <Text
                className="flex-1 text-[15px] text-gray-900_01 w-auto"
                size="txtPlusJakartaSansRomanSemiBold15"
              >
                {props?.headline}
              </Text>
              <Img
                className="h-[26px] w-[60px]"
                src="images/img_minimize.svg"
                alt="minimize"
              />
            </div>
            <Text
              className="leading-[23.00px] max-w-[281px] md:max-w-full text-blue_gray-700 text-xs"
              size="txtPlusJakartaSansRomanRegular12Bluegray700"
            >
              {props?.description}
            </Text>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-between px-4 w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start px-5 py-3 w-auto">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-deep_purple-A200 text-xs underline w-auto"
                      size="txtPlusJakartaSansRomanSemiBold12"
                    >
                      {props?.seemoretext}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex relative w-full">
              <div className="flex m-auto w-[52%]">
                <Img
                  className="h-10 ml-[undefinedpx] my-auto rounded-[50%] w-10 z-[1]"
                  src="images/img_vector.png"
                  alt="vector"
                />
                <Img
                  className="h-10 ml-[-8px] my-auto rounded-[50%] w-10 z-[1]"
                  src="images/img_vector_40x40.png"
                  alt="vector_One"
                />
              </div>
              <Img
                className="h-10 ml-[-8px] my-auto rounded-[50%] w-10 z-[1]"
                src="images/img_vector_1.png"
                alt="vector_Two"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashBCard.defaultProps = {
  headline: "Headline",
  description:
    "Write an amazing description in this dedicated card section. Each word counts. ",
  seemoretext: "See more",
};

export default DashBCard;
