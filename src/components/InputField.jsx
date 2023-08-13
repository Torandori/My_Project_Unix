import { useId } from "react"
import '../assets/scss/contacts.scss'


function InputField({name, change, label, value, error, multy, blur}){
  const inputId = useId();

  function changeHandler(event){
    change(event.target.value)
  }

  function blurHandler(event){
    blur(event.target.value)
  }

  return (
    <div className={error !== '' ? 'form-element has-error' : 'form-element'}>
      <div className={error !== '' ? 'has-error' : null}>
        {multy
          ? <textarea name="more" placeholder=" " id={inputId} onChange={changeHandler} onBlur={blurHandler} value={value} /> 
          : <input type="text" name={name} placeholder=" " id={inputId} onChange={changeHandler} onBlur={blurHandler} value={value} />
        }
        <label className="fake" htmlFor={inputId} >{label}</label>
      </div>
        {error !== '' ? (<p className="input-error">{error}</p>) : null}
    </div>
  )
}

export default InputField;