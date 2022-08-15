import "./styles/main.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Movie from "./pages/Movie";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
