import React from "react";

import { Img, Text } from "components";

type C1440xOneCardprogressProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "label" | "progress" | "ten"
> &
  Partial<{ label: string; progress: string; ten: string }>;

const C1440xOneCardprogress: React.FC<C1440xOneCardprogressProps> = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_cardprogress.svg')" }}
      >
        <div className="flex flex-col items-start justify-start mb-3 w-[95%] md:w-full">
          <div className="flex flex-row items-start justify-between w-full">
            <div className="flex flex-col h-12 items-center justify-start mt-3 w-12">
              <Img
                className="h-12 md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-12"
                src="images/img_roundedrectangle_48x48.png"
                alt="roundedrectangl"
              />
            </div>
            <Img className="h-6 w-6" src="images/img_user.svg" alt="user" />
          </div>
          <Text
            className="mt-6 text-[15px] text-blue_gray-900_02"
            size="txtPlusJakartaSansRomanSemiBold15Bluegray90002"
          >
            {props?.label}
          </Text>
          <div className="flex flex-row items-start justify-between mt-3.5 w-72">
            <Text
              className="text-blue_gray-400 text-xs w-auto"
              size="txtInterRegular12Bluegray400"
            >
              {props?.progress}
            </Text>
            <Text
              className="text-blue_gray-400 text-xs w-auto"
              size="txtInterRegular12Bluegray400"
            >
              {props?.ten}
            </Text>
          </div>
          <div className="h-2 mt-1 overflow-hidden relative w-[99%]">
            <div className="w-full h-full absolute bg-indigo_50 rounded-[4px]"></div>
            <div
              className="h-full absolute bg-indigo_A200  rounded-[4px]"
              style={{ width: "19%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

C1440xOneCardprogress.defaultProps = {
  label: "TeamFolio",
  progress: "Progress",
  ten: "10%",
};

export default C1440xOneCardprogress;
