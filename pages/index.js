import style from '../styles/signup.module.css'
import Register from './register'
export default function Signup(){
  return(
    <div>
        <div className={style.mainSign}>
          <img src="bgSign.png" className={style.img}/>
            <div className={style.containers}>
                <div className={style.logo}>
                  <img src="logo.jpg" className={style.logoImg}/>
                </div>
                  <h2 className={style.signupNow}>Sign up Now!</h2>
                  <p>Please fill in this form to create an account.</p>
                  <hr/>
                  <label for="email"><b>Email</b></label>
                  <input type="text" id="email" placeholder="Enter Email" name="email" required></input>
                  <label for="psw"><b>Password</b></label>
                  <input type="password" id="password" placeholder="Enter Password" name="psw" required/>
                  <div className={style.btn}>
                    <button type="submit" class={style.signupbtn}><a href="/login" className={style.login}>Sign Up</a></button>
                  </div>
                  <div className={style.account}>
                    <p className={style.accountText}>Already have an account?<a href="#'"> Login</a></p>
                  </div>
            </div>
        </div>
    </div>
  )
}