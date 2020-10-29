import styled from 'styled-components'

import PageLayout from './components/page-layout';

const StyledH1 = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const PodcastsPage = () => (
  <PageLayout>
    <StyledH1>
        Welcome to a List of Podcasts
    </StyledH1>
  </PageLayout> 
)

export default PodcastsPage;
