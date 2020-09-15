import styled from 'styled-components'

export const Slideritem = styled.div`
height:200px;
width:200px;
border-radius:4px; 
background-color:${props => props.color || '#333'};
display:inline-flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-left:10px;
cursor: pointer;
transition:450ms all;
transform-origin: center left;
:hover ~ div{
	transform: translate3d(100px, 0, 0);
}
h3{
	color:var(--secondarycolor);
	font-size:1.6rem;
}
`