import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const StyledNav=styled.nav`
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        width: 100%;
    }
    li {
        float: left;
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

export default function Navigation() {
    const countries = [
        'belgium', 'czech', 'denmark', 'finland', 'ireland',
        'italy', 'luxembourg', 'malta', 'norway', 'poland',
        'portugal', 'spain', 'sweden', 'switzerland'
    ];

    return (
        <>
            <StyledNav>
                <ul>
                    {countries.map(country => (
                        <li key={country}>
                            <NavLink to={`/${country}`}>{country.toUpperCase()}</NavLink>
                        </li>
                    ))}
                </ul>
            </StyledNav>
        </>
    )
}


// export default function Navigation() {
//     return (
//         <>
//             <StyledNav>
//                 <ul>
//                     <li><NavLink to={'/belgium'}>Belgium</NavLink></li>
//                     <li><NavLink to={'/czech'}>Czech</NavLink></li>
//                     <li><NavLink to={'/denmark'}>Denmark</NavLink></li>
//                     <li><NavLink to={'/finland'}>Finland</NavLink></li>
//                     <li><NavLink to={'/ireland'}>Ireland</NavLink></li>
//                     <li><NavLink to={'/italy'}>Italy</NavLink></li>
//                     <li><NavLink to={'/luxembourg'}>Luxembourg</NavLink></li>
//                     <li><NavLink to={'/malta'}>Malta</NavLink></li>
//                     <li><NavLink to={'/norway'}>Norway</NavLink></li>
//                     <li><NavLink to={'/poland'}>Poland</NavLink></li>
//                     <li><NavLink to={'/portugal'}>Portugal</NavLink></li>
//                     <li><NavLink to={'/spain'}>Spain</NavLink></li>
//                     <li><NavLink to={'/sweden'}>Sweden</NavLink></li>
//                     <li><NavLink to={'/switzerland'}>Switzerland</NavLink></li>
//                 </ul>
//             </StyledNav>
//         </>
//     )
// }