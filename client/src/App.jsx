import Headers from "./components/Headers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starting from "./pages/Starting";
import PageNotFound from "./pages/pageNotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-started" element={<Starting />} />
            <Route path="/about" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
