import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { FooterMain, Container, Contact, Rrss, Rrrs__item } from './styles'
const size = '42px'
export const Footer = () => {
  return (
    <FooterMain className="footer">
      <Container className="footer__container">
        <Contact className="footer__contact">
          <div className="">
            <h3>Illustration by:</h3>
            <p>
              <a href="https://www.instagram.com/nowayout.here/">
                <span>Steven Villa</span>
              </a>
            </p>
          </div>
          <h3>Contact me:</h3>
          <p>
            <span>Email: </span> jcamiloguz1@gmail.com
          </p>
          <p>
            <span>Phone: </span> +57 3163619550
          </p>
        </Contact>

        <Rrss className="footer__rrss">
          <Rrrs__item href="https://github.com/jcamiloguz">
            <AiFillGithub size={size} />
          </Rrrs__item>
          <Rrrs__item href="https://www.linkedin.com/in/juan-camio-guzman-sandoval-213087185/">
            <AiFillLinkedin size={size} />
          </Rrrs__item>
          <Rrrs__item href="https://twitter.com/guzcode">
            <AiOutlineTwitter size={size} />
          </Rrrs__item>
        </Rrss>
      </Container>
    </FooterMain>
  )
}
