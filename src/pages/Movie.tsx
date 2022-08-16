import { useNavigate } from "react-router-dom";

const about_movie = [
  {
    text: "director",
    key: "director"
  },
  {
    text: "producer",
    key: "producer"
  },
  {
    text: "release date",
    key: "release_date"
  },
  {
    text: "running time",
    key: "running_time"
  },
  {
    text: "rate score",
    key: "rt_score"
  }
];

export default function Card() {
  const movie_data = JSON.parse(localStorage.getItem("movie_data") || "{}");
  const navigate = useNavigate();
  return (
    <>
      <h1>
        {movie_data["original_title"]} ({movie_data["title"]})
      </h1>
      <article>
        <img
          className="movie-illustration"
          src={movie_data["image"]}
          alt={movie_data["title"]}
        />
        <section>
          <h2>
            <ruby>
              {movie_data["original_title"]}
              <rp>(</rp>
              <rt>{movie_data["original_title_romanised"]}</rt>
              <rp>)</rp>
            </ruby>
          </h2>
          <p className="movie-description">{movie_data["description"]}</p>
          <ul>
            {about_movie.map((o) => (
              <li>
                {o.text}: <mark>{movie_data[o.key]}</mark>
              </li>
            ))}
          </ul>
          <nav>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              ← back
            </button>
          </nav>
        </section>
      </article>
    </>
  );
}
