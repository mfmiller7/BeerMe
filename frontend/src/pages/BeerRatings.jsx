import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import NoUser from "../components/NoUser.jsx";
import axios from "axios";
import RateRandom from "./RateRandom.jsx";

const StyledHeader=styled.h1`
    
`

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (min-width: 1250px) {
        grid-template-columns: repeat(3, 1fr);
    }
    gap: 20px;
`

const StyledDiv2=styled.div`
    padding: 1% 2%;
    color: lightgrey;
    background-color: #333;
    border-radius: 10px;
    border: 2px solid lightgrey;
`

const StyledButton=styled.button`
    padding: 1% 2%;
    color: black;
    background-color: lightskyblue;
    border-radius: 10px;
    border: 2px solid lightgrey;
    float: right;
    &:hover{
        color: white;
        background-color: lightskyblue;
        cursor: pointer;
    }
`

export default function BeerRatings() {

    const [ratings, setRatings] = useState([]);
    const [rateRandom, setRateRandom] = useState(null);

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/getallratings`);
                setRatings(response.data);
            } catch (error) {
                console.error('Error fetching beers:', error);
            }
        };
        fetchRatings();
    }, []);

    const handleCancel = () => {
        setRateRandom(null);
    };

    const user = localStorage.getItem('user');

    return (
        <>
            {user ? (
                <>
                    {rateRandom === null ? (
                        <>
                            <StyledHeader>Rated Beers <StyledButton onClick={() => setRateRandom('yes')}>+</StyledButton></StyledHeader>
                            <StyledDiv>
                                {ratings.map(rating => (
                                    <StyledDiv2>
                                        <h3><u>{rating.beer}</u></h3>
                                        <p>Rating: {rating.rating}/5</p>
                                        <p>{rating.comments}</p>
                                        <p>~<i>{rating.name}, {rating.date}</i></p>
                                    </StyledDiv2>
                                ))}
                            </StyledDiv>
                        </>
                    ) : (
                        <>
                            <RateRandom onCancel={handleCancel}/>
                        </>
                    )}
                </>
            ) : (
                <>
                    <NoUser/>
                </>
            )}
        </>
    );
}