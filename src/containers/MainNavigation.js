import React, { useReducer } from "react";
import ThemeContext from "../context/ThemeContext";
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";

// Components
import CanvasContainer from "../components/Canvas";
import MenuHeader from "./MenuHeader";

const AppWrapper = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    background-color: royalblue;
`

const MainNavigation = () => {

    const [theme, dispatchTheme] = useReducer(ThemeContext, null);

    return (
        <ThemeContext.Provider value={{ theme, dispatchTheme }}>
            <AppWrapper>
                <GlobalStyles />
                <MenuHeader theme={ theme } dispatchTheme={ dispatchTheme }/>
                {/* <CanvasContainer theme={ theme } /> */}
            </AppWrapper>
        </ThemeContext.Provider>
    )
}

export default MainNavigation;