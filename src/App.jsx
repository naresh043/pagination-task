import PaginationTask from "./Components/pagination";
import "./App.css";
import { useState } from "react";
import sunSvg from "./assets/sun.svg";
import moonSvg from "./assets/moon.svg";

function App() {
  const [noRecords, setNoRecords] = useState(10);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <>
    <h1>Pagination</h1>
      <div className={darkMode ? "darkmode-active" : ""}>
        <PaginationTask noRecords={noRecords} setNoRecords={setNoRecords}>
          <button onClick={toggleDarkMode} className="theme-container">
            {darkMode ? (
              <span>
                Light Mode <img src={sunSvg} alt="" />
              </span>
            ) : (
              <span className="moon-span">
                Dark Mode
                <img src={moonSvg} alt="" />
              </span>
            )}
          </button>
        </PaginationTask>
      </div>
    </>
  );
}

export default App;
