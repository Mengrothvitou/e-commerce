import styles from '../../styles/signImage.module.css'
export default function signImage(props){
    return(
        <div>
            <img src={props.src} className={styles.img}/>
        </div>
        )
}