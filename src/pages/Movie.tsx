import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Card(props: any) {
    const movie_data = JSON.parse(localStorage.getItem("movie_data") || "{}");
    const navigate = useNavigate();
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches)
            setTheme("dark");
    }, []);
    return (
        <article className={theme}>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                Home
            </button>
            <div className="movie-card" key={props["id"]}>
                <img src={movie_data?.image} alt={movie_data["image"]}/>
                <span className="short-description">
          {movie_data["original_title"]}
        </span>
            </div>
        </article>
    );
}
