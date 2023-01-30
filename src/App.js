import { Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import Nav from "./components/Nav";
import Symbol from "./components/Symbol";
import Homepage from "./Homepage";
import StocksPage from "./StocksPage";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stocks" element={<StocksPage data={data} />} />
        <Route path="/stocks/:symbol" element={<Symbol data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
