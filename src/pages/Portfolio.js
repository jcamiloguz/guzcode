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
    photo: '',
  },
  { id: 2 },
]

export const Portfolio = () => (
  <>
    <ListOfProjects projects={projects}></ListOfProjects>
  </>
)
