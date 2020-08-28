import React from 'react'
import '../assets/styles/components/Footer.scss'
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contact">
          <h3>Contact me:</h3>
          <p>
            <span>Email: </span> jcamiloguz1@gmail.com
          </p>
          <p>
            <span>Phone: </span> +57 3163619550
          </p>
        </div>
        <div className="footer__rrss">
          <div className="footer__rrss--item github"></div>
          <div className="footer__rrss--item linkedin"></div>
          <div className="footer__rrss--item twitter"></div>
        </div>
      </div>
    </footer>
  )
}
