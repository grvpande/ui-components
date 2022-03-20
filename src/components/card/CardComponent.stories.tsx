import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardComponent from "./CardComponent";

export default {
  title: "Cards",
  component: CardComponent,
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent {...args}>
    <ol>
      <li>This is the card component.</li>
      <li>You can also add CardHeaderComponent and CardFooterComponent for content separation. </li>
    </ol>
  </CardComponent>
);

export const Cards = Template.bind({});
Cards.args = {};

