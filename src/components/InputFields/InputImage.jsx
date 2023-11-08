import React, { useState } from 'react'

const InputImage = () => {
  const [img, setImg] = useState()
  function handleChange (e) {
    setImg(e.target.value)
  }

  return (
    <div>
      <label>
        Choose Profile image :<input type='file' value={img} onChange={handleChange}></input>
      </label>
    </div>
  )
}

export default InputImage
