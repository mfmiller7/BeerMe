import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import SignIn from "../components/SignIn.jsx";
import LogOut from "../components/LogOut.jsx";

const StyledHeader=styled.h1`
    
`
const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (min-width: 1250px) {
        grid-template-columns: repeat(3, 1fr);
    }
    gap: 20px;
    background-color: lightgrey;
`
const StyledDiv2=styled.div`
    border: 2px solid #333;
    padding: 1% 2%;
    cursor: pointer;
    &:hover{
        color: lightgrey;
        background-color: #333;
        border-radius: 10px;
        border: 2px solid lightgrey;
    }
`

export default function User() {

    const [ratedBeers, setRatedBeers] = useState([]);

    useEffect(() => {
        fetchRatedBeers();
    }, []);

    const fetchRatedBeers = () => {
        fetch('http://localhost:3000/beers/rated')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch rated beers');
                }
                return response.json();
            })
            .then(data => {
                setRatedBeers(data);
            })
            .catch(error => {
                console.error('Error fetching rated beers:', error);
            });
    };

    const user = localStorage.getItem('user');

    return (
        <>
            {user ? (
                <>
                    <StyledHeader>Rated Beers</StyledHeader>
                    <StyledDiv>
                        {ratedBeers.map(beer => (
                            <StyledDiv2>
                                <h3><u>{beer.name}</u></h3>
                                <p>Rating: {beer.rating}</p>
                                <p>Comments: {beer.comments}</p>
                            </StyledDiv2>
                        ))}
                    </StyledDiv>
                    <LogOut />
                </>
            ) : (
                <>
                    <SignIn/>
                </>
            )}
        </>
    );
}