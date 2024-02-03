import Page from "@/components/Page";
import Recipe from "@/components/Recipe";

const recipes = [
  {
    id: 1,
    title: "Cannellini Bean and Asparagus Salad with Mushrooms",
    image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
    readyInMinutes: 45,
    dishTypes: ["side dish", "lunch", "main course", "salad", "main dish", "dinner"],
  },
  {
    id: 2,
    title: "Cannellini Bean and Asparagus Salad with Mushrooms",
    image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
    readyInMinutes: 45,
    dishTypes: ["side dish", "lunch", "main course", "salad", "main dish", "dinner"],
  },
  {
    id: 3,
    title: "Cannellini Bean and Asparagus Salad with Mushrooms",
    image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
    readyInMinutes: 45,
    dishTypes: ["side dish", "lunch", "main course", "salad", "main dish", "dinner"],
  },
];

export function Component() {
  return (
    <Page documentTitle="Recipes">
      <h1>Popular Recipes</h1>
      <div className="grid grid-cols-3">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} item={recipe} />
        ))}
      </div>
    </Page>
  );
}

Component.displayName = "Recipes";
