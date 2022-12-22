import React from 'react'
import './BAckdrop.css';
function Backdrop({closeCart}) {
    console.log(closeCart, 'close chart');
    return (
        <div onClick={closeCart} className="backdrop" />
    )
}

export default Backdrop