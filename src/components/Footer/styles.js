import styled from 'styled-components'
import footerImage from '../../assets/static/footer.png'
export const FooterMain = styled.footer`
  height: 180px;
  background-color:#080a0a;
  width: 100%;
	position:relative;
	margin-top: 150px;
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
	color:	var(--secondDark);
  h3 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1.1rem;
  }
  & span {
    color: var(--secondLight);
  }
  div {
    margin: 20px 0;
  }
  a {
    text-decoration: underline;
    color: var(--secondLight);
  }
`
export const Rrss = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
	@media screen and (max-width: 500px){
		flex-direction:column;
	}
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
    color: var(--secondLight);
  }
`
export const City = styled.div`
width:100%;
height:160px;
background-image: url(${footerImage});
background-position:center;
background-repeat:no-repeat;
position:absolute;
top:-134px;

`