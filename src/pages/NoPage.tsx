import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(4);
  let interval = setInterval(() => {
    if (timer !== 0) {
      setTimer(timer - 1);
    } else {
      clearInterval(interval);
      navigate("/");
    }
  }, 1000);

  return (
    <>
      <h1>404</h1>
      <h2>{timer}</h2>
    </>
  );
}
