import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
	font-family: "Open Sans Condensed";
	font-weight: 600;
    padding: 20px 40px;

    @media screen and (max-width: 800px){
      padding: 10px
    }
  }

  a {
	text-decoration: none;
	color: black;
  }

  * {
	box-sizing: border-box;
  }
`;
