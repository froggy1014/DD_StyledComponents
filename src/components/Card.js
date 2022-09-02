import React from "react"
import styled from "styled-components"

const Card = () => {
  return (
    <StyledCard>
      <img src="https://image.shutterstock.com/image-vector/microblog-platform-abstract-concept-vector-600w-1852998859.jpg" alt="sample" />
      <footer>
        <h4>product name</h4>
        <p>$15</p>
      </footer>
    </StyledCard>
  )
}

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background : var(--white);
  border-radius: 0.25rem;
  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    
    h4{
      text-transform: capitalize;
      color: red;
    }
  }
  transition: all 0.3s ease-in-out;
  &:hover{
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
  }
  
  @media (min-width: 768px) {
    max-width: 600px;
  }
`

export default Card