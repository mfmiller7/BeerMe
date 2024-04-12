import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(9px + 2vmin);
    color: lightgrey;
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <h1>BEERS</h1>
        </HeaderWrapper>
    );
}