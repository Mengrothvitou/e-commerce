
export default function Image(props){
    return(
        <div>
            <img src={props.src} className={styles.img}/>
        </div>
        )
}