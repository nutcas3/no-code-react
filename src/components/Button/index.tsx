import React from "react";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-[16px]",
} as const;
const variants = {
  fill: {
    green_A100: "bg-green-A100 text-green-600",
    white_A700: "bg-white-A700 text-black-900",
    light_blue_100: "bg-light_blue-100 shadow-bs",
    blue_300: "bg-blue-300",
    gray_900_04: "bg-gray-900_04",
    blue_A200: "bg-blue-A200 text-gray-100",
    pink_100: "bg-pink-100 text-red-400",
    amber_100: "bg-amber-100 text-lime-700",
    blue_gray_300_01: "bg-blue_gray-300_01 text-black-900",
    black_900: "bg-black-900 text-white-A700",
    indigo_900: "bg-indigo-900 text-white-A700",
    blue_A400: "bg-blue-A400 text-white-A700",
    blue_gray_500: "bg-blue_gray-500 text-gray-200",
    gray_200_02: "bg-gray-200_02 text-blue_gray-900_03",
  },
  outline: {
    blue_A400: "border border-blue-A400 border-solid text-blue-A400",
    gray_800_01: "border border-gray-800_01 border-solid",
    white_A700: "border-2 border-solid border-white-A700 text-white-A700",
    blue_gray_100_3f: "border border-blue_gray-100_3f border-solid",
    blue_gray_100_01:
      "border border-blue_gray-100_01 border-solid text-gray-900_03",
  },
} as const;
const sizes = {
  xs: "p-[3px]",
  sm: "p-2",
  md: "p-[11px]",
  lg: "p-4",
  xl: "p-6 sm:px-5",
  "2xl": "p-[35px] sm:px-5",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
