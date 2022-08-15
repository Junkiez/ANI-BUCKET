import { useNavigate } from "react-router-dom";

export default function Card(props: any) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          localStorage.setItem("movie_data", JSON.stringify(props.movie));
          navigate("/movie");
        }}
        className="movie-card"
        key={props["id"]}
      >
        <img src={props.movie["image"]} alt={props.movie["title"]} />
      </div>
    </>
  );
}
