import styled from "styled-components";
import PropTypes from "prop-types";
import React, {useState} from "react";

const StyledHeader=styled.h1`
    
`

const StyledCancelButton=styled.button`
    padding: 1% 2%;
    cursor: pointer;
    color: black;
    background-color: lightgrey;
    border-radius: 10px;
    border: 2px solid #333;
    &:hover{
        color: white;
        background-color: black;
        border-radius: 10px;
        border: 2px solid #333;
    }
`

const StyledSaveButton=styled.button`
    padding: 1% 2%;
    cursor: pointer;
    color: black;
    background-color: lightgrey;
    border-radius: 10px;
    border: 2px solid #333;
    &:hover{
        color: white;
        background-color: black;
        border-radius: 10px;
        border: 2px solid #333;
    }
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
    background-color: lightgrey;
    cursor: pointer;
`;

const StyledText=styled.textarea`
    border: 2px solid #333;
    padding: 0.5%;
    margin: 1% 0;
    border-radius: 4px;
    width: 100%;
    max-width: 900px;
    height: 150px;
    box-sizing: border-box;
    background-color: lightgrey;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    font-size: calc(5px + 1.5vmin);
`;

export default function RateBeer({ beer, onCancel }) {

    const [rating, setRating] = useState('1');
    const [comments, setComments] = useState('');

    const handleCancel = () => {
        onCancel();
    };

    const handleSave = () => {
        const data = {
            name: beer,
            rating: rating,
            comments: comments
        };
        sendDataToAPI(data)
            .then(() => {
                setRating('');
                setComments('');
                onCancel();
            })
            .catch(error => {
                console.error('Error saving data:', error);
            });
    }

    const user = localStorage.getItem('user');

    return (
        <>
            {user ? (
                <>
                    <StyledHeader>{beer}</StyledHeader>
                    <Label htmlFor="rating">Rating:</Label>
                    <StyledSelect name="rating" onChange={e => setRating(e.target.value)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </StyledSelect>
                    <Label>What did you like or dislike about {beer}?</Label>
                    <StyledText placeholder="Comments..." onChange={e => setComments(e.target.value)}/>
                    <br></br>
                    <StyledCancelButton onClick={handleCancel}>Cancel</StyledCancelButton>
                    <StyledSaveButton onClick={handleSave}>Save</StyledSaveButton>
                </>
            ) : (
                <>
                    <StyledHeader>Sign in to rate {beer}</StyledHeader>
                </>
            )}
        </>
    );
}

const sendDataToAPI = async (data) => {
    try {
        const response = await fetch('http://localhost:3000/beers/rated', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Failed to save data to the API');
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

RateBeer.propTypes = {
    beer: PropTypes.string.isRequired,
};