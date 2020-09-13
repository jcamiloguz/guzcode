import React from 'react'
import { ListOfProjects } from '../components/listOfProjects/ListOfprojects'
const projects = [
	{
		id: 1,
		name: 'React TaskApp',
		description:
			'A task app where you can create, edit and delete a task, use the localStorage',
		github: 'https://github.com/jcamiloguz/task_app',
		live: 'https://taskreactapp.vercel.app/',

		photo: 'https://i.imgur.com/Fbl72nn.png',
	},
	{
		id: 2,
		name: 'Rick and Morty',
		description:
			'A Single page application using vanilla javascript and comsume info from a API',
		github: 'https://github.com/jcamiloguz/SPA-vanilla',
		live: 'https://jcamiloguz.github.io/SPA-vanilla/',

		photo: 'https://i.imgur.com/9kS9md4.png',
	},
	{
		id: 3,
		name: 'Wikipedia Clone',
		description:
			'A  HTML and CSS chanllenge, its the landing page of wikipedia i make it using modern css: grid and flexbox',
		github: 'https://github.com/jcamiloguz/wikipedia-clone',
		live: 'https://jcamiloguz.github.io/wikipedia-clone/',

		photo: 'https://i.imgur.com/ueAsErs.png',
	},
	{
		id: 4,
		name: 'Netflix Clone',
		description:
			'A  HTML and CSS chanllenge, its the landing page of wikipedia i make it using modern css: grid and flexbox',
		github: 'https://github.com/jcamiloguz/NetflixClone',

		photo: 'https://i.imgur.com/Zg518C1.png',
	},
]

export const Portfolio = () => (
	<>
		<ListOfProjects projects={projects}></ListOfProjects>
	</>
)
