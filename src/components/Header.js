import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss'
export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <nav className="header__navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Portfolio</li>
            <li>Educate</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
