import React from 'react'
import './Divider.css';
function Divider(props) {
    return (
        <div className='divider'>
            <h2>
                {props.content}
            </h2>
        </div>
    )
}

export default Divider