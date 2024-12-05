import { useState } from "react";
import styles from "./select.module.css";
import arrowIcon from '../../../assets/Expand_down.svg'

enum ValueSelect {
  Population = "Population",
  Area = "Area (Km2)",
  GDPPerCapita = "GDP per capita",
  LifeExpectancy = "Life Expectancy",
  Currency = "Currency",
}

export const SelectCustom = () => {
  const [value, setValue] = useState<string>(ValueSelect.Population);
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const handleSelectClick = () => {
    setIsExpand((prevState) => !prevState);
  };

  const handleOptionClick = (option: string) => {
    setValue(option);
    setIsExpand(false);
  };

  return (
    <div className={styles.filterSortBy}>
      <h4>Sort by</h4>
      <div>
        <button type="button" onClick={handleSelectClick}>
          <h4>{value}</h4>
          <img src={arrowIcon} alt="Exoand down icon" />
        </button>
        <ul className={isExpand ? `${styles.filterSortBy} ${styles.isExpanded}` : styles.filterSortBy}>
          <li><button type="button" onClick={() => handleOptionClick(ValueSelect.Area)} >{ValueSelect.Area}</button></li>
          <li><button type="button" onClick={() => handleOptionClick(ValueSelect.GDPPerCapita)} >{ValueSelect.GDPPerCapita}</button></li>
          <li><button type="button" onClick={() => handleOptionClick(ValueSelect.LifeExpectancy)} >{ValueSelect.LifeExpectancy}</button></li>
          <li><button type="button" onClick={() => handleOptionClick(ValueSelect.Currency)} >{ValueSelect.Currency}</button></li>
        </ul>
      </div>
    </div>
  );
};
