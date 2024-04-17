import styled from "styled-components";

const StyledHeader=styled.h1`
    border-bottom: 2px solid #333;
`

const StyledButton=styled.button`
    border: 2px solid #333;
    padding: 1% 2%;
    float: left;
    cursor: pointer;
    border-radius: 4px;
    &:hover{
        color: lightgrey;
        background-color: #333;
        border-radius: 10px;
        border: 2px solid lightgrey;


`

export default function Home() {
    return (
        <>
            <StyledHeader>Home Page</StyledHeader>
            <h2>Already have an account?</h2>
            <StyledButton>Log in</StyledButton>
        </>
    )
}