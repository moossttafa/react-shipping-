import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({title}) => {
  return <Wrapper>
    <div className="section-center">
      <h3>
        <Link to="/" >Home</Link>/ {title} 
      </h3>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  background: #f1f1f1;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;


  color: #4c718e;
  a {
    color: #4c718e;
    padding: 0.5rem;
    transition: all 0.3s linear;
  }
  a:hover {
    color: #5ac9fe;
  }
`

export default PageHero
