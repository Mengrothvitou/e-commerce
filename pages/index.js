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
        <div className="containr mt-4">
                <h2 className="text-center1">Welcome to Our Store</h2>
                {/* Cosmetic */}
                <h2 className="text-left m-3">Cosmetic</h2>
                <div className="row">
                    <div className="column">
                        <div className="demo-content">
                            <img src="cosmetic2.jpeg" className="img-container"></img>
                            <p className="card-title">BB Cream</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="demo-content">
                            <img src="cosmetic3.jpeg" className="img-container"></img>
                            <p className="card-title">Lipstick innisfree</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="demo-content">
                            <img src="cosmetic1.jpeg" className="img-container"></img>
                            <p className="card-title">Eyelinner innisfree</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="demo-content">
                            <img src="cosmetic4.jpeg" className="img-container"></img>
                            <p className="card-title">Sleeping mask innisfree</p>
                        </div>
                    </div>
                </div>

                {/* Clothes */}
                <h2 className="text-left m-3">Clothes</h2>
                <div className="row">
                    <div className="column">
                        <div className="demo-content">
                            <img src="shirt.jpeg" className="img-container"></img>
                            <p className="card-title">Domnork T-shirt</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="demo-content">
                            <img src="clothe1.jpeg" className="img-container"></img>
                            <p className="card-title">T-shirt</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="demo-content">
                            <img src="clothe3.jpeg" className="img-container"></img>
                            <p className="card-title">Addidas Hoody</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="demo-content">
                            <img src="clothe4.jpeg" className="img-container"></img>
                            <p className="card-title">Sweater</p>
                        </div>
                    </div>
                </div>

                {/* Watches */}
                <h2 className="text-left m-3">Watches</h2>
                <div className="row">
                    <div className="column">
                        <div className="demo-content">
                            <img src="watch1.jpeg" className="img-container"></img>
                            <p className="card-title">Pu Banteay Srei</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="demo-content">
                            <img src="watch2.jpeg" className="img-container"></img>
                            <p className="card-title">Tissot 1853</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="demo-content">
                            <img src="watch3.jpeg" className="img-container"></img>
                            <p className="card-title">Omega Sa 1969</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="demo-content">
                            <img src="watch4.jpeg" className="img-container"></img>
                            <p className="card-title">Pu Oyster Engrave</p>
                        </div>
                    </div>
                </div>

                {/* Others */}
                <h2 className="text-left m-3">Others</h2>
                <div className="row">
                    <div className="column">
                        <div className="demo-content">
                            <img src="other1.jpeg" className="img-container"></img>
                            <p className="card-title">Shoe</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="demo-content">
                            <img src="other2.jpeg" className="img-container"></img>
                            <p className="card-title">Perfume</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="demo-content">
                            <img src="other3.jpeg" className="img-container"></img>
                            <p className="card-title">Bags</p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="demo-content">
                            <img src="other4.jpeg" className="img-container"></img>
                            <p className="card-title">Purse</p>
                        </div>
                    </div>
                </div>

            </div>
      </div>
    )
  }