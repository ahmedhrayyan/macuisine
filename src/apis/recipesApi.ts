import axiosInstance from "@/lib/axiosInstance.tsx";
import { AxiosRequestConfig } from "axios";
import merge from "lodash/merge";

function complexSearch(config?: AxiosRequestConfig) {
  return axiosInstance.get<ISearchResult<IRecipe>>(
    "/recipes/complexSearch",
    merge(
      {
        params: {
          instructionsRequired: true,
          addRecipeInformation: true,
        },
      },
      config,
    ),
  );
}

function getRecipeInformation(id: number, config?: AxiosRequestConfig) {
  return axiosInstance.get<IRecipe>(`/recipes/${id}/information`, config);
}

const recipesApi = {
  complexSearch,
  getRecipeInformation,
};

export default recipesApi;
