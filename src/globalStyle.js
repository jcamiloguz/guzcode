import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	:root{
		--primaryColor: #03181D;
	--secondaryColor: #ededed;
	--darkColor: #0b1315;
	--lightColor:#FF557B;
	--secondLight:#009bd5;
	--secondDark:#fff7;
	
	}
html {
	box-sizing: border-box;
	font-family:'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

*, *:before, *:after {
	box-sizing: inherit;
}
::-webkit-scrollbar {
display:none
}
ul, li, h1, h2, h3, p, button {
	margin: 0;
	padding: 0;
}

ul {
	list-style: none;
}

button: {
	background: transparent;
	border: 0;
	outline: 0;
}

body {
	background-color: var(--primaryColor);
	width: 100%;
	overflow-x: hidden;
	font-size:16px;
	color: var(--secondaryColor);
	margin:0;
	padding:0;
}
a {
  text-decoration: none;
  color: inherit;
}

#app {
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}
`
