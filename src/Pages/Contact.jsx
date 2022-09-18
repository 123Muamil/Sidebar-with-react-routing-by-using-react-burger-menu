import React,{useRef} from 'react'
import banner1 from '../Assests/Images/banner1.jpg'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_tlwe2up', 'template_q556ept', form.current, 'aG6SyJh9OaHvbcORR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <div>
       <div>
     <img src={banner1} alt='login' style={{width:'100%',height:'200px',objectFit:'cover',paddingBottom:'30px'}}/>
     </div>
     <div  className='container'>
<section className="mb-4">
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form"   ref={form} onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label htmlFor="name" className="">Your name</label>
                        </div>
                    </div>
            
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control"/>
                            <label htmlFor="email" className="">Your email</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            <label htmlFor="subject" className="">Subject</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label htmlFor="message">Your message</label>
                        </div>

                    </div>
                </div>
               
                <div className="text-center text-md-left">
                <button className="btn btn-primary" type='submit' >Send</button>
            </div>
            </form>

           
            <div className="status"></div>
        </div>
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li>
                <a href='#' style={{textDecoration:'none',color:'red'}}>
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Chack#139A TDA,Layyah, Punjab, Pakistan</p>
                    </a>
                </li>
                <li>
                <a href='https://wa.me/1XXXXXXXXXX/923078761165' style={{textDecoration:'none',color:'red'}}>
                    <i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>03078761165</p>
                    </a>
                </li>

                <li><a href='https://mail.google.com/' style={{textDecoration:'none',color:'red'}}>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>123muzamil.iqbal@gmail.com</p>
                </a>
                </li>
            </ul>
        </div>
     

    </div>

</section>
</div>
    </div>
  )
}

export default Contact
