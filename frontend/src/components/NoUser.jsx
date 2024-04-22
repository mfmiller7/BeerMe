import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: black;
    color: lightgrey;
    margin: auto;
    width: 400px;
    height: 200px;
    padding: 0 4%;
    border-radius: 10px;
`

const StyledHeader=styled.h1`
    padding-top: 3%;
`

export default function NoUser(){
    return (
        <StyledDiv>
            <StyledHeader>Welcome to BeerMe!</StyledHeader>
            <h3>Please login to rate and view rated beers.</h3>
            <p>
                Feel free to browse our selection without signing in,
                just select a country above to get started!
            </p>
        </StyledDiv>
    )
}