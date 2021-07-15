import style from './../../styles/signup.module.css'
import {useForm } from 'react-hook-form'
import Link from 'next/link'
import React, {useContext} from 'react'
import {FormContext} from './../../context/FormContext'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {useToasts} from 'react-toast-notifications'
const Login = () => {
  const {addToast}=useToasts()
  useEffect(()=>{
    document.title=" Login || Next Store";
  })
  const {form, setForm}=useContext(FormContext)
  const router = useRouter()
  const { register, handleSubmit, errors } = useForm()
  console.log(form)
  const onSubmit = (data)=>{
    if(form.Email==data.Email && form.Password==data.Password){
      router.push(`/adminorderlist`)
    }
    else{
        addToast("Wrong password",{
        appearance:'error',
    })
    }
    

  };
    return(
        <div>
            <div className={style.mainLoginadmin}>
                <div className={style.container}>
                      <h2 className={style.loginAdmin}>Admin Login {form.username}</h2>
                      <form onSubmit={handleSubmit(onSubmit)}>
                      <label className={style.label}>Email:</label>
                        <input 
                          placeholder="Type your email" 
                          className={style.input1} 
                          type="email" 
                          name="Email" 
                          ref={register({
                            required: "Email is required"
                          })}>
                        </input>
                        {errors.Email && <span className={style.message}>{errors.Email.message}</span>}
                        <br></br>
                        <label className={style.label}>Password:</label>
                        <input 
                          placeholder="Type your password" 
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
                        <button type="submit" className={style.loginbtn}>Login</button>      
                        </form>

                </div>
            </div>
        </div>
      )
}
export default Login;