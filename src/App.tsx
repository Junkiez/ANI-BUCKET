import "./styles/main.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Movie from "./components/Movie";
import NoPage from "./components/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
