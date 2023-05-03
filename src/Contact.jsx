import React, { useState } from 'react';
import axios from 'axios'

;
function Contact() {

     const [fname, setFname] = useState("");
     const [email, setEmail] = useState("");
     const [text, setText] = useState("");
 
    
     const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/submit', { fname, email, text })
          .then((response) => {
            console.log(response.data);
            setFname('');
            setEmail('');
            setText('');
          })
          .catch((error) => {
            console.error(error);
          });
      };

    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Full Name' value={fname} onChange={(event)=>{
                    setFname(event.target.value)
                }} required/>
                <input type='email' placeholder='Type Your E-Mail 'value={email} onChange={(event)=>{
                    setEmail(event.target.value)
                }} required/>
                <textarea placeholder='Write Here.....' value={text}
                onChange={(event)=>{
                    setText(event.target.value)
                }}
                 name='message'></textarea>
                <button type='submit'  value='Send'>Submit</button>
            </form>
        </div>  
    )
}

export default Contact;