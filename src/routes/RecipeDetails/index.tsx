import { Navigate, useNavigate, useParams } from "react-router-dom";
import Page from "@/components/Page";
import { useEffect, useState } from "react";
import recipesApi from "@/apis/recipesApi.ts";
import { AxiosError, AxiosResponse } from "axios";
import ProgressBar from "@/components/ProgressBar";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import RecipeSteps from "@/components/RecipeSteps";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import SidebarToggle from "@/components/Sidebar/SidebarToggle.tsx";

export function Component() {
  const { id } = useParams();
  const parsedId = id ? parseInt(id) : null;

  const [recipe, setRecipe] = useState<AxiosResponse<IRecipe> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (parsedId === null || isNaN(parsedId)) return;
    setRecipe(null);
    setIsLoading(true);

    void recipesApi
      .getRecipeInformation(parsedId)
      .then((response) => {
        setRecipe(response);
      })
      .catch((error) => {
        if (error instanceof AxiosError && error.response?.status === 404) {
          navigate("/404", { replace: true });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [parsedId, navigate]);

  if (parsedId === null || isNaN(parsedId)) return <Navigate to="/404" replace />;

  return (
    <Page documentTitle={`Recipe ${recipe?.data.title || parsedId}`} className="container px-8 py-14 lg:px-12 xl:px-16">
      {isLoading && <ProgressBar />}
      {recipe && (
        <div className="container max-w-screen-lg">
          <header className="flex items-center gap-6 mb-10">
            <SidebarToggle className="w-11 h-11" />
            <Button variant="ghost" className="bg-accent hover:bg-accent/80" onClick={() => navigate(-1)}>
              <ArrowLeftIcon className="w-5 h-5 me-4" />
              <span>Back to recipes</span>
            </Button>
          </header>
          <main>
            <h2 className="text-4xl font-semibold mb-3">{recipe.data.title}</h2>
            <p className="text-foreground/60 mb-8">
              {recipe.data.readyInMinutes} minutes | {recipe.data.servings} servings | {recipe.data.healthScore}% health
              score
            </p>
            <AspectRatio ratio={7 / 3} className="mb-10">
              <img src={recipe.data.image} alt={recipe.data.title} className="object-cover w-full h-full rounded-md" />
            </AspectRatio>
            <h3 className="text-3xl font-semibold mb-3">Summary</h3>
            <p className="mb-8">{recipe.data.summary.replace(/<[^>]*>/g, "")}</p>
            <h3 className="text-3xl font-semibold mb-3">Instructions</h3>
            {recipe.data.analyzedInstructions.map((instruction, i) => (
              <div key={i}>
                {instruction.name && <h4>{instruction.name}</h4>}
                <RecipeSteps steps={instruction.steps} />
              </div>
            ))}
          </main>
        </div>
      )}
    </Page>
  );
}
