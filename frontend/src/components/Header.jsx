import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(9px + 2vmin);
`;

const StyledImage=styled.img`
    width: 50px;
`

export default function Header() {
    return (
        <>
            <HeaderWrapper>
                <h1>BeerMe <StyledImage src='/logo.webp' alt='BeerMe logo'></StyledImage></h1>
            </HeaderWrapper>
        </>
    );
}