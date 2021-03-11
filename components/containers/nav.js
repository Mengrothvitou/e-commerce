import ActiveLink from '../../components/presentations/link'
import style from './../../styles/nav.module.css'
export default function Nav(){
    return(
        <div>
            <div className={style.nav}>
                <h1 className={style.title}>Eunoir</h1>
                <ActiveLink href="/" nav="Home"/>
                <ActiveLink href="/collection" nav="Collection"/>
                <ActiveLink href="/about" nav="About"/>
                <ActiveLink href="/contact" nav="Contact"/>
            </div>
        </div>
    )
}