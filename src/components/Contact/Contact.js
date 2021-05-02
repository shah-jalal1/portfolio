import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cez88jp', 'template_cvotfn5', e.target, 'user_QTbCyiBBdkCtg65wdJscl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        // console.log("clicked");
    }
    return (
        <div className="contact">
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="name" name="from_name" />
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="10" placeholder="your Messeage" name="message"></textarea>
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="submit" value="send message" className="btn btn-info" />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contact;