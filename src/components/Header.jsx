import { useContext } from "react";
import heroImg from "../assets/hero-img.png";
import Search from "./Search";
import { ValueContext } from "../App";

const Header = () => {
  const { errorMessage } = useContext(ValueContext);

  return (
    <header>
      <img src={heroImg} alt="Image of the hero image" />
      <h1 className="text-5xl text-center font-bold leading-tight mb-6 max-w-lg">
        Discover <span className="text-gradient">Movies</span> You&apos;ll Love
        with Ease
      </h1>

      <Search />
      <p className="text-red-800 mt-4 font-bold">{errorMessage}</p>
    </header>
  );
};

export default Header;
