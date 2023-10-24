import React from "react";

const sizeClasses = {
  txtInterRegular12Bluegray90003: "font-inter font-normal",
  txtInterSemiBold1142: "font-inter font-semibold",
  txtPlusJakartaSansRomanSemiBold15Bluegray90002:
    "font-plusjakartasans font-semibold",
  txtInterSemiBold24Black900: "font-inter font-semibold",
  txtInterRegular737: "font-inter font-normal",
  txtPlusJakartaSansRomanSemiBold15BlueA200:
    "font-plusjakartasans font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterRegular942Bluegray90004: "font-inter font-normal",
  txtInterBold32WhiteA700: "font-bold font-inter",
  txtPlusJakartaSansRomanRegular24: "font-normal font-plusjakartasans",
  txtInterSemiBold1139: "font-inter font-semibold",
  txtInterRegular24: "font-inter font-normal",
  txtInterSemiBold20Black900: "font-inter font-semibold",
  txtPlusJakartaSansRomanSemiBold16: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRomanSemiBold15: "font-plusjakartasans font-semibold",
  txtInterSemiBold14Bluegray90003: "font-inter font-semibold",
  txtInterRegular10: "font-inter font-normal",
  txtInterRegular842: "font-inter font-normal",
  txtPlusJakartaSansRomanSemiBold12: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold16: "font-plusjakartasans font-semibold",
  txtInterLight18LightblueA700: "font-inter font-light",
  txtPlusJakartaSansRomanRegular12Black9004c:
    "font-normal font-plusjakartasans",
  txtInterRegular10Black900: "font-inter font-normal",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular13: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular14Black9004c: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular12Gray60002: "font-inter font-normal",
  txtInterRegular1131: "font-inter font-normal",
  txtInterRegular14Black900: "font-inter font-normal",
  txtPlusJakartaSansRomanMedium15: "font-medium font-plusjakartasans",
  txtInterBold20Black900a8: "font-bold font-inter",
  txtPlusJakartaSansRomanSemiBold20: "font-plusjakartasans font-semibold",
  txtInterBold48: "font-bold font-inter",
  txtInterLight18: "font-inter font-light",
  txtInterSemiBold14Gray100: "font-inter font-semibold",
  txtInterBold24Black900: "font-bold font-inter",
  txtPlusJakartaSansRomanRegular16Black900: "font-normal font-plusjakartasans",
  txtInterBold42: "font-bold font-inter",
  txtInterRegular14Bluegray50001: "font-inter font-normal",
  txtInterLight12: "font-inter font-light",
  txtPlusJakartaSansRomanRegular12Bluegray60001:
    "font-normal font-plusjakartasans",
  txtInterRegular12Bluegray50001: "font-inter font-normal",
  txtInterRegular1131Bluegray90004: "font-inter font-normal",
  txtPlusJakartaSansRomanRegular12Bluegray10001:
    "font-normal font-plusjakartasans",
  txtInterBold32Gray90007: "font-bold font-inter",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtInterSemiBold14Bluegray50001: "font-inter font-semibold",
  txtInterBold32: "font-bold font-inter",
  txtPlusJakartaSansRegular15: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanRegular12: "font-normal font-plusjakartasans",
  txtInterRegular12BlueA200: "font-inter font-normal",
  txtPlusJakartaSansRomanRegular14: "font-normal font-plusjakartasans",
  txtInterLight20: "font-inter font-light",
  txtPlusJakartaSansRomanRegular15: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanRegular16: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRomanBold15Bluegray90002: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanBold34: "font-bold font-plusjakartasans",
  txtInterRegular10Bluegray90004: "font-inter font-normal",
  txtPlusJakartaSansRomanRegular16DeeppurpleA200:
    "font-normal font-plusjakartasans",
  txtInterRegular14Bluegray90003: "font-inter font-normal",
  txtInterRegular14Bluegray90004: "font-inter font-normal",
  txtInterRegular14Bluegray500: "font-inter font-normal",
  txtInterBold24: "font-bold font-inter",
  txtInterLight20LightblueA700: "font-inter font-light",
  txtInterBold20: "font-bold font-inter",
  txtInterSemiBold16BlueA400: "font-inter font-semibold",
  txtInterRegular12Bluegray400: "font-inter font-normal",
  txtInterBold24Gray90007: "font-bold font-inter",
  txtGRIFTERBold172: "font-bold font-grifter",
  txtGRIFTERBold45: "font-bold font-grifter",
  txtInterBold14: "font-bold font-inter",
  txtInterRegular886: "font-inter font-normal",
  txtInterSemiBold14Bluegray500: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold16Bluegray90004: "font-inter font-semibold",
  txtLiberationSansBold12: "font-bold font-liberationsans",
  txtInterRegular24Black900: "font-inter font-normal",
  txtInterSemiBold24Black900_1: "font-inter font-semibold",
  txtPlusJakartaSansRomanBold12: "font-bold font-plusjakartasans",
  txtPlusJakartaSansRomanBold15: "font-bold font-plusjakartasans",
  txtInterBold4948: "font-bold font-inter",
  txtInterBold32Purple100: "font-bold font-inter",
  txtInterRegular12Black900: "font-inter font-normal",
  txtPlusJakartaSansRomanRegular15WhiteA700: "font-normal font-plusjakartasans",
  txtInterMedium1497: "font-inter font-medium",
  txtInterRegular12Bluegray500: "font-inter font-normal",
  txtInterRegular24Black900a8: "font-inter font-normal",
  txtPlusJakartaSansRomanRegular12Bluegray700:
    "font-normal font-plusjakartasans",
  txtInterRegular886Bluegray90004: "font-inter font-normal",
  txtInterRegular14BlueA200: "font-inter font-normal",
  txtInterRegular32: "font-inter font-normal",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterRegular942: "font-inter font-normal",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterSemiBold14Red40001: "font-inter font-semibold",
  txtInterBold42Black900: "font-bold font-inter",
  txtInterBold24Purple100: "font-bold font-inter",
  txtInterSemiBold20: "font-inter font-semibold",
  txtPlusJakartaSansSemiBold16Black9007f: "font-plusjakartasans font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
