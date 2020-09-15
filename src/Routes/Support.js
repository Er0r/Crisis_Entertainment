import React from "react";
import emailjs from "emailjs-com";
import "../Assets/Support.css";

const FormPage = () => {

    function sendEmail(e) {
        e.preventDefault();
        
    emailjs.sendForm('gmail', 'testing_email', e.target, 'user_rAVoQtXer3r6TneuL4ZrD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }


    return (
        <div>
            <div className="container">
                <h1>Welcome To Support Page</h1>
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>          
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/> 
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>    
            </div>
        </div>
    );
};

export default FormPage;