import { BOT_TOKEN, CHAT_ID, TELEGRAM_API } from "../env";
import ky from "ky";
import { useState } from "react";
import {toast} from "react-toastify";
import { lazy, Suspense } from 'react';
import InputField from "./InputField";
import contacts from '../data/contContactsSecData.json'
lazy(() => import('../assets/scss/contacts.scss'));
const Select  = lazy(() => import('react-select'));
// import '../assets/scss/contacts.scss'
// import Select from 'react-select';

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
    backgroundColor: 'transparent',
    border: '0',
    outline: '0',
    borderBottom: '1px solid rgb(137, 137, 137, 0.75)',
    borderRadius: '0',
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'rgb(137, 137, 137, 0.75)',
    },
    '&:focus': {
      border: '1px solid rgb(137, 137, 137, 1)',
    }
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    background: isFocused
      ? 'rgba(89,89,89,0.5)'
      : isSelected
      ? '#030303' :
      undefined,
    fontSize: '18px',
    fontFamily: 'Hubot Sans, sans-serif',
    letterSpacing: '0.08rem',
    color: '#D0D0D0'
  })
}

function ContactForm({title}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedOpt, setSelectedOpt] = useState(null);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [selectError, setSelectError] = useState('');

  const handleOptChange = (selectedOpt) => {
    setSelectedOpt(selectedOpt) 
    setSelectError(''); 
  }
  
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

    if (!selectedOpt) {
      setSelectError('Select a target'); 
      isValid = false;
    } else {
      setSelectError(''); 
      isValid = true;
    }
    
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

    let text = `
<b>Name:</b> ${name}
<b>Email:</b> ${email}
<b>Message:</b> ${message}
    `;
    if (selectedOpt && selectedOpt.label) {
      text = `<b>Target:</b> ${selectedOpt.label}
    ${text}`;
    }
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
        setSelectedOpt(null)
      }
    } catch(error) {
      toast.error("Some error. Try again later")
    }
  }

  return (
    <>
      <form className="form" onSubmit={submitHandler} data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500">
          {!title && (
            <div className={selectError !== '' ? 'select-element has-error' : 'select-element'}>
              <Suspense fallback={'loading'}>
                <Select
                autoFocus
                defaultValue={selectedOpt}
                onChange={handleOptChange}
                options={options}
                styles={customStyles}
                placeholder='Select target'
                isClearable={true}
                />
              </Suspense>
          {selectError && <p className="input-error">{selectError}</p>}
        </div>
      )}

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

        <button type="submit" className="btn form-btn-hover"><span>{contacts.formBtnText}</span></button>
      </form> 
    </>
  )
}

export default ContactForm;