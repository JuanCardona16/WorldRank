import { useCountries } from "../../../modules/filters/hooks";

const TableCountries = () => {
  const { countries, page, pageSize, totalPAges, totalElements } = useCountries();

  console.log(countries, page, pageSize, totalPAges, totalElements)

  return (
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
        {/* {allContries.isPending || allContries?.data?.length === 0 ? (
          <div>
            <p>No se encontraron resultados para tu busqueda</p>
          </div>
        ) : (
          allContries?.map((country: any) => (
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
        )} */}
      </tbody>
    </table>
  );
};

export default TableCountries;
