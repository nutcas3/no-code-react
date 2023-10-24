import React from "react";

import { Img, Text } from "components";

type C1440xOneContainerProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "fijit" | "theultimatearcaOne" | "rating"
> &
  Partial<{ fijit: string; theultimatearcaOne: string; rating: string }>;

const C1440xOneContainer: React.FC<C1440xOneContainerProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-start justify-start w-auto">
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-[15px] text-blue_gray-900_01 w-full"
              size="txtPlusJakartaSansRomanBold15"
            >
              {props?.fijit}
            </Text>
            <Text
              className="text-blue_gray-600_01 text-xs w-auto"
              size="txtPlusJakartaSansRomanRegular12Bluegray60001"
            >
              {props?.theultimatearcaOne}
            </Text>
          </div>
          <Img
            className="h-10 md:h-auto rounded-[50%] w-10"
            src="images/img_projectlogo.png"
            alt="projectlogo"
          />
        </div>
        <div className="flex flex-row gap-1 items-center justify-start w-auto">
          <Img
            className="h-3 w-[69px]"
            src="images/img_stars.svg"
            alt="stars"
          />
          <Text
            className="text-blue_gray-600_01 text-xs w-auto"
            size="txtLiberationSansBold12"
          >
            {props?.rating}
          </Text>
        </div>
      </div>
    </>
  );
};

C1440xOneContainer.defaultProps = {
  fijit: "StarRigs",
  theultimatearcaOne: "The Ultimate Arcade of Hypercasual Me…",
  rating: "5/5",
};

export default C1440xOneContainer;
