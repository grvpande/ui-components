import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardComponent from "./CardComponent";

export default {
  title: "Cards",
  component: CardComponent,
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent {...args} />
);

export const Cards = Template.bind({});
Cards.args = {};

