import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 100%;
    height: 64px;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLink = styled.a`
    margin: 4px;
`;

const Header = () => (
    <StyledNav>
        <Link href={'/'} >
            <StyledLink>
                {'Home'}
            </StyledLink>
        </Link>
        <Link href={'/podcasts'} >
            <StyledLink>
                {'Podcasts'}
            </StyledLink>
        </Link>
        <Link href={'/about'} >
            <StyledLink>
                {'About'}
            </StyledLink>
        </Link>
    </StyledNav>
);

export default Header;
