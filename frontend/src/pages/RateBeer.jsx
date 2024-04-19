import styled from "styled-components";
import PropTypes from "prop-types";
import SignIn from "../components/SignIn.jsx";
import React, {useState} from "react";

const StyledHeader=styled.h1`
    border-bottom: 2px solid #333;
`

const StyledCancelButton=styled.button`
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

const StyledSaveButton=styled.button`
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

export default function RateBeer({ beer, onCancel }) {

    const [rating, setRating] = useState('');
    const [comments, setComments] = useState('');

    const handleCancel = () => {
        onCancel();
    };

    const handleSave = () => {
        const data = {
            name: {beer},
            rating: rating,
            comments: comments
        };
        // sendDataToAPI(data)
        //     .then(() => {
        //         setName('');
        //         setRating('');
        //         setComments('');
        //         onCancel();
        //     })
        //     .catch(error => {
        //         console.error('Error saving data:', error);
        //     });
        onCancel();
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
                    <StyledCancelButton onClick={handleCancel}>Cancel</StyledCancelButton>
                    <StyledSaveButton onClick={handleSave}>Save</StyledSaveButton>
                </>
            ) : (
                <>
                    <StyledHeader>You must sign in to rate a beer...</StyledHeader>
                    <SignIn/>
                </>
            )}
        </>
    );
}

// const sendDataToAPI = async (data) => {
//     try {
//         const response = await fetch('your-api-endpoint', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
//         if (!response.ok) {
//             throw new Error('Failed to save data to the API');
//         }
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

RateBeer.propTypes = {
    beer: PropTypes.string.isRequired,
};