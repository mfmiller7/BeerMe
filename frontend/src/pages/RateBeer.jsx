import styled from "styled-components";
import PropTypes from "prop-types";
import React, {useState} from "react";
import NoUser from "../components/NoUser.jsx";

const StyledButton=styled.button`
    padding: 5px 2%;
    color: white;
    background-color: #2a9df4;
    border-radius: 10px;
    border: 2px solid #333;
    max-height: 30px;
    float: left;
    font-size: calc(6px + 1vmin);
    &:hover{
        background-color: lightskyblue;
        cursor: pointer;
    }
`

const Label = styled.label`
    display: block;
    font-weight: bold;
    padding-top: 1%;
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
    font-size: calc(5px + 1.2vmin);
`;

const StyledText2=styled.textarea`
    border: 2px solid #333;
    padding: 0.5%;
    margin: auto;
    border-radius: 4px;
    width: 60%;
    max-width: 500px;
    height: 35px;
    box-sizing: border-box;
    background-color: lightgrey;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    resize: none;
    font-size: calc(5px + 1.2vmin);
`;

export default function RateBeer({ beer, onCancel }) {
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }

    const [rating, setRating] = useState('1');
    const [comments, setComments] = useState('');
    const [name, setName] = useState('Anonymous');
    const date = getDate();

    const handleCancel = () => {
        onCancel();
    };

    const handleSave = () => {
        const data = {
            beer: beer,
            rating: rating,
            comments: comments,
            name: name,
            date: date
        };
        saveToMongoDB(data)
            .then(() => {
                setRating('1');
                setComments('');
                setName('Anonymous');
            })
            .catch(error => {
                console.error('Error saving data:', error);
            });
        onCancel();
    }

    const user = localStorage.getItem('user');

    return (
        <>
            {user ? (
                <>
                    <h1>{beer}</h1>
                    <StyledText2 placeholder="Your name (leave blank for an anonymous rating)" onChange={e => setName(e.target.value)}/>
                    <br></br>
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
                    <StyledButton onClick={handleCancel}>Cancel</StyledButton>
                    <StyledButton onClick={handleSave}>Save</StyledButton>
                </>
            ) : (
                <NoUser/>
            )}
        </>
    );
}

const saveToMongoDB = async (data) => {
    try {
        const response = await fetch('http://localhost:3000/savenewrating', {
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