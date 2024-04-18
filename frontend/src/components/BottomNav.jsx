import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const StyledNav=styled.nav`
    ul {
        list-style-type: none;
        margin: 0 2%;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        width: 96%;
        position: fixed;
        bottom: 0;
        right: 0;
    }
    li {
        float: right;
    }
    li a {
        display: block;
        color: lightgrey;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    li a:hover {
        background-color: black;
        color: lightgrey;
    }
    .active {
        background-color: lightgrey;
        color: black;
    }
`
export default function BottomNav() {
    return (
        <>
            <StyledNav>
                <ul>
                    <li><NavLink to={'/'}>MY BEERS</NavLink></li>
                </ul>
            </StyledNav>
        </>
    )
}