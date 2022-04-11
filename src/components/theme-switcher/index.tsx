import styled from "styled-components";
import { StyledSun, StyledMoon } from "../../elements/icons";


interface ThemeSwitcherProps {
    isDark: boolean
    handleThemeSwitch(): any
}

const StyledThemeSwitcherContainer = styled.div`
    justify-self:right;
    margin-right: 20px;
`


const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ isDark, handleThemeSwitch }) => {
    return (
        isDark ? <StyledSun onClick={handleThemeSwitch} size='25' />
            : <StyledMoon onClick={handleThemeSwitch} size='25' />
    )
}


export { ThemeSwitcher, StyledThemeSwitcherContainer }

