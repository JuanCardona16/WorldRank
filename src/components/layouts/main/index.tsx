import styles from "./main.module.css";
import axios from 'axios'
import searchIcon from "../../../assets/Search.svg";
import { FilterRegion, SelectCustom, StatusFilters } from "../../shared";
import { useEffect, useState } from "react";
export const MianLayout = () => {
  const [sliceData, setSliceData] = useState([]); // Estado para los datos cortados
  const startIndex = 0; // Cambia este índice según tus necesidades
  const endIndex = 7; // Cambia este índice según cuántos elementos quieras

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        // Tomamos los datos desde el índice deseado
        const slicedData = response.data.slice(startIndex, endIndex);
        setSliceData(slicedData); // Guardamos los datos cortados
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

    data()
  }, [])

  function formatNumber(number) {
    return number.toLocaleString('en-US'); // Formato con comas según el estándar estadounidense
  }

  console.log(sliceData)

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h3>Found 234 countries</h3>
          <form action="">
            <label htmlFor="search">
              <img src={searchIcon} alt="Search icon" />
              <input
                type="search"
                id="search"
                name="search"
                placeholder="Search by name, Region, Subregion"
              />
            </label>
          </form>
        </div>
        <div className={styles.contentGrid}>
          <section>
            <form method="POST" className={styles.filtersContainer}>
              <SelectCustom />
              <FilterRegion />
              <StatusFilters />
            </form>
          </section>
          <section>
            <table>
              <thead>
                <tr>
                  <th>Flag</th>
                  <th>Name</th>
                  <th>Population</th>
                  <th>Area (km²)</th>
                  <th>Subregion</th>
                </tr>
              </thead>
              <tbody>
                {
                  sliceData.map((country: any) => (
                    <tr key={country.name.common}>
                      <td>
                        <img
                          src={country.flags.png}
                          alt={country.name.common}
                          width="20"
                          height="12"
                        />
                      </td>
                      <td>{country.name.common}</td>
                      <td>{formatNumber(country.population)}</td>
                      <td>{formatNumber(country.area)}</td>
                      <td>{country.region}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </main>
  );
};
