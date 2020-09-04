import React from 'react'
import { Project } from '../Project/Project'
import { List } from './styles'
export const ListOfProjects = ({ projects }) => {
  return (
    <List>
      {projects.map((pro) => (
        <Project key={pro.id} project={pro}></Project>
      ))}
    </List>
  )
}
