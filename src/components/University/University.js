
import React from 'react'
import { Container, Wrapper, Info } from './styles.js'

export const University = () => {
	return (
		<Container>
			<Wrapper photo={'https://i.imgur.com/OKvY3py.png'}></Wrapper>
			<Info>
				<h1>I'm studing <span>Multimedia engineering</span></h1>
				<h2>7nd semester</h2>
				<p>In 3 and half years i got a lot skills:
				</p>
				<ul>
					<li>Fundamentals in math, algebra and physical</li>
					<li>Fundamentals in programming, OOP and  data structures</li>
					<li>Project managment</li>
					<li>Database's managment and design</li>
					<li>Web design(Adobe XD)</li>
					<li>Audio and image processing (Python)</li>
				</ul>
			</Info>
		</Container >
	)
}