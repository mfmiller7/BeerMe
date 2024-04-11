import { useState, useEffect } from 'react';
import styled from "styled-components";
import RateBeer from "./RateBeer.jsx";
import axios from "axios";

const StyledHeader=styled.h1`
    border-bottom: 2px solid #333;
    text-transform: capitalize;
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
const StyledDiv2=styled.button`
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
export default function Country( {country} ) {
    const [beer, setBeer] = useState([]);

    useEffect(() => {
        const fetchBeers = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/beers/${country}`);
                setBeer(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching beers:', error);
            }
        };
        fetchBeers();
    }, []);

    const [rateBeer, setRateBeer] = useState('none')

    return (
        <>
            { rateBeer === 'none' && <StyledHeader>{country}</StyledHeader>}
            <StyledDiv>
                {
                    beer.map((beer)=>
                        (
                            <>
                                { rateBeer === 'none' &&
                                    <StyledDiv2 onClick={() => setRateBeer(beer.title)} key={beer.id}>
                                        <h3><u>{beer.title}</u></h3>
                                        <p>Abv: {beer.abv}</p>
                                        <p>{beer.description}</p>
                                    </StyledDiv2>
                                }
                            </>
                        )
                    )
                }
            </StyledDiv>
            <div>
                { rateBeer !== 'none' && <RateBeer beer={rateBeer}/> }
            </div>
        </>
    );
}