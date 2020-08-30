import React from 'react'

export const Project = ({ project }) => {
  const { name, description, github, live, photo } = project
  return (
    <>
      <div className="imgWrapper">
        <img src={photo} alt="" />
      </div>

      <div className="info">
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={github}>Github</a>
        <a href={live}>Live</a>
      </div>
    </>
  )
}
