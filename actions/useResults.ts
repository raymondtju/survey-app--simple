import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useResults = (userId?: string) => {
  const url = `/results/api`;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useResults;
