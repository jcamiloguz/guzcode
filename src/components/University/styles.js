import styled from 'styled-components'

export const Container = styled.section`
display:grid;
margin:0 auto;
width:100%;
max-width:800px;
grid-template-columns:150px 1fr;
margin-top:100px;
gap:20px;
@media screen and (max-width:700px){
grid-template-columns:1fr;
grid-template-rows:150px 1fr;

}
`
export const Wrapper = styled.div`
margin:auto;
width:100%;
height:150px;
background-image:url('${props => props.photo}');
background-position:center;
background-size:cover;
	@media screen and (max-width:700px){

width:150px;
	}
`
export const Info = styled.div`
width:90%;
margin:0 auto;
h1{
	font-size:2rem;
	color:var(--secondLight);
	font-weight:700;
}
h2{
	font-size:1.75rem;
	font-weight:600;
}
p{
	font-size:1.5rem;
	font-weight:400;
}
ul{
	font-weight:400;
	list-style:square;
}
li{
	font-size:1.25rem;
	margin-left:20px;
	color:#949494;
}
`