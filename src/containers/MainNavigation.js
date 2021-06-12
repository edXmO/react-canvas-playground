import React, { useReducer } from "react";
import ThemeContext from "../context/ThemeContext";

const MainNavigation = () => {

    const [theme, dispatchTheme] = useReducer(ThemeContext, null);


    return (
        <ThemeContext.Provider value={{ theme, dispatchTheme }}>
            <div>App</div>
        </ThemeContext.Provider>
    )
}

export default MainNavigation;