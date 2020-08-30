import React from 'react'
import { Project } from '../Project/Project'

export const ListOfProjects = ({ projects }) => {
  return (
    <div className="list">
      {projects.map((pro) => (
        <Project key={pro.id} project={pro}></Project>
      ))}
    </div>
  )
}
