import React, { createContext, useState } from "react";

const ThemeContext = createContext()


 function ThemeContextProvider({children}){

    const [theme, setTheme] = useState("coloured")

    function toggleTheme(){
        setTheme(prevTheme => prevTheme === "coloured" ? "dark" : "coloured")
    }

    
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}