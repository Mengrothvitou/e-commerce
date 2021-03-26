import style from '../styles/signup.module.css'
export default function Login(){
    return(
        <div>
            <div className={style.mainSign}>
              <img src="bgSign.png" className={style.img}/>
                <div className={style.containers}>
                    <div className={style.logo}>
                      <img src="logo.jpg" className={style.logoImg}/>
                    </div>
                      <h2 className={style.signupNow}>Welcome Back!</h2>
                      <hr/>
                      <label for="email"><b>Email:</b></label>
                      <input type="text" id="email" placeholder="Type your email" name="email" required></input>
                      <label for="psw"><b>Password</b></label>
                      <input type="password" id="password" placeholder="Type your password" name="psw" required/>
                      <div className={style.btn}>
                        <button type="submit" class={style.signupbtn}><a href="/home" className={style.login}>Login</a></button>
                      </div>
                      <div className={style.account}>
                        <a hre="#">Forgot your password</a>
                        <br/>
                        <a href="/">Register</a>
                      </div>
                </div>
            </div>
        </div>
      )
}