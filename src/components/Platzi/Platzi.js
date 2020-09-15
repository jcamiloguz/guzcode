import React from 'react'
import { Container, Wrapper, Info } from './styles.js'

export const Platzi = () => {

	return (
		<Container>
			<Wrapper photo={'https://i.imgur.com/M5AsbXg.png'}></Wrapper>
			<Info>
				<h1>I'm Platzi student</h1>
				<h2>More than 30 course finished</h2>
				<p>I got a lot skills:
				</p>
				<ul>
					<li>Fundamentals in software engineering</li>
					<li>Git flow</li>
					<li>NPM</li>
					<li>Web development (HTML CSS)</li>
					<li>Javascript as main language(vanilla SPA, routers, NODEJS, Async, ECS+)</li>
					<li>ReactJS (Hooks, Styled-Components )</li>
					<li>Webpack</li>
					<li>Terminal comands</li>
				</ul>
				<a target="_blank" rel="noopener noreferrer" href="https://platzi.com/@jcamiloguz/">Platzi profile</a>
			</Info>
		</Container >
	)
}