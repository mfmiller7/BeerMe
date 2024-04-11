import { useState, useEffect } from 'react';
import styled from "styled-components";
import RateBeer from "../RateBeer.jsx";
import axios from "axios";

const StyledHeader=styled.h1`
    border-bottom: 2px solid #333;
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

export default function Belgium() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/beers/belgium'); // Replace 'belgium' with the desired country
                console.log('Data:', response.data);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching beer:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const [rateBeer, setRateBeer] = useState('none');

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            { rateBeer === 'none' && <StyledHeader>Belgian Beers</StyledHeader>}
            <StyledDiv>
                {data.map((beer) => (
                    <React.Fragment key={beer.id}>
                        {rateBeer === 'none' && (
                            <StyledDiv2 onClick={() => setRateBeer(beer.title)}>
                                <h3><u>{beer.title}</u></h3>
                                <p>Abv: {beer.abv}%</p>
                                <p>{beer.description}</p>
                            </StyledDiv2>
                        )}
                    </React.Fragment>
                ))}
            </StyledDiv>
            <div>
                {rateBeer !== 'none' && <RateBeer beer={rateBeer}/>}
            </div>
        </>
    );
}
