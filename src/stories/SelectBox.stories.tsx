import React from "react";
import { Meta, Story } from "@storybook/react";
import { SelectBox } from "components";

export default {
  title: "teamfolio/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox: Story<any> = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "round",
  size: "xs",
  variant: "dropdown0",
  className: "w-[300px]",
};
