import styled from "styled-components";

const ComponentContainer = styled.div`
    grid-area: main;
    display: grid;
    margin: 20px;
	background-color: inherit;
`

const FooterContainer = styled.div`
    grid-area: footer;
	font-size: x-small;
	font-weight: 550;
	text-align: center;
	margin-top: 10px;
	padding: 10px;
	width: 100%;
	background-color: inherit;

	p {
		color: ${props => props.theme.palette.secondaryColor};
	}
	/* position: fixed; */
	bottom: 0;
`

const TopBarContainer = styled.div`
    grid-area: top-bar;
	display: flex;
	align-items: center;
	background-color: ${props => props.theme.palette.topBarBackground};
	color: ${props => props.theme.palette.topBarColor};
	justify-content: space-between;
	/* box-shadow: 0px 0.5px 3px ${props => props.theme.palette.boxShadowColor}; */
`

const MainContainer = styled.div`
    display: grid;
	background-color: ${props => props.theme.palette.backgroundColor};
	color: ${props => props.theme.palette.color};
	grid-gap: 10px;
	grid-template-columns: 1fr;
	grid-template-areas: "top-bar" "main" "footer";
	grid-template-rows: 80px 88vh 40px;
	::-webkit-scrollbar {
		/*-webkit browsers*/
		display: none;
	}
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`


export { MainContainer, ComponentContainer, FooterContainer, TopBarContainer }