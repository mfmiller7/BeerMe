import { useState, useEffect } from 'react';
import styled from "styled-components";
import RateBeer from "../RateBeer.jsx";

const StyledHeader=styled.h1`
    border-bottom: 2px solid #333;
`
const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (min-width: 1250px) {
        grid-template-columns: repeat(3, 1fr);
    }
    gap: 20px; /* Gap between each grid item */
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
export default function Spain() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://beers-list.p.rapidapi.com/beers/spain', {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '0d888e178emsh82e4c56e11c9794p1bd890jsn20c492706bfa',
                        'X-RapidAPI-Host': 'beers-list.p.rapidapi.com'
                    }
                });
                const responseData = await response.json();
                setData(responseData);
                console.log('Data fetched successfully:', responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const [rateBeer, setRateBeer] = useState('none')

    return (
        <>
            { rateBeer === 'none' && <StyledHeader>Spanish Beers</StyledHeader>}
            <StyledDiv>
                {
                    data.map((beer)=>
                        (
                            <>
                                { rateBeer === 'none' &&
                                    <StyledDiv2 onClick={() => setRateBeer(beer.title)} key={beer.id}>
                                        <h3><u>{beer.title}</u></h3>
                                        <p>Abv: {beer.alchool}</p>
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