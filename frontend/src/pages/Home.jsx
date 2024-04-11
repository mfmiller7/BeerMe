import styled from "styled-components";

<script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>
function init() {
    gapi.load('auth2', function() {
      /* Ready. Make a call to gapi.auth2.init or some other API */
    });
}
gapi.auth2.init({
    client_id: 'CLIENT_ID85119275849-lnbri26vmvvihfc2qelr5cgp83eil3dq.apps.googleusercontent.com.apps.googleusercontent.com'
  })



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
    return (
        <>
            <StyledHeader>Home Page</StyledHeader>
            <h2>Already have an account?</h2>
            <StyledButton>Log in</StyledButton>
            <div class="g-signin2" data-onsuccess="onSignIn"></div>

        </>
    )
}