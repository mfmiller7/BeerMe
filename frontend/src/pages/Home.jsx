import styled from "styled-components";

const StyledHeader=styled.h1`
    border-bottom: 2px solid #333;
`

const StyledButton=styled.button`
    border: 2px solid #333;
    padding: 1% 2%;
    float: left;
    cursor: pointer;
    border-radius: 4px;
    &:hover{
        color: lightgrey;
        background-color: #333;
        border-radius: 10px;
        border: 2px solid lightgrey;


`

export default function Home() {
    <script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>
    function init() {
        gapi.load('auth2', function() {
        /* Ready. Make a call to gapi.auth2.init or some other API */
        });
    }
    gapi.auth2.init({
        client_id: 'CLIENT_ID85119275849-lnbri26vmvvihfc2qelr5cgp83eil3dq.apps.googleusercontent.com.apps.googleusercontent.com'
    })

    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }

    return (
        <>
            <StyledHeader>Home Page</StyledHeader>
            <h2>Already have an account?</h2>
            <StyledButton>Log in</StyledButton>
        </>
    )
}