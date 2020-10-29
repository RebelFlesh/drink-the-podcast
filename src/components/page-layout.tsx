import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Header from './header';
import Footer from './footer';

const PageLayout = ({title = 'Drink up', children}) => (
    <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.main}>
            {children}
        </main>
        <Footer />
  </>
)

export default PageLayout;