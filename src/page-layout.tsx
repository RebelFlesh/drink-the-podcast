import Head from 'next/head'
import styles from '../styles/Home.module.css'

const PageLayout = ({title = 'Drink up', children}) => (
    <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav className={styles.header}>
            {'Header links'}
        </nav>
        <main className={styles.main}>
            {children}
        </main>
        <footer className={styles.footer}>
            {'Footer links'}
        </footer>
  </>
)

export default PageLayout;