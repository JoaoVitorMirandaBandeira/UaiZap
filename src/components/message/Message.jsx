import './message.css'
import React from 'react'
export default function Message (props){
    return(
        <div className={props.myMessage && 'card-message'}>
            <div className={`message ${props.myMessage ? 'i-message' : 'you-message'}`}>
                {!props.myMessage && <p className='name-user' style={{color: props.color}}>{props.name}</p>}
                <p className='message-user'>{props.text}</p>
                <p className='date-user'>19:30</p>
            </div>
        </div>
    )
}