import styled from 'styled-components'
import imagen from '../../assets/static/prueba.jpg'

export const Container = styled.section`
  width: 100%;
  height: 800px;
  text-align: center;
  position: relative;
  h1 {
    font-size: 4rem;
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    top: 80px;
    z-index: -1;
  }
  h2 {
    font-size: 3rem;
    font-weight: 400;
    position: absolute;
    right: 50%;
    top: 160px;
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
`
