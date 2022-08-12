import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 2000);

  return <h1>404</h1>;
}
