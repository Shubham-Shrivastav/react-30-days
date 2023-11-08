import React, { useState } from 'react'

const TextInput = () => {
  const [text, setText] = useState('')
  function handleChange (e) {
    setText(e.target.value)
  }

  return (
    <div>
        <label >
        Name :
      <input value={text} onChange={handleChange}></input>
      </label>
      <p>The name is : {text}</p>
    </div>
  )
}

export default TextInput
