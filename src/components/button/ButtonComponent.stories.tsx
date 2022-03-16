// Button.stories.ts|tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonComponent from "./ButtonComponent";

export default {
  title: "Buttons",
  component: ButtonComponent,
  argTypes: {
    variant: { control: { type: "select", options: ["primary", "secondary"] } },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args}>Button</ButtonComponent>
);

export const Button = Template.bind({});
Button.args = {
  variant: "primary",
};
