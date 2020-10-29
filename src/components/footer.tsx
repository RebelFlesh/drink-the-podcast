import styled from 'styled-components';

const StyledFooter = styled.nav`
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = () => (
    <StyledFooter>
        {'Footer links'}
    </StyledFooter>
);

export default Header;
