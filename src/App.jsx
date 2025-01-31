import { useState } from "react";
import Header from "./components/Header";
import { createContext } from "react";

export const ValueContext = createContext();

function App() {
  const [search, setSearch] = useState("");

  return (
    <section className="pattern">
      <div className="px-5">
        <ValueContext.Provider value={{ search, setSearch }}>
          <Header />
        </ValueContext.Provider>
      </div>
    </section>
  );
}

export default App;
