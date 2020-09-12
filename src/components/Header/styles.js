import styled from 'styled-components'

export const Headers = styled.header`
  background-color: var(--primaryColor);
  width: 100%;
  top: 0;
  right: 0;
  font-size: 1.8rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
	position:fixed;
	z-index: 1;
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
      color:var(--secondLight);
    }
  }
`
