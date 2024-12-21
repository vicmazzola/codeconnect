import "./App.css";
import Filter from "./components/Filter";
import Ordination from "./components/Ordination";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <SearchBar />
        <Filter />
        <Ordination />
      </div>
    </div>
  );
}

export default App;
