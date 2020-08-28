import React from 'react'
import { Hero } from '../components/Hero'
import '../assets/styles/components/Home.scss'

export const Home = () => {
  return (
    <>
      <Hero></Hero>
      <main className="main">
        <p>
          I am a <span>software developer</span> currently focused on web
          technologies with a high degree of adaptability and responsibility,
          with the ability to work as a team and autonomously, passionate about
          new technologies. I am looking to collaborate as a programmer with
          challenging problems and developing <span>quality software</span>.
        </p>
      </main>
    </>
  )
}
