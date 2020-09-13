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
					<li>Web development (HTML CSS)</li>
					<li>Javascript as main language(vanilla SPA, routers, NODEJS, Async)</li>
					<li>ReactJS (Hooks, Styled-Components )</li>
					<li>Web design(Adobe XD)</li>
					<li>Audio and image processing (Python)</li>
				</ul>
				<a href="https://platzi.com/@jcamiloguz/">Platzi profile</a>
			</Info>
		</Container >
	)
}