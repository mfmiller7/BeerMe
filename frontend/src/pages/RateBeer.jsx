import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeader=styled.h1`
    border-bottom: 2px solid #333;
`

const StyledButton1=styled.button`
    border: 2px solid #333;
    margin: 0 1% 1% 0;
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

const StyledButton2=styled.button`
    border: 2px solid #333;
    margin: 0 0 1% 0;
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

const Label = styled.label`
    display: block;
    font-weight: bold;
`;

const StyledSelect=styled.select`
    border: 2px solid #333;
    padding: 0.5% 2%;
    margin: 1% 0;
    border-radius: 4px;
    background-color: #f1f1f1;
    cursor: pointer;
`;

const StyledText=styled.textarea`
    border: 2px solid #333;
    padding: 0.5%;
    margin: 1% 0;
    border-radius: 4px;
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    background-color: #f1f1f1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    font-size: calc(5px + 1.5vmin);
`;

export default function RateBeer({beer}) {
    return(
        <>
            <StyledHeader>{beer}</StyledHeader>
            <Label for="rating">Rating:</Label>
            <StyledSelect name="rating">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </StyledSelect>
            <Label>What did you like or dislike about {beer}?</Label>
            <StyledText placeholder="Comments..."/>
            <StyledButton1>Cancel</StyledButton1><StyledButton2>Save</StyledButton2>
        </>
    );
}

RateBeer.propTypes = {
    beer: PropTypes.string.isRequired,
};