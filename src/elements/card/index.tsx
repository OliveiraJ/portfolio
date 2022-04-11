import styled from "styled-components";
import { Repos } from "../../components/portfolio";

const CardStyled = styled.div`
	margin: 5px 5px 10px 5px;
	border-radius: 3px;
	padding: 10px;
	@media screen and (min-width: 600px) {
		margin:5px;
		max-width: 200px;
		max-height: 150px;
		overflow: hidden;
		:hover {
			filter: brightness(85%);
		}
	}
	max-width: 97%;
	background-color: ${props => props.theme.palette.cardBackground};
	flex: 1 1 auto;
	word-wrap: break-word;
	word-break: break-word;
	box-shadow: 0px 0.5px 3px ${props => props.theme.palette.boxShadowColor};
	color: ${props => props.theme.palette.color};

`;

const ProjectDescription = styled.p`
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	font-size: 0.8em;
	color: ${props => props.theme.secondaryColor};
	background-color: inherit;
`;

const ProjectTitle = styled.h3`
	font-size: 1.2em;
	color: ${props => props.theme.palette.color};
`;

const ProjectLink = styled.a`
	background-color: inherit;
	display: inline-block;
`;

const Card: React.FC<Repos> = ({ html_url, name, description }) => {
	return (
		<CardStyled>
			<ProjectLink href={html_url}>
				<ProjectTitle>{name}</ProjectTitle>
			</ProjectLink>
			<ProjectDescription>
				{description === null
					? "No description available"
					: description}
			</ProjectDescription>
		</CardStyled>
	);
}

export default Card
