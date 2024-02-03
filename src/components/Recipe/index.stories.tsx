import { Meta, StoryObj } from "@storybook/react";
import Recipe from "./index";

const meta: Meta<typeof Recipe> = {
  component: Recipe,
  args: {
    item: {
      id: 1,
      title: "Cannellini Bean and Asparagus Salad with Mushrooms",
      image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
      readyInMinutes: 45,
      dishTypes: ["side dish", "lunch", "main course", "salad", "main dish", "dinner"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Recipe>;
export const Default: Story = {};
