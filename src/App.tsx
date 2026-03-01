import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, } from "./pages";
import Layout from "./layouts/layout";
import GemstonePage from "./pages/GemStonePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Layout (header and footer) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="gemstone" element={<GemstonePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
