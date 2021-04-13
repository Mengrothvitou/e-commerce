import styles from '../styles//contact.module.css'
import emailjs from 'emailjs-com'
import {useToasts} from 'react-toast-notifications'
import { faStaylinked } from '@fortawesome/free-brands-svg-icons';
import {useEffect} from 'react'

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
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="contact1.png" className="d-block w-100 img-fluid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="about.png" className="d-block w-100 img-fluid" alt="..."/>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <h2 className={styles.contentTitle}>Contact Us</h2>
                <form onSubmit={sendEmail}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className={styles.input} placeholder="First name" />
                       </div>
                       <div className="form-group col-md-6">
                            <input type="text" className={styles.input} placeholder="Last name" />
                       </div>
                    </div>
                       <div className="form-group">
                            <input type="text" className={styles.input} placeholder="Phone Number" /> 
                       </div> 
                       <div className="form-group">
                            <textarea name="message" className={styles.message} placeholder="Write something..."></textarea>
                       </div>
                       <div className={styles.btnSubmit}>
                            <button type="submit" class={styles.submit}>Submit</button>
                        </div>
                </form>
            </div>





        </div>
    )

}