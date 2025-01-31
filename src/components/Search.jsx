import { useContext } from "react";
import { ValueContext } from "../App";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  const { search, setSearch } = useContext(ValueContext);

  return (
    <section className="flex items-center gap-4 bg-[#0F0D23] px-4 py-3 w-full max-w-xl  rounded-lg">
      <BiSearchAlt className="fill-[#AB8BFF]" size={20} />
      <input
        type="text"
        placeholder="Search through 300+ movies online"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full outline-none border-none placeholder:text-[#a885db] bg-transparent text-gray-200"
      />
    </section>
  );
};

export default Search;
