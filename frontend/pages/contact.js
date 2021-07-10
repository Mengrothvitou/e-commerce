import styles from '../styles/contact.module.css'
import emailjs from 'emailjs-com'
import {useToasts} from 'react-toast-notifications'
import {useEffect} from 'react'
import Slider from './../components/presentations/slider'

export default function Contact(){
    useEffect(()=>{
        document.title=" Contact || Next Store";
    })
    const {addToast}=useToasts();
function sendEmail(e){
    e.preventDefault();
    emailjs
        .sendForm(
            "commerce-12345",
            "template_zrpieih",
            e.target,
            "user_EIklteDhBRPRgHmzvJmE1"
        )
        .then(
            (result) => {
              console.log(result.text);
              addToast("Your message has successfully sent!", {
                appearance: 'success',
                autoDismiss: true,
              })
              
            },
            (err) => {
              console.log(err.text);
              addToast("Your message was not able to be sent!", {
                appearance: 'error',
                autoDismiss: true,
              })
            }
          );
    
}
    return(
        <div className={styles.full}>
            <Slider img="contact1.png" img="contact1.png"/>
            <div className={styles.container}>
                <h2 className={styles.contentTitle}>Contact Us</h2>
                <hr className={styles.line}></hr>
                <form onSubmit={sendEmail}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>First name:</label>
                            <input type="text" className={styles.input} placeholder="First name" />
                       </div>
                       <div className="form-group col-md-6">
                           <label>Last name:</label>
                            <input type="text" className={styles.input} placeholder="Last name" />
                       </div>
                    </div>
                       <div className="form-group">
                           <label>Phone number</label>
                            <input type="text" className={styles.input} placeholder="Phone Number" /> 
                       </div> 
                       <div className="form-group">
                           <label>Message</label>
                            <textarea name="message" className={styles.message} placeholder="Write something..." style={{height: 150}}></textarea>
                       </div>
                       <div className={styles.btnSubmit}>
                            <button type="submit" class={styles.submit}>Submit</button>
                        </div>
                </form>
            </div>





        </div>
    )

}