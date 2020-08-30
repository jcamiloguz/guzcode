import React from 'react'
import { Link } from 'react-router-dom'
import { Headers, Header__container, Nav } from './styles'
export const Header = () => {
  return (
    <Headers>
      <Header__container>
        <Nav className="header__navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Porfolio</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
          </ul>
        </Nav>
      </Header__container>
    </Headers>
  )
}
