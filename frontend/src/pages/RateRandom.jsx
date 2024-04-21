import styled from "styled-components";
import React, {useState} from "react";
import NoUser from "../components/NoUser.jsx";

const StyledHeader=styled.h1`
    
`

const StyledButton=styled.button`
    padding: 1% 2%;
    cursor: pointer;
    color: black;
    background-color: lightskyblue;
    border-radius: 10px;
    border: 2px solid #333;
    &:hover{
        color: white;
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
    font-size: calc(5px + 1.2vmin);
`;

const StyledText2=styled.textarea`
    border: 2px solid #333;
    padding: 0.5%;
    margin: auto;
    border-radius: 4px;
    width: 60%;
    max-width: 200px;
    height: 35px;
    box-sizing: border-box;
    background-color: lightgrey;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    resize: none;
    font-size: calc(5px + 1.2vmin);
`;

export default function RateRandom({ onCancel }) {
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }

    const [beer, setBeer] = useState('');
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
                setBeer('')
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
                    <StyledText2 placeholder="Beer name" onChange={e => setBeer(e.target.value)}/>
                    <br></br>
                    <StyledText2 placeholder="**Your name" onChange={e => setName(e.target.value)}/>
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
                    <p>**leave blank for an anonymous rating</p>
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