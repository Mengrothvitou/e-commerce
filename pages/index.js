import style from '../styles/signup.module.css'
import {useForm} from 'react-hook-form'
import { useContext } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {FormContext} from './../context/FormContext'
import {useEffect} from 'react'

const SignUp = () => {
  useEffect(()=>{
    document.title=" Sign Up || Next Store";
  })
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter()
  const {form,setForm}=useContext(FormContext)
  const onSubmit = (data)=>{
    setForm(data)
    router.push('/login')
  };
  

  return ( 
    
    <div>
      <div className={style.mainSign}>
        <div className={style.containers}>
          <div className={style.logo}>
            <img src="logo.jpg" className={style.logoImg}/>
          </div>
          <h2 className={style.signupNow}>Sign up Now!</h2>
          <p>Please fill in this form to create an account.</p>
          <hr/>
          <form onSubmit={handleSubmit(onSubmit)}>
          <label className={style.label}>User Name:</label>
            <input 
              type="text"
              placeholder="Enter username" 
              className={style.input1} 
              name="username" 
              ref={register({
                required: "Username is required"
              })}>
            </input>
            {errors.username && <span className={style.message}>{errors.username.message}</span>}
            <br></br>
            <label className={style.label}>Email:</label>
            <input 
              placeholder="Enter email" 
              className={style.input1} 
              type="email" 
              name="Email" 
              ref={register({
                required: "Email is required"
              })}>
            </input>
            {errors.Email && <span className={style.message}>{errors.Email.message}</span>}
            <br></br>
            <label className={style.label}>Create Password:</label>
            <input 
              placeholder="Create your password" 
              className={style.input1} 
              type="password" 
              name="Password" 
              ref={register({
                required: "Password is required",
                minLength: { value: 6, message: 'Password must be at least 6 characters long' },
                maxLength: { value: 15, message: 'Password must be shorter than 15 characters' },
              })}>
            </input>
            {errors.Password && <span className={style.message}>{errors.Password.message}</span>}
            <br></br>
            <button type="submit" className={style.signupbtn}>Create account</button>
          </form>
          <div className={style.account}>
            <p className={style.accountText}>Already have an account?<a href="/login" className={style.link2}> <ins>Login</ins></a></p>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default SignUp;