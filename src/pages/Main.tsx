import { useEffect, useState } from "react";
import Card from "../components/Card";

const data_lenght = 22;

export default function Main() {
  const [movies, setMovies] = useState(new Array(data_lenght));
  const [theme, setTheme] = useState("light");

  const getApiData = async () => {
    const response = await fetch(
      "https://ghibliapi.herokuapp.com/films?limit=" + data_lenght
    ).then((response) => response.json());

    setMovies(response);
    localStorage.setItem("data", JSON.stringify(response));
    localStorage.setItem("timestamp", Date.now().toString());
  };

  useEffect(() => {
    getApiData();
    if (localStorage.getItem("data") === null) getApiData();
    else if (
      Date.now() - parseInt(localStorage.getItem("timestamp") || "0", 10) >
      80000
    )
      getApiData();
    else setMovies(JSON.parse(localStorage.getItem("data") || "[]"));

    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      setTheme("dark");
  }, []);

  return (
    <>
      <header>
        <h1>AniBucket</h1>
      </header>
      <main className={theme}>
        <nav>
          <ul className="nav-bar">
            <li>
              <a href="https://www.crunchyroll.com/videos/anime">
                &nbsp;&nbsp;anime&nbsp;&nbsp;
              </a>
            </li>
            <li>
              <a href="https://www.crunchyroll.com/comics/manga">
                &nbsp;&nbsp;manga&nbsp;&nbsp;
              </a>
            </li>
            <li>
              <a href="https://bitbucket.org/junkiezet/anibucket/src/master">
                &nbsp;&nbsp;bitbucket&nbsp;&nbsp;
              </a>
            </li>
            <li>
              <a href="https://ghibliapi.herokuapp.com">
                &nbsp;&nbsp;api&nbsp;&nbsp;
              </a>
            </li>
          </ul>
        </nav>
        <hr></hr>
        <h2>Top titles</h2>
        <section className="movie-container">
          {movies.map((e: any, i: any) => (
            <Card movie={e} />
          ))}
        </section>
        <hr></hr>
      </main>
      <footer>
        <p>Author: Kaze</p>
        <p>&#169; Copyright 2022. All Rights Reserved.</p>
      </footer>
    </>
  );
}
