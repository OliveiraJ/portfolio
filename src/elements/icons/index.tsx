import { Moon, Sun, Github, Gitlab, Linkedin, Twitter, Mail, Settings } from "@styled-icons/feather/"
import styled, { keyframes } from "styled-components"
import { slideInRight, slideOutRight, rotateIn } from "react-animations"


const themeSwitcherAnimationSlideIn = keyframes`${slideInRight}`;
const themeSwitcherAnimationSlideOut = keyframes`${slideOutRight}`;
const settingsAnimation = keyframes`${rotateIn}`;

const StyledMoon = styled(Moon)`
	animation: 0.3s ${themeSwitcherAnimationSlideIn};
	background-color: transparent;
	cursor: pointer;
	margin-right: 8px;
`;

const StyledSun = styled(Sun)`
	animation: 0.3s ${themeSwitcherAnimationSlideIn};
	background-color: transparent;
	cursor: pointer;
	margin-right: 8px;
`;

const StyledSettings = styled(Settings)`
	@media screen and (min-width: 500px) {
		&:hover {
			animation: 0.7s ${settingsAnimation};
		}
	}
	&:active {
		animation: 0.7s ${settingsAnimation};
		transition-property: animation;
		transition-duration: 1s;
	}
	background-color: inherit;
	cursor: pointer;
`;

export { StyledMoon, StyledSun, StyledSettings }