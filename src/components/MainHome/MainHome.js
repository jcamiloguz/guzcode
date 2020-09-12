import React from 'react'
import { MainContainer, Tecnologies, Description } from './styles'
import { Slider } from '../Slider/Slider'
import { DiHtml5, DiCss3, DiReact, DiNodejsSmall, DiSass, DiGit, DiMysql } from 'react-icons/di'
export const MainHome = () => {

	const SliderState = {
		items: [{
			id: 1,
			name: 'HTML',
			color: '#E54D26',
			Description: '',
			Icon: DiHtml5
		}, {
			id: 2,
			name: 'CSS',
			color: '#126CAF',
			Description: '',
			Icon: DiCss3
		},
		{
			id: 3,
			name: 'REACT',
			color: '#61DAFB',
			Description: '',
			Icon: DiReact
		}
			,
		{
			id: 4,
			name: 'NODEJS',
			color: '#3E863D',
			Description: '',
			Icon: DiNodejsSmall
		},
		{
			id: 5,
			name: 'SASS',
			color: '#CF649A',
			Description: '',
			Icon: DiSass
		},
		{
			id: 6,
			name: 'GIT',
			color: '#F74E27',
			Description: '',
			Icon: DiGit
		},
		{
			id: 7,
			name: 'SQL',
			color: '#00758F',
			Description: '',
			Icon: DiMysql
		}
		]
	}
	return (
		<MainContainer>
			<Description>
				<h2>Hi.</h2>
				<p>I'm <span>software developer</span>  focused in <span light="true">web</span>  tecnologies based in Cali-Colombia, i'm also  <span>Multimedia enginering</span> student.</p>
			</Description>
			<Tecnologies>
				<h2>Tecnologies</h2>
				<Slider state={SliderState} />
			</Tecnologies>

		</MainContainer>
	)
}