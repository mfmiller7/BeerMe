import { useState, useEffect } from 'react';
import styled from "styled-components";
import RateBeer from "./RateBeer.jsx";
import axios from "axios";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (min-width: 1250px) {
        grid-template-columns: repeat(3, 1fr);
    }
    gap: 20px;
    background-color: lightgrey;
`
const StyledButton=styled.button`
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
export default function Country({ country }) {
    const [beer, setBeer] = useState([]);
    const [rateBeer, setRateBeer] = useState(null);

    useEffect(() => {
        const fetchBeers = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/beers/${country}`);
                setBeer(response.data);
            } catch (error) {
                console.error('Error fetching beers:', error);
            }
        };
        fetchBeers();
    }, [country]);

    const handleCancel = () => {
        setRateBeer(null);
    };

    return (
        <>
            {rateBeer === null && <br />}
            <div>
                {rateBeer === null ? (
                    <StyledDiv>
                        {beer.map((beer) => (
                            <StyledButton key={beer.id} onClick={() => setRateBeer(beer.title)}>
                                <h3><u>{beer.title}</u></h3>
                                <p>Abv: {beer.abv}</p>
                                <p>{beer.description}</p>
                            </StyledButton>
                        ))}
                    </StyledDiv>
                ) : (
                    <RateBeer beer={rateBeer} onCancel={handleCancel} />
                )}
            </div>
        </>
    );
}

Country.propTypes = {
    country: PropTypes.string.isRequired,
};