import { NavLink } from "react-router-dom";
import styled from "styled-components";


const StyledNavLink = styled(NavLink)`
    @media screen and (min-width:500px){    
        font-size: larger;
        font-weight: 400;
        margin: 0 10px 0 10px;
    }
    margin: 0 0 0 10px;
    font-size: large;
    font-weight: 300;
    color: ${props => props.theme.palette.topBarColor};
    &.active{
        font-weight: bolder;
        filter: brightness(${props => props.theme.palette.topBarColor === "#e31766" ? "1.3" : "0.6"});

    }
    &:hover{
        filter: brightness(${props => props.theme.palette.topBarColor === "#e31766" ? "1.3" : "0.6"});
    }
`
const StyledNavContainer = styled.div`
    margin-left: 50px;
`


export default function NavBar() {
    return (
        <StyledNavContainer>
            <StyledNavLink to={"/portfolio/home"} >Home</StyledNavLink>
            <StyledNavLink to={"/portfolio/projects"}>Portfolio</StyledNavLink>
            <StyledNavLink to={"/portfolio/profile"}>About me</StyledNavLink>
        </StyledNavContainer>

    )
}