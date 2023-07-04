import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header(){

    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <header>
        <button className={`${theme}-theme switch-btn`} onClick={toggleTheme}>{theme}</button>
        </header>
    )
}