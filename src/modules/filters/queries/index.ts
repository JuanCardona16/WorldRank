import { useMutation } from "@tanstack/react-query";
import FiltersServices from "../services";

export const useGetAllContries = () => {
  const {
    mutateAsync: getCountries,
    isPending,
    isError,
  } = useMutation({
    mutationKey: ["getAllContries"],
    mutationFn: async ({
      page,
      pageSize,
    }: {
      page: number;
      pageSize: number;
    }) => {
      return FiltersServices.getAllCountries(page, pageSize);
    },
  });

  return {
    getCountries,
    isPending,
    isError,
  };
};
