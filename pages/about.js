import styles from '../styles/about.module.css'
export default function About(){
    return(
        <div>
            <div className={styles.container}>
                <p className={styles.square1}></p>
                <img src="me.jpeg" className={styles.img}/>
            </div>
        </div>
            )
}