import Country from "./pages/Country.jsx";
import Navigation from "./components/Navigation.jsx";
import Header from './components/Header.jsx';
import User from "./pages/User.jsx";
import BottomNav from "./components/BottomNav.jsx";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0 2%;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #333;
      color: lightgrey;
  }
`

const countries = [
    'belgium', 'czech', 'denmark', 'finland', 'ireland',
    'italy', 'luxembourg', 'malta', 'norway', 'poland',
    'portugal', 'spain', 'sweden', 'switzerland'
];

function Root() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Navigation />
            <Routes>
                {countries.map(country => (
                    <Route key={country} path={`/${country}/*`} element={<Country country={country} />} />
                ))}
                <Route path="/" element={<User />} />
            </Routes>
            <BottomNav />
        </>
    );
}

export default function App() {
    return (
        <GoogleOAuthProvider clientId="1082165952674-ed5f9jero370hi4jc7ep877hn3g24q3v.apps.googleusercontent.com">
            <Router>
                <Root/>
            </Router>
        </GoogleOAuthProvider>
    );
}