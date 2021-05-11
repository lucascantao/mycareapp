import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Calculator from '../../components/Calculator'
import Navbar from '../../components/Navbar'
import Profile from '../../components/Profile'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Care</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Profile />
      <Calculator />


      <footer className={styles.footer}>
        <a
          href="https://github.com/lucascantao"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/lucascantao
        </a>
      </footer>
    </div>
  )
}