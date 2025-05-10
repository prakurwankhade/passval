import validator from 'validator';
import { useState } from 'react';

const PassVal = () => {
  const[errorMessage, setErrorMessage] = useState('')

  const validate = (value) => {
    if(validator.isStrongPassword(value, {
      minLength: 8, minLowercase:1,
      minUppercase: 1, minNumber: 1, minSymbols:1
    }))
    {
      setErrorMessage(' Is Strong Password')
    }
    else{
      setErrorMessage(' Is Not a Strong Password')
    }
  }

  return(
    <div style={{
      margin:'200px',
      border:'0.5px solid white',
      padding:'20px', 
      
    }}>
    <pre>
      <h2>Checking Password Strength in ReactJs</h2>
      <h2>A Strong password includes an Upper case, lower case, and a Special character</h2>
      <span style={{
        fontSize:'24px'
      }}>Enter Password: </span><input type="text"
      onChange={(e) => validate(e.target.value)} style={{
        width: '200px',
        height: '35px'
      }}></input>
      {errorMessage === '' ? null : 
         <span style={{
          fontWeigth: 'bold',
          color: 'red',
          fontSize: '24px',
         }}>{errorMessage}</span>
      }
    </pre>
    </div>
  )
}
export default PassVal;