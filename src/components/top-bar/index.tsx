import styled, { ThemeContext } from "styled-components";
import { useState,useContext } from "react";
import { TopBarContainer } from "../../elements/containers";
import NavBar from "../../elements/nav-bar";
import {ThemeSwitcher, StyledThemeSwitcherContainer} from "../theme-switcher";
import { StyledSettings } from "../../elements/icons";

function TopBar(){
    const [toggleSettings, setToggleSettings] = useState(false)

    function handleToggleSettings(){
        setToggleSettings(!toggleSettings)
    }

    const themeContext = useContext(ThemeContext)
    return(
        <TopBarContainer>
            <NavBar/>
            <StyledThemeSwitcherContainer>
                {toggleSettings &&(
                    <ThemeSwitcher
                        handleThemeSwitch={themeContext.handleThemeSwitch}
                        isDark={themeContext.isDark}
                    />
                    )    
                }
                <StyledSettings size='25' onClick={handleToggleSettings}/>
            </StyledThemeSwitcherContainer>
        </TopBarContainer>
    )
}

export {TopBar}