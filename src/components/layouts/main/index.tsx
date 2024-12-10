import styles from "./main.module.css";
import { Filters } from "../../UI";
import SearchInput from "../../shared/searchInput";
import TableCountries from "../../shared/table";
export const MianLayout = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h3>
            Found{" "}
            {/* {allContries?.data?.length === undefined
              ? 0
              : allContries?.data?.length}{" "} */}
            countries
          </h3>
          <SearchInput />
        </div>
        <div className={styles.contentGrid}>
          <section>
            <Filters />
          </section>
          <section>
            <TableCountries />
            {/* <table>
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
                {sliceData.map((country: any) => (
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
                ))} 
              </tbody>
            </table> */}
          </section>
        </div>
      </div>
    </main>
  );
};
