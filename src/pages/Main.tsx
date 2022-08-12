import {useEffect, useState} from "react";
import Card from "../components/Card";

const links = [
    {
        text: "anime",
        url: "https://www.crunchyroll.com/videos/anime",
    },
    {
        text: "manga",
        url: "https://www.crunchyroll.com/comics/manga",
    },
    {
        text: "bitbucket",
        url: "https://bitbucket.org/junkiezet/anibucket/src/master",
    },
    {
        text: "api",
        url: "https://ghibliapi.herokuapp.com",
    },
]
const data_length = 22;

export default function App() {
    const [titles, setTitles] = useState(new Array(data_length));
    const [theme, setTheme] = useState("light");

    const getApiData = async () => {
        const response = await fetch(
            "https://ghibliapi.herokuapp.com/films?limit=" + data_length
        ).then((response) => response.json());

        setTitles(response);
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
        else setTitles(JSON.parse(localStorage.getItem("data") || "[]"));

        if (window.matchMedia("(prefers-color-scheme: dark)").matches)
            setTheme("dark");
    }, []);

    return (
        <>
            <header>
                <h1>AniBucket</h1>
                <nav>
                    <ul>
                        {links.map((e) => (
                            <li>
                                <a href={e.url}>&nbsp;&nbsp;{e.text}&nbsp;&nbsp;</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <hr></hr>
            <main className={theme}>
                <h2>Top titles</h2>
                <article className="movie-container">
                    {titles.map((e) => (
                        <Card movie={e}/>
                    ))}
                </article>
            </main>
            <hr></hr>
            <footer>
                <p>Author: Kaze</p>
                <p>&#169; Copyright 2022. All Rights Reserved.</p>
            </footer>
        </>
    );
}
