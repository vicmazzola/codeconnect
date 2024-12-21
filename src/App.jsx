import "./App.css";
import Filter from "./components/Filter";
import Ordination from "./components/Ordination";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/sidebar";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <SearchBar />
        <Filter />
        <Ordination />
        <Card />
      </div>
    </div>
  );
}

export default App;
