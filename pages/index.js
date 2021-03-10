import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '../components/presentations/button'
import Link from 'next/link'
import Image from '../components/presentations/image'

export default function Home() {
    return (
      <div>
          <Image
            src="/home.jpeg"
            className={styles.imgHome}
          />
          <h1 className={styles.h1}>Welcome to Eunoir Online shop</h1>
          <div className={styles.img}>
            <Image
            src="/bags.jpeg"
            className={styles.imgBags}/>
            <Image
            src="/shirt.jpeg"
            className={styles.imgShirt}/>
            <Image
            src="/wallet.jpeg"
            className={styles.imgWallet}
            />
            <Image
            src="/shoe.jpeg"
            className={styles.imgShoe}
            />
          </div>
     </div>
    )
  }