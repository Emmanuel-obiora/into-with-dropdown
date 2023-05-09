import React from 'react'

const Modal2 = ({data, deactivate}) => {
  return (
    <div id='Closing' className='closin' onClick={()=>{data(); deactivate();}}></div>
  )
}

export default Modal2