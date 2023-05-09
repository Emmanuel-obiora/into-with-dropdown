import React from 'react'

const Modal = ({close}) => {
  return (
    <div className='modal' id='Modal' onClick={close}></div>
  )
}

export default Modal