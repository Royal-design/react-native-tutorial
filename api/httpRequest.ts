import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

export type ApiResponse<T = any> = {
  success: boolean;
  message: string;
  data?: T;
};

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  console.log(
    "➡️ Request:",
    config.method?.toUpperCase(),
    config.url,
    config.data
  );
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log("✅ Response:", response.config.url, response.data);
    return response;
  },
  (error) => {
    console.log(
      "❌ Error:",
      error.config?.url,
      error.response?.data || error.message
    );
    return Promise.reject(error);
  }
);

// --- Generic request wrapper ---
export const httpRequest = async <T = any>(
  url: string,
  method: AxiosRequestConfig["method"] = "get",
  body: any = null,
  others: AxiosRequestConfig = {}
): Promise<ApiResponse<T>> => {
  const config: AxiosRequestConfig = {
    url,
    method,
    data: body,
    ...others,
  };

  // Handle FormData automatically
  if (body instanceof FormData) {
    if (config.headers) delete config.headers["Content-Type"];
    else config.headers = {};
  }

  try {
    const response = await api(config);
    return {
      success: true,
      message: "Request successful",
      data: response.data as T,
    };
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      const errData = axiosError.response.data as any;
      throw {
        success: false,
        message: errData?.message || "Something went wrong",
        data: errData,
      } as ApiResponse;
    } else if (axiosError.request) {
      throw {
        success: false,
        message: "Network error. Please try again.",
      } as ApiResponse;
    } else {
      throw {
        success: false,
        message: axiosError.message,
      } as ApiResponse;
    }
  }
};
