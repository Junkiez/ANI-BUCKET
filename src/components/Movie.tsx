import { useNavigate } from "react-router-dom";

export default function Card(props: any) {
  const movie_data = JSON.parse(localStorage.getItem("movie_data") || "{}");
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <div className="movie-card" key={props["id"]}>
        <img src={movie_data?.image} alt={movie_data["image"]} />
        <span className="short-description">
          {movie_data["original_title"]}
        </span>
      </div>
    </>
  );
}
