import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const StyledNav=styled.nav`
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: black;
        width: 100%;
    }
    li {
        float: left;
    }
    li a {
        display: block;
        color: lightgrey;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    li a:hover {
        background-color: #333;
        color: lightgrey;
    }
    .active {
        background-color: #333;
        color: lightgrey;
    }
`

export default function Navigation() {
    const countries = [
        'belgium', 'czech', 'denmark', 'finland', 'ireland',
        'italy', 'luxembourg', 'malta', 'norway', 'poland',
        'portugal', 'spain', 'sweden', 'switzerland'
    ];

    return (
        <>
            <StyledNav>
                <ul>
                    {countries.map(country => (
                        <li key={country}>
                            <NavLink to={`/${country}`}>{country.toUpperCase()}</NavLink>
                        </li>
                    ))}
                </ul>
            </StyledNav>
        </>
    )
}