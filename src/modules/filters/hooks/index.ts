import { useEffect, useState } from "react";
import { useGetAllContries } from "../queries";
import { useStore } from "../../../config";

interface StateProps {
  countries: any[];
  page: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
}

export const useCountries = () => {
  const { setTotalCountries } = useStore();
  const [pagination, setPagination] = useState<StateProps>({
    countries: [],
    page: 1,
    pageSize: 10,
    totalPages: 0,
    totalElements: 0,
  });

  const { getCountries, isError, isPending } = useGetAllContries();

  const fetchCountries = async () => {
    try {
      const result = await getCountries({
        page: pagination.page,
        pageSize: pagination.pageSize,
      });
      setTotalCountries(result.total);
      setPagination((prev) => ({
        ...prev,
        countries: result?.data,
        page: result?.page,
        totalPages: result?.totalPages,
        pageSize: result?.pageSize,
        totalElements: result?.total,
      }));
    } catch (error) {
      console.log("Error fetching countries: ", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [pagination.page, pagination.pageSize]);

  return {
    page: pagination.page,
    totalPAges: pagination.totalPages,
    pageSize: pagination.pageSize,
    countries: pagination.countries,
    totalElements: pagination.totalElements,
    isPending,
    isError,
  };
};
