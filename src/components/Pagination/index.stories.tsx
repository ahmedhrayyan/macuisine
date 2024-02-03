import { Meta, StoryObj } from "@storybook/react";
import Pagination from "./index";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;
export const Default: Story = {
  args: {
    numOfItems: 100,
  },
};
