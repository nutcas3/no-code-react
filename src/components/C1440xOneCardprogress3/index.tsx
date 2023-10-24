import React from "react";

import { Img, Text } from "components";

type C1440xOneCardprogress3Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "label" | "progress" | "sixtyfive"
> &
  Partial<{ label: string; progress: string; sixtyfive: string }>;

const C1440xOneCardprogress3: React.FC<C1440xOneCardprogress3Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto w-[99%]">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[189px] items-center justify-end p-4 w-full"
            style={{ backgroundImage: "url('images/img_cardprogress.svg')" }}
          >
            <div className="flex flex-col items-start justify-start mb-2 mt-[82px] w-[98%] md:w-full">
              <Text
                className="text-[15px] text-blue_gray-900_02"
                size="txtPlusJakartaSansRomanSemiBold15Bluegray90002"
              >
                {props?.label}
              </Text>
              <div className="flex flex-row items-start justify-between mt-3 w-[289px]">
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
                  {props?.sixtyfive}
                </Text>
              </div>
              <div className="h-2 mt-1 overflow-hidden relative w-[99%]">
                <div className="w-full h-full absolute bg-indigo_50 rounded-[4px]"></div>
                <div
                  className="h-full absolute bg-indigo_A200  rounded-[4px]"
                  style={{ width: "57%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-row items-start justify-between right-[0] top-[6%] w-[310px]">
          <div className="flex flex-col h-12 items-center justify-start w-12">
            <Img
              className="h-12 md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-12"
              src="images/img_roundedrectangle_48x48.png"
              alt="roundedrectangl"
            />
          </div>
          <Img className="h-6 w-6" src="images/img_user.svg" alt="user" />
        </div>
      </div>
    </>
  );
};

C1440xOneCardprogress3.defaultProps = {
  label: "StarRigs",
  progress: "Progress",
  sixtyfive: "65%",
};

export default C1440xOneCardprogress3;
