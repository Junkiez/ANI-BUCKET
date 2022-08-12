import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function App() {
    const [theme, setTheme] = useState("light");
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/");
    }, 3000);

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches)
            setTheme("dark");
    }, []);

    return <article className={theme}><h1>404</h1></article>;
}
