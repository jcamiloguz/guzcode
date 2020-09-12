import styled from 'styled-components'

export const Container = styled.div`
width:100%;
position:relative;
overflow: scroll;
`
export const Wrapper = styled.div`
transition: 450ms all;
white-space: nowrap;
margin: 60px 0px;
padding-bottom: 10px;
:hover div{
opacity:0.3;
}
:hover div:hover{
transform: scale(1.5);
opacity:1;
}
`