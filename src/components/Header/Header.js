import styled from "styled-components";

const StyledHeader = styled.h2`
width: 300px;
height: 50px;
border: 2px solid pink;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
margin-top: 10px;
border-radius: 10px;
color: palevioletred;
:hover {
  background-color: papayawhip;
}
`

const Header = ({text}) => {
  return (
    <StyledHeader >
        {text}
    </StyledHeader>
  )
}

export default Header;