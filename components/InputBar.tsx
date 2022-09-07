import React from 'react'

const InputBar = ({...rest}) => {
  return (
    <div>
      <input className='bg-gray-300 p-2 mx-4 my-6' {...rest}/>
    </div>
  )
}

export default InputBar
