import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "components";

export default {
  title: "teamfolio/Input",
  component: Input,
};

export const SampleInput: Story<any> = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder6",
  variant: "OutlineDeeppurple200",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
