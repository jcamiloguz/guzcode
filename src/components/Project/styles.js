import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 600px 1fr;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 10px;
  gap: 15px;
  color: var(--primaryColor);
  border-radius: 10px;
  align-items: center;
`
export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.7);
  img {
    width: 100%;
  }
`

export const Info = styled.div`
  h2 {
    font-size: 2rem;
  }
  background-color: #f3f3f3;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.7);
`

export const Button = styled.div`
  display: inline-block;
  background-color: var(--primaryColor);
  color: var(--secondaryColor);
  padding: 5px 15px;
  font-size: 1.3rem;
  border-radius: 8px;
  margin: 15px 8px;
  cursor: pointer;
  :hover {
    background-color: #009bd5;
  }
  svg {
    margin-left: 10px;
  }
`
