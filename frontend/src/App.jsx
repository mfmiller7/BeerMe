import Country from "./pages/Country.jsx";
import Navigation from "./components/Navigation.jsx";
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import User from "./pages/User.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import BottomNav from "./components/BottomNav.jsx";

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0 2%;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: lightgrey;
      color: #333;
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
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/home/*" element={<Home />} />
                <Route path="/user-beers/*" element={<User />} />
            </Routes>
            <BottomNav />
        </>
    );
}

export default function App() {
    return (
        // <GoogleOAuthProvider clientId="85119275849-lnbri26vmvvihfc2qelr5cgp83eil3dq.apps.googleusercontent.com">
            <Router>
                <Root />
            </Router>
        // </GoogleOAuthProvider>
    );
}

