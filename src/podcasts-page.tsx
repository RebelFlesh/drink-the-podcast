import PageLayout from './components/page-layout';
import styles from '../styles/Home.module.css'

const HomePage = () => (
  <PageLayout>
    <h1 className={styles.title}>
        Welcome to a List of Podcasts
    </h1>
  </PageLayout> 
)

export default HomePage;
