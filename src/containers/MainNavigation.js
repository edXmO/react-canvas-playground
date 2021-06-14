import React, { useReducer } from "react";
import ThemeContext from "../context/ThemeContext";
import CanvasContainer from "../components/Canvas";
import styled from "styled-components";

const AppWrapper = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    background-color: royalblue;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MainNavigation = () => {

    const [theme, dispatchTheme] = useReducer(ThemeContext, null);


    return (
        <ThemeContext.Provider value={{ theme, dispatchTheme }}>
            <AppWrapper>
                <CanvasContainer />
            </AppWrapper>
        </ThemeContext.Provider>
    )
}

export default MainNavigation;