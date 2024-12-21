import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Ordination from "./components/Ordination";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/sidebar";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((answer) => answer.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="container">
      <Sidebar />
      <div>
        <SearchBar />
        <Filter />
        <Ordination />
        <ul className="cards-list">
          {data
            ? data.map((item, index) => (
                <li key={index}>
                  <Card />
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
