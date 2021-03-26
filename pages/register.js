import style from '../styles/register.module.css'
import Link from 'next/link'

const  Register= () => {
    return (  
        <div>
            <Link href="/login" classname={style.signup}>Sign up</Link>
        </div>
    );
}
 
export default Register;