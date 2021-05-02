import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div >
            {/* <div className="d-flex justify-content-center">
            <form className="form">
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                         </div>
                    
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div> */}

            <div className="container">
                <form action="">
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="name" name="name" />
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="10" placeholder="your Messeage" name="message"></textarea>
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="submit" value="send message" className="btn btn-info"/>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default Contact;