import styles from './../../styles/text.module.css'
export default function Text(children){
    return(
        <div>
            <p className={styles.text}>{children}</p>
        </div>
 )
}