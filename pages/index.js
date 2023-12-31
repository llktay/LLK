import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SubscribeBar from '@/components/subscribe/subscribe.component'

import LandingBackground from '@/components/landing-page/landing-background.component'

const inter = Inter({ subsets: ['latin'] })

function Home(props) {
  return (
    <>
    
      <Head>
        <title>Lovelace Kendama</title>
        <meta name="description" content="Home of the Love Handle and Love Taq" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {/* <LandingBackground /> */}
        <SubscribeBar />
        </main>
    </>
  );
};

export default Home;