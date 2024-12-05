import { useState } from "react";
import styles from "./regionFilter.module.css";

enum Regions {
  AMERICA = "Americas",
  ANTARCTIC = "Antarctic",
  AFRICA = "Africa",
  ASIA = "Asia",
  EUROPE = "Europe",
  OCEANIA = "Oceania",
}

export const FilterRegion = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const handleClick = (value: string) => {

    if (filters.includes(value)) {
      setFilters(filters.filter((filter) => filter !== value));
    } else {
      setFilters([...filters, value]);
    }

  };

  return (
    <div className={styles.filterRegion}>
      <h4>Region</h4>
      <div>
        <button
          type="button"
          style={{
            backgroundColor: filters.includes(Regions.AMERICA) ? "#6c727f" : "",
          }}
          onClick={() => handleClick(Regions.AMERICA)}
        >
          Americas
        </button>
        <button
          type="button"
          style={{
            backgroundColor: filters.includes(Regions.ANTARCTIC) ? "#6c727f" : "",
          }}
          onClick={() => handleClick(Regions.ANTARCTIC)}
        >
          Antarctic
        </button>
        <button
          type="button"
          style={{
            backgroundColor: filters.includes(Regions.AFRICA) ? "#6c727f" : "",
          }}
          onClick={() => handleClick(Regions.AFRICA)}
        >
          Africa
        </button>
        <button
          type="button"
          style={{
            backgroundColor: filters.includes(Regions.ASIA) ? "#6c727f" : "",
          }}
          onClick={() => handleClick(Regions.ASIA)}
        >
          Asia
        </button>
        <button
          type="button"
          style={{
            backgroundColor: filters.includes(Regions.EUROPE) ? "#6c727f" : "",
          }}
          onClick={() => handleClick(Regions.EUROPE)}
        >
          Europe
        </button>
        <button
          type="button"
          style={{
            backgroundColor: filters.includes(Regions.OCEANIA) ? "#6c727f" : "",
          }}
          onClick={() => handleClick(Regions.OCEANIA)}
        >
          Oceania
        </button>
      </div>
    </div>
  );
};
