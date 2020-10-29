import Head from 'next/head';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';

const StyledMain = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PageLayout = ({title = 'Drink up', children}) => (
    <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <StyledMain>
            {children}
        </StyledMain>
        <Footer />
  </>
)

export default PageLayout;