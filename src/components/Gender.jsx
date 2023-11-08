import React from 'react'

const Gender = () => {
  return (
    <div>
      <form>
        <p>Specify Yourself:</p>
        <div className='form-check'>
          <label>
            <input
              type='radio'
              name='gender'
              value='male'
            />
            Male
          </label>
        </div>

        <div className='form-check'>
          <label>
            <input
              type='radio'
              name='gender'
              value='female'
            />
            Female
          </label>
        </div>

        <div className='form-check'>
          <label>
            <input
              type='radio'
              name='gender'
              value='other'
            />
            Other
          </label>
        </div>
      </form>
    </div>
  )
}

export default Gender
