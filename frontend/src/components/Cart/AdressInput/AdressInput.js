import React from 'react'
import './AddressInput.css'

const AdressInput = (props) => {
  return (
    <div>
        <form className='addressInputForm'>
            <input type="text"  placeholder='Flat , House No , building '/>
            <input type="text" placeholder='Area , colony , Street , Sector , Village ' />
            <input type="text" placeholder='Town / City ' />
            <input type="number" placeholder='PINCODE' name="" id="" />
            <input type="text" placeholder='State'/>
        </form>
        <button onClick={props.onClose} >Place Order </button>
    </div>
  )
}

export default AdressInput