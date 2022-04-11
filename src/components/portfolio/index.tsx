import styled from "styled-components";
import Card from "../../elements/card";
import { useState, useEffect } from "react";
const abortController = new AbortController()

const PortifolioStyled = styled.div`
	@media screen and (min-width: 600px) {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 80%;
		::-webkit-scrollbar {
			/*-webkit browsers*/
			display: none;
		}
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	border-radius: 4px;
	width: 100%;
	align-self: center;
	justify-self: center;
	padding: 8px;
	max-height: 650px;
	overflow: auto;
	background-color: ${props => props.theme.portifolioColor};
`;

const StyledPortfolioText = styled.div`
	text-align: center;
	font-size: large;
	font-weight: 500;
	max-width: 700px;
	justify-self: center;
	margin-bottom: 100px;
`

class Repos {
	id: string;
	name: string;
	html_url: string;
	description: string;

	constructor(id: string, name: string, html_url: string, description: string) {
		this.id = id
		this.name = name
		this.html_url = html_url
		this.description = description
	}
}

export default function Portfolio() {
	const [repos, setRepos] = useState<Repos[]>([]);
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				"https://api.github.com/users/OliveiraJ/repos?public"
			);
			const data = await response.json();
			setRepos(data);
		}

		fetchData();
		//cleanup function
		return () => {
			abortController.abort()
		}

	}, []);

	return (
		<>
			<StyledPortfolioText>
				<p>
					Hello again, bellow you can find some cards with the title and some description of my Github repositorys,
					you can visit and find more about them by clicking on the title of the card.
				</p>
			</StyledPortfolioText>
			<PortifolioStyled>
				{repos.map(repo => (
					<Card key={repo.id} id={repo.id} html_url={repo.html_url} name={repo.name} description={repo.description} />
				))}
			</PortifolioStyled>
		</>
	);
}

export { Repos }