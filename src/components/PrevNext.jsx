import { useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ValueContext } from "../App";

const PrevNext = () => {
  const { prevBtn, nextBtn, pageCount } = useContext(ValueContext);

  return (
    <section className="prev-next">
      <button className="icons" onClick={prevBtn} id="arrow-left">
        <FaArrowLeft />
      </button>

      <p className="font-semibold tracking-wider text-white">
        {pageCount}
        <span className="text-gray-500">/50</span>
      </p>

      <button className="icons" onClick={nextBtn} id="arrow-right">
        <FaArrowRight />
      </button>
    </section>
  );
};

export default PrevNext;
