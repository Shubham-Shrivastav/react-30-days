import React from 'react'
import TextInput from './InputFields/TextInput'
import Number from './InputFields/Number'
import Password from './InputFields/Password'
import InputImage from './InputFields/InputImage'
import Gender from './Gender'

const Form = () => {
  return (
    <div>
      <TextInput />
      <Gender />
      <Number />
      <Password />
      <InputImage />
      <label>
        Check if you agree for all the T&C<input type='checkbox'></input> <br />
      </label>
      <input
        type='button'
        value='Submit'
      ></input>
    </div>
  )
}

export default Form
