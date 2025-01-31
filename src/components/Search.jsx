import { useContext } from "react";
import { ValueContext } from "../App";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  const { search, setSearch } = useContext(ValueContext);

  return (
    <section className="search">
      <BiSearchAlt size={20} />
      <input
        type="text"
        placeholder="Search through 300+ movies online"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </section>
  );
};

export default Search;
