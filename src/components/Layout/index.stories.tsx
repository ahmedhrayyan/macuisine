import { Meta, StoryObj } from "@storybook/react";
import Layout from "./index";

const meta: Meta<typeof Layout> = {
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;
export const Default: Story = {};
