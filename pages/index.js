import style from '../styles/signup.module.css'
import Register from './register'
import {useForm} from 'react-hook-form'
import { useContext } from 'react'
import Link from 'next/link'
// import {FormContext} from './../pages/context/FormContext'
// export default function Signup(){
//   return(
//     <div>
//         <div className={style.mainSign}>
//           <img src="bgSign.png" className={style.img}/>
//             <div className={style.containers}>
//                 <div className={style.logo}>
//                   <img src="logo.jpg" className={style.logoImg}/>
//                 </div>
//                   <h2 className={style.signupNow}>Sign up Now!</h2>
//                   <p>Please fill in this form to create an account.</p>
//                   <hr/>
//                   <label for="email"><b>Email</b></label>
//                   <input type="text" id="email" placeholder="Enter Email" name="email" required></input>
//                   <label for="psw"><b>Password</b></label>
//                   <input type="password" id="password" placeholder="Enter Password" name="psw" required/>
//                   <div className={style.btn}>
//                     <button type="submit" class={style.signupbtn}><a href="/login" className={style.login}>Sign Up</a></button>
//                   </div>
//                   <div className={style.account}>
//                     <p className={style.accountText}>Already have an account?<a href="#'"> Login</a></p>
//                   </div>
//             </div>
//         </div>
//     </div>
//   )
// }
const SignUp = () => {
  const {register, handleSubmit}=useForm()
  const onSubmit = (data)=>{
    alert(JSON.stringify(data));
    console.log(data);
  };
  // const {form,setForm}=useContext(FormContext)
  // console.log("form"+ form)
  return ( 
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
          <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name:</label>
            <input 
              type="text"
              placeholder="Enter first name" 
              className={style.input1} 
              name="First name" 
              ref={register({required:true})}>
            </input>
            <br></br>
            <label>Last Name:</label>
            <input 
              type="text"
              placeholder="Enter last name" 
              className={style.input1} 
              name="Last name" 
              ref={register({required:true})}>
            </input>
            <br></br>
            <label>Email:</label>
            <input 
              placeholder="Enter email" 
              className={style.input1} 
              type="email" 
              name="Email" 
              ref={register({required:true})}>

            </input>
            <br></br>
            <label>Create Password:</label>
            <input 
              placeholder="Create your password" 
              className={style.input1} 
              type="password" 
              name="Password" 
              ref={register({required:true,min:8, max:15,})}>
            </input>
            <br></br>
            <Link href="/login">
            <input 
              className={style.signupbtn} 
              type="submit" 
              value="Sign up"></input>
            </Link>
          </form>
          <div className={style.account}>
            <p className={style.accountText}>Already have an account?<a href="#'"> Login</a></p>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default SignUp;