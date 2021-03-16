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
        <div className="container-fluid">
          <h1 className="main-heading">Welcome to Our Store</h1>
          {/* Cosmetic */}
            <div className="row">
              <div className="col-4-lg">
              <h2 className={styles.titleCosmetic}>Cosmetic</h2>
                <div className="card">
                  <img src="cosmetic2.jpeg"></img>
                  <p className="card-title">BB Cream</p>
                </div>
              </div>
              <div className="col-4-lg">
                <div className="card">
                  <img src="cosmetic3.jpeg"></img>
                  <p className="card-title">Lipstick innerfree </p>
                </div>
              </div>
              <div className="col-4-lg">
                <div className="card">
                  <img src="cosmetic1.jpeg"></img>
                  <p className="card-title">Eyelinner innisfree </p>
                </div>
              </div>
              <div className="col-4-lg">
                <div className="card">
                  <img src="cosmetic4.jpeg"></img>
                  <p className="card-title">
                    Sleeping mask innisfree
                  </p>
                </div>
              </div>
            </div>
          {/* Clothes */}
          <div className="row">
            <h2 className={styles.titleClothes}>Clothes</h2>
              <div className="col-4-lg">
                <div className="card">
                  <img src="shirt.jpeg"></img>
                  <p className="card-title">Domnork</p>
                </div>
              </div>
              <div className="col-4-lg">
                <div className="card">
                  <img src="clothe1.jpeg"></img>
                  <p className="card-title">T-shirt</p>
                </div>
              </div>
              <div className="col-4-lg">
                <div className="card">
                  <img src="clothe3.jpeg"></img>
                  <p className="card-title">Addidas Hoody</p>
                </div>
              </div>
              <div className="col-4-lg">
                <div className="card">
                  <img src="clothe4.jpeg"></img>
                  <p className="card-title">
                    Sweater
                  </p>
                </div>
              </div>
            </div>
            {/* Watches */}
            <div className="row">
            <h2 className={styles.titleWatches}>Watches</h2>
              <div className="col-4-lg">
                <div className="card">
                  <img src="watch1.jpeg"></img>
                  <p className="card-title">PU Banteay Srei</p>
                </div>
              </div>
              <div className="col-4-lg">
                <div className="card">
                  <img src="watch2.jpeg"></img>
                  <p className="card-title">Tissot 1853</p>
                </div>
              </div>
              <div className="col-4-lg">
                <div className="card">
                  <img src="watch3.jpeg"></img>
                  <p className="card-title">Omega Sa 1969 </p>
                </div>
              </div>
              <div className="col-4-lg">
                <div className="card">
                  <img src="watch5.jpeg"></img>
                  <p className="card-title">
                    PU Oyster Engrave 
                  </p>
                </div>
              </div>
            </div>
            {/* Others */}
            <div className="row">
            <h2 className={styles.titleOthers}>Others...</h2>
              <div className="col-4-lg">
                <div className="card">
                  <img src="other1.jpeg"></img>
                  <p className="card-title">Shoes</p>
                </div>
              </div>
              <div className="col-4-lg">
                <div className="card">
                  <img src="other2.jpeg"></img>
                  <p className="card-title">Perfume</p>
                </div>
              </div>
              <div className="col-4-lg">
                <div className="card">
                  <img src="other3.jpeg"></img>
                  <p className="card-title">Bags</p>
                </div>
              </div>
              <div className="col-4-lg">
                <div className="card">
                  <img src="other4.jpeg"></img>
                  <p className="card-title">
                 Purse
                  </p>
                </div>
              </div>
            </div>
        </div>
     </div>
    )
  }