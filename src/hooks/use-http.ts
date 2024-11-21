import { useCallback, useState } from "react";
import axios from "axios";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const requestData = useCallback(
    async (
      endpoint: string,
      method: string = "GET",
      data: object | null = null
    ) => {
      setIsLoading(true);
      let response;
      try {
        response = await axios({
          method: method,
          data: data,
          url: import.meta.env.VITE_BACKEND_BASE_URL + endpoint,
        });
        return { data: response, isError: false, message: "", error: null };
      } catch (error) {
        const message =
          error.response?.status === 500
            ? "Internal Server Error"
            : "Something went wrong. Please try again later";
        const err = {
          isError: true,
          error,
          message,
        };
        return err;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    isLoading,
    requestData,
  };
};

export default useHttp;
