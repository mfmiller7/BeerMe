import React, {useState} from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import styled from 'styled-components';

const GoogleLogo = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="48px"
        height="48px"
    >
        <path
            fill="#FFC107"
            d="M46.26 23.12c0-1.41-.12-2.82-.36-4.2H24v7.98h11.15c-.52 2.69-2.59 4.92-5.48 5.82v4.83h8.81c5.16-4.75 8.14-11.73 8.14-20.43z"
        />
        <path
            fill="#FF3D00"
            d="M24 48c7.37 0 13.51-2.47 17.99-6.7l-8.81-6.84c-2.45 1.65-5.61 2.62-9.18 2.62-7.05 0-13.03-4.75-15.17-11.18H1.7v4.67C6.21 41.36 14.36 48 24 48z"
        />
        <path
            fill="#4CAF50"
            d="M8.83 28.74c-.64-1.88-.99-3.9-.99-5.99s.35-4.11.99-5.99V12H1.7C.61 16.43 0 20.82 0 25.33s.61 8.9 1.7 12.67l7.13-5.26z"
        />
        <path
            fill="#1976D2"
            d="M24 9.13c2.52 0 4.81.86 6.61 2.56l4.94-4.94C37.51 3.14 31.37 0 24 0 14.36 0 6.21 6.64 1.7 12.67l7.13 5.26c2.14-6.43 8.12-11.18 15.17-11.18z"
        />
    </svg>
);

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: auto;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid #333;
  padding: 1% 2%;
  color: lightgrey;
  background-color: #333;
  &:hover {
    color: lightgrey;
    background-color: black;
    border: 2px solid black;
  }
  svg {
    margin-right: 10px;
  }
`;

const StyledDiv=styled.div`
    width: 90%;
    height: 50%;
    padding: 5%;
`;

const StyledHeader=styled.h1`
    border-bottom: 2px solid #333;
`

export default function User() {
    const googleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            handleLoginSuccess(codeResponse)
        },
        //     // Send the authorization code to the backend server
        //     fetch('/api/auth/google', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ code: codeResponse.code }),
        //     })
        //         .then(response => response.json())
        //         .then(data => {
        //             console.log('Backend response:', data);
        //         })
        //         .catch(error => {
        //             console.error('Error:', error);
        //         });
        // },
        // onError: () => {
        //     // Handle login errors here
        //     console.error('Google login failed');
        // },
        flow: 'auth-code',
    });

    const [user, setUser] = useState(null);

    const handleLoginSuccess = (tokens) => {
        // Assuming tokens contain user details and the access token
        setUser({
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token,
            profile: tokens.profile, // User profile information
        });

        // Optionally, you might want to store the access token in local storage for persistence
        localStorage.setItem('accessToken', tokens.access_token);
    };

    return (
        <StyledDiv>
            {user ? (
                <>
                    <StyledHeader>{user.profile}'s Rated Beers</StyledHeader>
                    {/* Pull beers they have rated from user db */}
                </>
            ) : (
                <GoogleButton onClick={() => googleLogin()}>
                    <GoogleLogo />
                    Sign in with Google
                </GoogleButton>
            )}
        </StyledDiv>
    );
}