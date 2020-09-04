import styled from 'styled-components'

export const FooterMain = styled.footer`
  height: 180px;
  background-color: var(--darkColor);
  width: 100%;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
`
export const Contact = styled.div`
  margin-top: 10px;
  h3 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1.1rem;
  }
  & span {
    color: #009bd5;
  }
  div {
    margin: 20px 0;
  }
  a {
    text-decoration: underline;
    color: #009bd5;
  }
`
export const Rrss = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`
export const Rrrs__item = styled.a`
  width: 60px;
  height: 60px;
  margin: 0 10px;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  position: relative;
  color: #fff7;
  & :hover {
    color: #009bd5;
  }
`
