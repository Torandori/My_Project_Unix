import { BOT_TOKEN, CHAT_ID, TELEGRAM_API } from "../env";
import ky from "ky";
import { useState } from "react";
import {toast} from "react-toastify";
// import { Exception } from "sass";
import InputField from "./InputField";
import contacts from '../data/contContactsSecData.json'

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  
  
  function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  function checkName(value){
    if(value !== '' && nameError !== ''){
      setNameError('')
    } 
  }
  function checkEmail(value){
    if(value !== '' &&  isValidEmail(value) && emailError !== ''){
      setEmailError('')
    } 
  }
  function checkMessage(value){
    if(value !== '' && messageError !== ''){
      setMessageError('')
    } 
  }

  async function submitHandler(event){
    event.preventDefault()

    let isValid = true;
    
    if(name === ''){
      setNameError('Enter your name')
      isValid = false
    } else {
      setNameError('')
    }
    if(email === ''){
      setEmailError('Enter your email')
      isValid = false
    } else {
      if(isValidEmail(email)){
        setEmailError('')
        isValid = true
      } else {
        setEmailError('Email is invalid')
        isValid = false
      }
    }
    if(message === ''){
      setMessageError('Enter your text')
      isValid = false
    } else {
      setMessageError('')
    }

    if(!isValid){
      return false
    }

    const text = `
<b>Name:</b> ${name}
<b>Email:</b> ${email}
<b>Message:</b> ${message}
    `;
    const formData = new FormData();
    formData.append('chat_id', CHAT_ID);
    formData.append('text', text);
    formData.append('parse_mode', 'HTML');

    try {
      const resp = await ky.post(`${TELEGRAM_API}${BOT_TOKEN}/sendMessage`, {
        body: formData,
      }).json();
      console.log(resp);
      if(resp.ok){
        toast.success('Thanks!')
        setName('')
        setEmail('')
        setMessage('')
      }
    } catch(error) {
      toast.error("Some error. Try again later")
    }
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <InputField 
        multy={false} 
        label="Your name" 
        value={name} 
        change={(val) => setName(val)}
        blur={(val) => checkName(val)} 
        error={nameError}/>

      <InputField 
        multy={false} 
        label="Email" 
        value={email} 
        change={(val) => setEmail(val)} 
        blur={(val) => checkEmail(val)} 
        error={emailError}/>


      <InputField 
        multy={true} 
        label="Tell more" 
        value={message} 
        change={(val) => setMessage(val)} 
        blur={(val) => checkMessage(val)} 
        error={messageError}/>

      <button type="submit" className="btn form-btn" data-wow-delay=".5s"><span>{contacts.formBtnText}</span></button>
    </form> 
  )
}

export default ContactForm;