/**
 * This file is used to declare types for server modals
 */

interface IRecipe {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  sourceName: string;
  pricePerServing: number;
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  analyzedInstructions: {
    name: string;
    steps: {
      number: number;
      step: string;
      ingredients: {
        id: number;
        name: string;
        localizedName: string;
        image: string;
      }[];
      equipment: {
        id: number;
        name: string;
        localizedName: string;
        image: string;
      }[];
      length?: {
        number: number;
        unit: string;
      };
    }[];
  }[];
}
