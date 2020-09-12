import styled from 'styled-components'
import imagen from '../../assets/static/prueba.jpg'

export const Container = styled.section`
  margin-top:40px;
	width: 100%;
  height: 800px;
  text-align: center;
  position: relative;
  h1 {
    font-size: 4rem;
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    z-index: -1;	
    top: 60px;
	}
}
  h2 {
    font-size: 3rem;
    font-weight: 400;
    position: absolute;
    right: 50%;
    top: 200px;
    transform: translateX(50%);
    z-index: -1;
	
  }
  .fondo {
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
  }
@media screen and (max-width: 850px){
	h1{
		font-size: 3rem;
	}
	h2{
    	font-size: 2rem;
}
@media screen and (max-width: 452px){
	h1{
			font-size: 3rem;
    	top: 100px;
			left: 0;
			right:auto;
    	transform: translateX(0%);
	}
	h2{
    	font-size: 1.5rem;
			left: 50%;
			right:auto;
    	transform: translateX(-50%);
		}
}
`
