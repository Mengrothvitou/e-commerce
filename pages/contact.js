import styles from '../styles//contact.module.css'
export default function Contact(){
    return(
        <div>
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
                <h2 className={styles.contentTitle}><ins>Contact Us</ins></h2>
                <form>
                    <div className="form-row">
                       <div className="form-group col-md-6">
                            <label>First name</label>
                            <input type="text" className={styles.formControl} placeholder="First name"/>
                       </div>
                       <div className="form-group col-md-6">
                            <label>Last name</label>
                            <input type="text" className={styles.formControl} placeholder="Last name"/>
                       </div>
                    </div>
                       <div className="form-group">
                            <label>Phone number</label>
                            <input type="text" className={styles.formControl} placeholder="Phone number"/>
                       </div>
                       <div className="form-group">
                            <label>Message</label>
                            <input type="textarea" className="form-control" placeholder="Your message..."/>
                       </div>
                       <div className={styles.btnSubmit}>
                            <button type="submit" class={styles.submit}>Submit</button>
                        </div>
                </form>
            </div>





        </div>
    )

}