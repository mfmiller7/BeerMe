import Country from "./pages/Country.jsx";
import Navigation from "./components/Navigation.jsx";
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import User from "./pages/User.jsx";

import {useEffect} from "react";
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
    useEffect(() => {}, [location]);

    const countries = [
        'belgium', 'czech', 'denmark', 'finland', 'ireland',
        'italy', 'luxembourg', 'malta', 'norway', 'poland',
        'portugal', 'spain', 'sweden', 'switzerland'
    ];

    return (
        <>
            <GlobalStyle />
            <Header />
            <Navigation/>
            <Routes>
                {countries.map(country => (
                    <Route key={country} path={`/${country}/*`} element={<Country country={country}/>}/>
                ))}
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

const router = createBrowserRouter([{path:"*", Component: Root}]);

export default function App(){
    return(
        <RouterProvider router={router}/>
    );
}



// function Root() {
//     const location = useLocation();
//     useEffect(() => {}, [location]);
//     return (
//         <>
//             <GlobalStyle />
//             <Header />
//             <Navigation/>
//             <Routes>
//                 <Route path={'/belgium/*'} element={<Country country={'belgium'}/>}/>
//                 <Route path={'/czech/*'} element={<Country country={'czech'}/>}/>
//                 <Route path={'/denmark/*'} element={<Country country={'denmark'}/>}/>
//                 <Route path={'/finland/*'} element={<Country country={'finland'}/>}/>
//                 <Route path={'/ireland/*'} element={<Country country={'ireland'}/>}/>
//                 <Route path={'/italy/*'} element={<Country country={'italy'}/>}/>
//                 <Route path={'/luxembourg/*'} element={<Country country={'luxembourg'}/>}/>
//                 <Route path={'/malta/*'} element={<Country country={'malta'}/>}/>
//                 <Route path={'/norway/*'} element={<Country country={'norway'}/>}/>
//                 <Route path={'/poland/*'} element={<Country country={'poland'}/>}/>
//                 <Route path={'/portugal/*'} element={<Country country={'portugal'}/>}/>
//                 <Route path={'/spain/*'} element={<Country country={'spain'}/>}/>
//                 <Route path={'/sweden/*'} element={<Country country={'sweden'}/>}/>
//                 <Route path={'/switzerland/*'} element={<Country country={'switzerland'}/>}/>
//             </Routes>
//             {location.pathname === '/' && <Home />}
//             <BottomNav/>
//             <Routes>
//                 <Route path={'/home/*'} element={<Home/>}/>
//                 <Route path={'/user-beers/*'} element={<User/>}/>
//             </Routes>
//
//         </>
//     );
// }
//
// const router=createBrowserRouter(
//     [{path:"*", Component: Root},]
// );
//
// export default function App(){
//     return(
//         <RouterProvider router={router}/>
//     )
// }