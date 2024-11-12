import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobPage from "./pages/JobPage";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/add-job" element={<JobPage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
