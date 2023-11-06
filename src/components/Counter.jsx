import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const increnment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <button className='button' onClick={increnment}>
        Increment +{' '}
      </button>
      <h2>{count}</h2>
      <button className='button' onClick={decrement}>
        Decrement -{' '}
      </button>
    </div>
  )
}
export default Counter
