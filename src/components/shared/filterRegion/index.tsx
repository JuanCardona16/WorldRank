import styles from "./regionFilter.module.css";
import { Regions as listRegions } from "../../UI/FilterForm/interfaces";
import { useStore } from "../../../config";

export const FilterRegion: React.FC = () => {
  const { Regions, setRegions } = useStore();

  return (
    <div className={styles.filterRegion}>
      <h4>Region</h4>
      <div>
        <button
          type="button"
          style={{
            backgroundColor: Regions.includes(listRegions.AMERICA)
              ? "#6c727f"
              : "",
          }}
          onClick={() => setRegions(listRegions.AMERICA)}
        >
          Americas
        </button>
        <button
          type="button"
          style={{
            backgroundColor: Regions.includes(listRegions.ANTARCTIC)
              ? "#6c727f"
              : "",
          }}
          onClick={() => setRegions(listRegions.ANTARCTIC)}
        >
          Antarctic
        </button>
        <button
          type="button"
          style={{
            backgroundColor: Regions.includes(listRegions.AFRICA)
              ? "#6c727f"
              : "",
          }}
          onClick={() => setRegions(listRegions.AFRICA)}
        >
          Africa
        </button>
        <button
          type="button"
          style={{
            backgroundColor: Regions.includes(listRegions.ASIA)
              ? "#6c727f"
              : "",
          }}
          onClick={() => setRegions(listRegions.ASIA)}
        >
          Asia
        </button>
        <button
          type="button"
          style={{
            backgroundColor: Regions.includes(listRegions.EUROPE)
              ? "#6c727f"
              : "",
          }}
          onClick={() => setRegions(listRegions.EUROPE)}
        >
          Europe
        </button>
        <button
          type="button"
          style={{
            backgroundColor: Regions.includes(listRegions.OCEANIA)
              ? "#6c727f"
              : "",
          }}
          onClick={() => setRegions(listRegions.OCEANIA)}
        >
          Oceania
        </button>
      </div>
    </div>
  );
};
