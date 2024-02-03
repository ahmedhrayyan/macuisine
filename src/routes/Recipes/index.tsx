import Page from "@/components/Page";
import Recipe from "@/components/Recipe";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import recipesApi from "@/apis/recipesApi.ts";
import { AxiosResponse } from "axios";
import Pagination from "@/components/Pagination";
import range from "lodash/range";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import useLayout from "@/hooks/useLayout.ts";
import { useDebounce } from "@uidotdev/usehooks";

export function Component() {
  const { query } = useLayout();
  const debouncedQuery = useDebounce(query, 500);
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");
  const [data, setData] = useState<AxiosResponse<ISearchResult<IRecipe>>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    void recipesApi
      .complexSearch({ params: { query: debouncedQuery, offset: (currentPage - 1) * 10 } })
      .then((response) => {
        setData(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage, debouncedQuery]);

  return (
    <Page documentTitle="Recipes">
      <h1 className="mb-8 font-medium text-4xl">
        {debouncedQuery ? `Search results for "${debouncedQuery}"` : "Popular Recipes"}
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-10">
        {isLoading &&
          range(3).map((i) => (
            <div key={i} className="relative px-4 pt-4 pb-12 bg-white shadow-lg rounded-md">
              <AspectRatio ratio={7 / 3} className="mb-6">
                <Skeleton className="w-full h-full rounded-md" />
              </AspectRatio>
              <div className="flex flex-col gap-2.5">
                <Skeleton className="rounded-[4px] w-4/5 h-4" />
                <Skeleton className="rounded-[4px] w-1/2 h-4" />
                <Skeleton className="rounded-[4px] w-1/4 h-4" />
              </div>
            </div>
          ))}
        {!isLoading && data?.data.results.map((recipe) => <Recipe key={recipe.id} item={recipe} />)}
        {data?.data.totalResults === 0 && (
          <div className="text-center">
            <p>No recipes found</p>
          </div>
        )}
      </div>
      {data && (
        <div className="mt-16">
          <Pagination numOfItems={data.data.totalResults} />
        </div>
      )}
    </Page>
  );
}

Component.displayName = "Recipes";
