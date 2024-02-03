import Page from "@/components/Page";
import Recipe from "@/components/Recipe";
import { useEffect, useState, useTransition } from "react";
import { useSearchParams } from "react-router-dom";
import recipesApi from "@/apis/recipesApi.ts";
import { AxiosResponse } from "axios";
import Pagination from "@/components/Pagination";
import range from "lodash/range";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import { useDebounce } from "@uidotdev/usehooks";
import { FormItem } from "@/components/ui/form.tsx";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input.tsx";
import SidebarToggle from "@/components/Sidebar/SidebarToggle.tsx";

export function Component() {
  const [, startTransition] = useTransition();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  // debounce the query to avoid making too many requests
  const debouncedQuery = useDebounce(query, 500);

  const currentPage = parseInt(searchParams.get("page") || "1");

  const [data, setData] = useState<AxiosResponse<ISearchResult<IRecipe>>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData(undefined);
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
    <Page documentTitle="Recipes" className="container px-8 py-12 lg:px-12 xl:px-16">
      <header className="flex gap-4 mb-14">
        <SidebarToggle />
        <FormItem className="flex-grow">
          <div className="relative">
            <SearchIcon className="w-5 h-5 absolute z-10 top-1/2 left-5 transform -translate-y-1/2 text-primary" />
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <Input
              id="search"
              value={query}
              onChange={(e) => {
                startTransition(() => {
                  setSearchParams({
                    query: e.target.value,
                  });
                });
              }}
              type="search"
              placeholder="What do you want to cock today ?"
              className="h-14 text-base ps-14 border-transparent shadow-lg"
            />
          </div>
        </FormItem>
      </header>
      <main>
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
          {data?.data.results.map((recipe) => <Recipe key={recipe.id} item={recipe} />)}
          {data?.data.totalResults === 0 && <p className="text-center text-lg font-medium">No recipes found</p>}
        </div>
        {!!data?.data.totalResults && (
          <div className="mt-16">
            <Pagination numOfItems={data.data.totalResults} />
          </div>
        )}
      </main>
    </Page>
  );
}

Component.displayName = "Recipes";
