import { ApiUrl } from "../../../config/api/apiUrl";

interface Response {
  data: any[];
  page: number;
  pageSize: number;
  totalPages: number;
  total: number;
}

class FiltersServices {
  getAllCountries = async (
    page: number = 1,
    pageSize: number = 10
  ): Promise<Response> => {
    try {
      const response = await ApiUrl.get("/all");

      const data = response.data;

      // Calculamos el indice de inicio y fin basado en la pagina y el tamaño de la pagina
      const startIndex = (page - 1) * pageSize;
      const endIndex = page * pageSize;

      // Dividimos los datos en la pagina solicitada
      const paginatedData = data.slice(startIndex, endIndex);

      return {
        data: paginatedData,
        total: data.length,
        page,
        pageSize,
        totalPages: Math.ceil(data.length / pageSize),
      };
    } catch (error) {
      console.log(error);
      return {
        data: [],
        total: 0,
        page: 0,
        pageSize: 0,
        totalPages: 0,
      };
    }
  };
}

export default new FiltersServices();
