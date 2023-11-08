import React, { useState } from 'react'

const Number = () => {
  const [num, setNum] = useState()
  function handleChange (e) {
    setNum(e.target.value)
  }

  return (
    <div>
      <label>
        Age :
        <input
          type='number'
          min='17'
          max='50'
          value={num}
          onChange={handleChange}
        ></input>
      </label>
      <br />
      <label>
        Contact Number :<input type='tel'></input> <br />
      </label>
    </div>
  )
}

export default Number
