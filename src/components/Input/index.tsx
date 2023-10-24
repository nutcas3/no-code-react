import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const shapes = { square: "rounded-none", round: "rounded-md" } as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    gray_100: "bg-gray-100 text-blue_gray-500_01",
    blue_gray_100_33: "bg-blue_gray-100_33",
    amber_300: "bg-amber-300 text-lime-900",
    gray_50: "bg-gray-50",
  },
  outline: {
    black_900_7f: "border border-black-900_7f border-solid text-black-900",
    black_900_a3: "border border-black-900_a3 border-solid",
    deep_purple_200:
      "border border-deep_purple-200 border-solid text-black-900_a8",
  },
} as const;
const sizes = {
  xs: "pt-px",
  sm: "p-1",
  md: "p-[11px]",
  lg: "pb-[11px] pl-2 pr-[11px] pt-3",
  "2xl": "pb-3.5 pt-[15px] px-3.5",
  "3xl": "pb-[18px] pl-3.5 pt-[19px]",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]?.[color]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

export { Input };
