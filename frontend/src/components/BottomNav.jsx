import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import SignIn from "./SignIn.jsx";
import React from "react";
import LogOut from "./LogOut.jsx";

const StyledNav=styled.nav`
    ul {
        list-style-type: none;
        margin: 0 2%;
        padding: 0;
        overflow: hidden;
        background-color: black;
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
        padding: 19px 16px;
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
export default function BottomNav() {
    const user = localStorage.getItem('user');
    return (
        <>
            <StyledNav>
                <ul>
                    {user ? (
                        <>
                            <LogOut/>
                        </>
                    ) : (
                        <>
                            <SignIn/>
                        </>
                    )}
                    <li><NavLink to={'/'}>MY BEERS</NavLink></li>
                </ul>
            </StyledNav>
        </>
    )
}