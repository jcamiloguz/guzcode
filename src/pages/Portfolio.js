import React from 'react'
import { ListOfProjects } from '../components/listOfProjects/ListOfprojects'
const projects = [
  {
    id: 1,
    name: 'React TaskApp',
    description:
      'A task app where you can create, edit and delete a task, use the localStorage',
    github: 'github.com',
    live: 'taskapp.com',

    photo: 'https://i.imgur.com/Fbl72nn.png',
  },
  {
    id: 2,
    name: 'Rick and Morty',
    description:
      'A Single page application using vanilla javascript and comsume info from a API',
    github: 'github.com',
    live: 'taskapp.com',

    photo: 'https://i.imgur.com/9kS9md4.png',
  },
  {
    id: 3,
    name: 'Wikipedia Clone',
    description:
      'A  HTML and CSS chanllenge, its the landing page of wikipedia i make it using modern css: grid and flexbox',
    github: 'github.com',
    live: 'taskapp.com',

    photo: 'https://i.imgur.com/ueAsErs.png',
  },
]

export const Portfolio = () => (
  <>
    <ListOfProjects projects={projects}></ListOfProjects>
  </>
)
