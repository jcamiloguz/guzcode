import styled from 'styled-components'

export const Headers = styled.header`
  background-color: var(--primaryColor);
  width: 100%;
  top: 0;
  right: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
	position:fixed;
	z-index: 1;
`
export const Header__container = styled.div`
  max-width:400px;
	margin:0 auto;
	width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Nav = styled.nav`
  & ul {
    display: grid;
		grid-template-columns:1fr 1fr 1fr;
		

     li {
			width:100%;
      cursor: pointer;
			text-align:center;
			font-size: 1.8rem;
			padding:5px;
			border-radius:5px;
			@media screen and (max-width:400px){
				font-size: 1.4rem;
			}
    }
    & li:hover {
      color:var(--secondLight);
      background-color:rgba(0,0,0,0.5);
    }
  }
`
