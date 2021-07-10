import style from '../../styles/mainHeader.module.css'
const Header= ({title}) => {
    return (  
        <h2 className={style.header}>{title}</h2>
    );
}
 
export default Header;