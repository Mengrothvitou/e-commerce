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
          <h1>Hello</h1>
     </div>
    )
  }