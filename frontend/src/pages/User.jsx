import React from 'react';
import styled from 'styled-components';
import SignIn from "../components/SignIn.jsx";
import LogOut from "../components/LogOut.jsx";

const StyledHeader=styled.h1`
    border-bottom: 2px solid #333;
`

export default function User() {

    const user = localStorage.getItem('user');

    return (
        <>
            {user ? (
                <>
                    <StyledHeader>Your Rated Beers</StyledHeader>
                    {/* Pull beers they have rated from user db, using id_token?? */}
                    <LogOut/>
                </>
            ) : (
                <SignIn/>
            )}
        </>
    );
}