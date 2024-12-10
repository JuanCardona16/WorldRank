import styles from "./filters.module.css";
import { FilterRegion, SelectCustom, StatusFilters } from "../../shared";
import { useStore } from "../../../config";
import { useEffect } from "react";

export interface FormValues {
  SortBy: string;
  Regions: string[];
  Status: {
    MembersOfTheUnitedNations: boolean;
    Independent: boolean;
  };
}

export const Filters: React.FC = (): JSX.Element => {
  const { SortBy } = useStore()

  useEffect(() => {
    // Update form data based on SortBy state
    console.log("Cambio en el ordenamiento...")
  }, [SortBy]);

  return (
    <form method="POST" className={styles.filtersContainer}>
      <SelectCustom />
      <FilterRegion />
      <StatusFilters />
    </form>
  );
};
