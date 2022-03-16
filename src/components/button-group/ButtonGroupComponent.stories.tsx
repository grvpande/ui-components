// Button.stories.ts|tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonGroupComponent from "./ButtonGroupComponent";

export default {
  title: "Buttons",
  component: ButtonGroupComponent,
  argTypes: {
    variant: { control: { type: "select", options: ["primary", "secondary"] } },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof ButtonGroupComponent>;

const Template: ComponentStory<typeof ButtonGroupComponent> = (args) => (
  <ButtonGroupComponent {...args} />
);

export const ButtonGroup = Template.bind({});
ButtonGroup.args = {};
