import styled from 'styled-components'

export const Headers = styled.header`
  background-color: #00284a;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  font-size: 1.8rem;
`
export const Header__container = styled.div`
  max-width: 1200px;
  width: 95%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Nav = styled.nav`
  & ul {
    display: flex;

    & li {
      margin: 0 10px;
      cursor: pointer;
    }
    & li:hover {
      color: #009bd5;
    }
  }
`
