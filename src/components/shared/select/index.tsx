import { useState } from "react";
import styles from "./select.module.css";
import arrowIcon from "../../../assets/Expand_down.svg";
import { ValueSelect } from "../../UI/FilterForm/interfaces";
import { useStore } from "../../../config";

export const SelectCustom: React.FC = () => {
  const { SortBy, setSortBy } = useStore()
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const handleSelectClick = () => {
    setIsExpand((prevState) => !prevState);
  };

  const handleOptionClick = (option: string) => {
    setSortBy(option);
    setIsExpand(false);
  };

  return (
    <div className={styles.filterSortBy}>
      <h4>Sort by</h4>
      <div>
        <button type="button" onClick={handleSelectClick}>
          <h4>{SortBy}</h4>
          <img src={arrowIcon} alt="Expand down icon" />
        </button>
        <ul
          className={
            isExpand
              ? `${styles.filterSortBy} ${styles.isExpanded}`
              : styles.filterSortBy
          }
        >
          <li>
            <button
              type="button"
              onClick={() => handleOptionClick(ValueSelect.Population)}
            >
              {ValueSelect.Population}
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleOptionClick(ValueSelect.Area)}
            >
              {ValueSelect.Area}
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() =>
                handleOptionClick(ValueSelect.NameAlphabeticalOrder)
              }
            >
              {ValueSelect.NameAlphabeticalOrder}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
