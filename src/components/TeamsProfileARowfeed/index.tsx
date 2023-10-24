import React from "react";

import { Img, Line, Text } from "components";

type TeamsProfileARowfeedProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "feed" | "boards" | "languageone" | "resources"
> &
  Partial<{
    feed: string;
    boards: string;
    languageone: string;
    resources: string;
  }>;

const TeamsProfileARowfeed: React.FC<TeamsProfileARowfeedProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[30px] items-center justify-start w-auto"
          style={{ backgroundImage: "url('images/img_frame1000001149.svg')" }}
        >
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start pl-2 w-auto">
              <Text
                className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                size="txtInterSemiBold14Bluegray50001"
              >
                {props?.feed}
              </Text>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[30px] items-center justify-start w-auto"
          style={{ backgroundImage: "url('images/img_frame1000001149.svg')" }}
        >
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start pl-2 w-auto">
              <Text
                className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                size="txtInterSemiBold14Bluegray50001"
              >
                {props?.boards}
              </Text>
            </div>
          </div>
        </div>
        <div className="md:h-[30px] h-[39px] relative w-[214px]">
          <Img
            className="absolute h-[30px] inset-x-[0] mx-auto top-[0] w-[214px]"
            src="images/img_frame1000001149.svg"
            alt="frame1000001147"
          />
          <div className="absolute bottom-[0] flex flex-col gap-[9px] inset-x-[0] items-center justify-start mx-auto w-auto">
            <div className="flex flex-col items-start justify-start pl-2 w-auto">
              <Text
                className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                size="txtInterSemiBold14Bluegray50001"
              >
                {props?.languageone}
              </Text>
            </div>
            <Line className="bg-blue-A200 h-[3px] w-full" />
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[30px] items-center justify-start w-auto"
          style={{ backgroundImage: "url('images/img_frame1000001149.svg')" }}
        >
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start pl-2 w-auto">
              <Text
                className="text-blue_gray-500_01 text-sm tracking-[0.08px] uppercase w-auto"
                size="txtInterSemiBold14Bluegray50001"
              >
                {props?.resources}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TeamsProfileARowfeed.defaultProps = {
  feed: "FEED",
  boards: "bOARDS",
  languageone: "TEAM ",
  resources: "rESOURCES",
};

export default TeamsProfileARowfeed;
