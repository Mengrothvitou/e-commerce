import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '../components/presentations/button'
import Link from 'next/link'
import Image from '../components/presentations/image'
export default function Home() {
    return (
      <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="home.jpeg" className="d-block w-100 img-fluid" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="home1.jpeg" className="d-block w-100 img-fluid" alt="..."/>
            </div>
          </div>
        </div>
        <p className={styles.header}>Welcome to Next Store Fashion</p>
     </div>
    )
  }