import React from 'react'
import { Container, Wrapper, Info, Button } from './styles'
import { CgWebsite } from 'react-icons/cg'
import { AiFillGithub } from 'react-icons/ai'
export const Project = ({ project }) => {
	const { name, description, github, live, photo } = project
	return (
		<Container>
			<Wrapper className="imgWrapper" photo={photo}>
			</Wrapper>

			<Info className="info">
				<h2>{name}</h2>
				<p>{description}</p>
				<Button href={github}>
					Github
          <AiFillGithub size={20} />
				</Button>
				{live && (
					<Button href={live}>
						Live
						<CgWebsite size={20} />
					</Button>
				)}
			</Info>
		</Container>
	)
}
