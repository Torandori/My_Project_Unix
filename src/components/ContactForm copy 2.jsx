import { BOT_TOKEN, CHAT_ID, TELEGRAM_API } from "../env";
import ky from "ky";
import { useState } from "react";
import {toast} from "react-toastify";
import InputField from "./InputField";
import contacts from '../data/contContactsSecData.json'
import '../assets/scss/contacts.scss'
import Select from 'react-select';

const options = [
  { value: 'start a project', label: 'Project' },
  { value: 'start your career', label: 'Career' },
];

const customStyles = {
  menuList: styles => ({
    ...styles,
    background: '#030303',
  }),
  control: styles => ({
    ...styles,
    background: '#1a1a1a',
    border: '0',
    outline: '0',
    borderBottom: '1px solid rgb(137, 137, 137, 0.75)',
    borderRadius: '0',
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'rgb(137, 137, 137, 0.75)',
    },
    '&:focus': {
      border: '1px solid rgb(137, 137, 137, 0.75)',
    }
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    background: isFocused
      ? 'rgba(89,89,89,0.5)'
      : isSelected
      ? '#030303' :
      undefined,
    zIndex: 1,
    fontSize: '18px',
    fontFamily: 'Hubot Sans, sans-serif',
    letterSpacing: '0.08rem',
    color: '#D0D0D0'
  }),
  // menu: base => ({
  //   ...base,
  //   zIndex: 100,
  // }),
}

function ContactForm({drop}) {
  console.log(drop)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const [selectedOpt, setSelectedOpt] = useState('');
  // const handleOptChange = (event) => {
  //   const val = event.target.value
  //   setSelectedOpt(val) 
  // }

  
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
  console.log(selectedOpt)

  return (
    <form className="form" onSubmit={submitHandler}>
      {!drop && 
        <Select
        autoFocus
        defaultValue={selectedOpt}
        onChange={setSelectedOpt}
        options={options}
        styles={customStyles}
        placeholder='Select target'
        />
      }
            {/* {drop && <div>My drop</div>} */}
      {/* {drop && 
        <select value={selectedOpt} onChange={handleOptChange} className="select">
          <option value="opt1">Start a project</option>
          <option value="opt2">Start a career</option>
        </select>
      } */}

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