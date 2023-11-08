import React, { useState } from 'react'

const Password = () => {
  const [pass, setPass] = useState()
  function handleChange (e) {
    setPass(e.target.value)
  }

  return (
    <div>
      <label>
        Choose Password :<input type='password' value={pass} onChange={handleChange}></input>
      </label>
    </div>
  )
}

export default Password
