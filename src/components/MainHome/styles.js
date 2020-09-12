import styled from 'styled-components'

export const MainContainer = styled.section`
width:100%;
margin:80px auto;
`
export const Description = styled.div`
text-align:center;
width:100%;
max-width:500px;
margin:0 auto;
h2{
font-size:2.5rem;
color:var(--lightColor);
margin-bottom:40px;
}
p{
font-size:1.6rem;
span{
color:var(--secondLight);
}
span[light]{
color:var(--lightColor);
}
}


`
export const Tecnologies = styled.section`
width:100%;
text-align:center;
margin:60px 0px;
	h2{
	font-size:2.5rem;
	color:var(--lightColor);
	}
`