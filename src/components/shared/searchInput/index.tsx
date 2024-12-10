import { FormEvent } from "react";
import searchIcon from "../../../assets/Search.svg";
import { useStore } from "../../../config";

const SearchInput: React.FC = (): JSX.Element => {
  const { setSearch } = useStore();

  const handleSearchTerm = (event: FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <form>
      <label htmlFor="search">
        <img src={searchIcon} alt="Search icon" />
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search by name, Region, Subregion"
          autoComplete="off"
          onChange={handleSearchTerm}
        />
      </label>
    </form>
  );
};

export default SearchInput;
