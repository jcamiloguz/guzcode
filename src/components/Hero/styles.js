import styled from 'styled-components'
import imagen from '../../assets/static/prueba.png'

export const Container = styled.section`
  margin-top:40px;
	width: 100%;
  height: 800px;
  text-align: center;
  position: relative;
`
export const Background = styled.div`
position: absolute;
top: 0;
right: 0;
background-image: url(${imagen});
width: 100%;
height: 100%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
z-index: -2;
`
export const Title = styled.div`
position:absolute;
top:100px;
left:0;
width:100%;
text-align:center;
h1{
	font-weight:600;
	font-size:4rem;
	}	
h2{
	font-weight:400;
	font-size:2rem;
}
@media screen and (max-width:620px){
h1{
	font-size:3rem;
	}	
h2{
	font-size:1.5rem;
}
`
