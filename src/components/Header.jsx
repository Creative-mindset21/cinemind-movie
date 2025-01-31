import heroImg from "../assets/hero-img.png";
import Search from "./Search";

const Header = () => {
  return (
    <header className="flex flex-col items-center text-white">
      <img src={heroImg} alt="Image of the hero image" />
      <h1 className="text-5xl text-center font-bold leading-tight mb-6 max-w-lg">
        Discover <span className="text-gradient">Movies</span> You&apos;ll Love
        with Ease
      </h1>

      <Search />
    </header>
  );
};

export default Header;
