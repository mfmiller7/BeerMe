import Belgium from "./pages/countries/Belgium.jsx";
import Czech from "./pages/countries/Czech.jsx";
import Denmark from "./pages/countries/Denmark.jsx";
import Finland from "./pages/countries/Finland.jsx";
import Ireland from "./pages/countries/Ireland.jsx";
import Italy from "./pages/countries/Italy.jsx";
import Luxembourg from "./pages/countries/Luxembourg.jsx";
import Malta from "./pages/countries/Malta.jsx";
import Norway from "./pages/countries/Norway.jsx";
import Poland from "./pages/countries/Poland.jsx";
import Portugal from "./pages/countries/Portugal.jsx";
import Spain from "./pages/countries/Spain.jsx";
import Sweden from "./pages/countries/Sweden.jsx";
import Switzerland from "./pages/countries/Switzerland.jsx";

import Navigation from "./components/Navigation.jsx";
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import User from "./pages/User.jsx";

import {createBrowserRouter, Route, RouterProvider, Routes, useLocation} from 'react-router-dom';
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
function Root() {
    const location = useLocation();
    return (
        <>
            <GlobalStyle />
            <Header />
            <Navigation/>
            <Routes>
                <Route path={'/belgium/*'} element={<Belgium/>}/>
                <Route path={'/czech/*'} element={<Czech/>}/>
                <Route path={'/denmark/*'} element={<Denmark/>}/>
                <Route path={'/finland/*'} element={<Finland/>}/>
                <Route path={'/ireland/*'} element={<Ireland/>}/>
                <Route path={'/italy/*'} element={<Italy/>}/>
                <Route path={'/luxembourg/*'} element={<Luxembourg/>}/>
                <Route path={'/malta/*'} element={<Malta/>}/>
                <Route path={'/norway/*'} element={<Norway/>}/>
                <Route path={'/poland/*'} element={<Poland/>}/>
                <Route path={'/portugal/*'} element={<Portugal/>}/>
                <Route path={'/spain/*'} element={<Spain/>}/>
                <Route path={'/sweden/*'} element={<Sweden/>}/>
                <Route path={'/switzerland/*'} element={<Switzerland/>}/>
            </Routes>
            {location.pathname === '/' && <Home />}
            <BottomNav/>
            <Routes>
                <Route path={'/home/*'} element={<Home/>}/>
                <Route path={'/user-beers/*'} element={<User/>}/>
            </Routes>

        </>
    );
}

const router=createBrowserRouter(
    [{path:"*", Component: Root},]
);

export default function App(){
    return(
        <RouterProvider router={router}/>
    )
}

