import axios from "axios";
import { toast } from "sonner";
import { XCircleIcon } from "lucide-react";

/**
 * an axios instance which
 * - sets the base url to the spoonacular api
 * - sets the api key as a query parameter
 * - adds a response interceptor to show a toast message on error
 * if you want to opt out of those features, you can use axios directly.
 */

const apiURL = import.meta.env.VITE_SPOONACULAR_API_URL as string;
const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY as string;

if (!apiKey) {
  throw new Error("SPOONACULAR_API_KEY is not defined");
}
if (!apiURL) {
  throw new Error("SPOONACULAR_API_URL is not defined");
}

const axiosInstance = axios.create({
  params: { apiKey },
  baseURL: apiURL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    let message = "Something went wrong while sending a request";
    if (error instanceof Error) message = error.message;
    const toastId = toast("Error", {
      description: message,
      icon: <XCircleIcon className="w-4 h-4" />,
      action: {
        label: "Close",
        onClick: () => {
          toast.dismiss(toastId);
        },
      },
    });
    return Promise.reject(error);
  },
);

export default axiosInstance;
