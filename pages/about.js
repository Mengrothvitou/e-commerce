import { useEffect } from 'react'
import styles from '../styles/about.module.css'
import Slider from './../components/presentations/slider'
export default function About(){
    useEffect(() =>{
        document.title=" About Us || Next Store";
    })
    return(
        <div>
            <Slider img="about.png" img="about2.jpeg"/>
            <div className={styles.titleBody}>
                <h2 className={styles.title}>About Us</h2>
            </div>
            <div className={styles.bodyContent}>
                <h2 className={styles.subtitle}>OUR VISION</h2>
                <div className={styles.fullcontent}>
                    <p className={styles.content}>
                        An online store with all the tools you need to build, manage, and grow your business. 
                        Our store in minutes with shipping, tax, payment, advertising options ready. Seamless Upgrades.
                        Always Free Plan. Lightning Fast. Existing Site Integration. Mirrow ON Mutiple Sites.
                    </p>
                </div>
                <img src="about2.png" className={styles.imgAbout}></img>
            </div>
                <section className="services ptb-80">
                    <div className="container">
                    <h2 className={styles.title}>Meet Our Team</h2>
                        <div className="content-col-wrapper d-grid">
                            <div className="content-col-image">
                                <div className="wrapper">
                                    <div className="card front-face">
                                        <img src="tou.png"></img>
                                        <h1 className={styles.name}>Developer</h1>
                                    </div>
                                    <div className="card back-face">
                                        <img src="tou.jpeg"></img>
                                        <div className="info">
                                            <div className="title">Meng Rothvitou</div>
                                            <p>My name is Meng Rothvitou.I'm 16 years old , I studied at Lycee Preah Sisowath, and I'm a freshman developer at Sabai Code</p>
                                        </div>
                                        <ul>
                                            <a target='_blank' href={'https://www.facebook.com/mrr.tou.77/'}><i className="fa fa-facebook"/></a>
                                            <a target='_blank' href={'#'}><i className="fa fa-instagram"/></a>
                                            <a target='_blank' href={'#'}><i className="fa fa-twitter"/></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="content-col-image">
                                <div className="wrapper">
                                    <div className="card front-face">
                                        <img src="sien.png"></img>
                                        <h1 className={styles.name}>Designer</h1>
                                    </div>
                                    <div className="card back-face">
                                        <img src="sien.png"></img>
                                        <div className="info">
                                            <div className="title">Thri Chingsien</div>
                                            <p>My name is Thri Chingsien.I'm 17 years old , I studied at High school, and I'm a developer and designer at Sabai Code</p>
                                        </div>
                                        <ul>
                                            <a target='_blank' href={'https://www.facebook.com/chingsien.thri.5'}><i className="fa fa-facebook"/></a>
                                            <a target='_blank' href={'#'}><i className="fa fa-instagram"/></a>
                                            <a target='_blank' href={'#'}><i className="fa fa-twitter"/></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}