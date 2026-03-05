import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, } from "./pages";
import Layout from "./layouts/layout";
import GemStonePage from "./pages/GemStonePage";
import GemstoneDetailPage from "./pages/GemstoneDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Layout (header and footer) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="gemstone" element={<GemStonePage />} />
          <Route path="gemstone-detail" element={<GemstoneDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
