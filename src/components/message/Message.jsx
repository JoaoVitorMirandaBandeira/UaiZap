import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './message.css'
import React from 'react'
export default function Message(props) {
    return (
        <div className={props.myMessage && 'card-message'}>
            <div className={`message ${props.myMessage ? 'i-message' : 'you-message'}`}>
                {!props.myMessage && <p className='name-user' style={{ color: props.message.color }}>{props.message.name}</p>}
                <p className='message-user'>{props.message.text}</p>
                <div className="footer-message">
                    {props.myMessage && <button className='button-trash' onClick={() => props.onClickDelete(props.message.messageId)}>
                        <FontAwesomeIcon icon={faTrashCan} className='trash' />
                    </button>}
                    <p className='date-user'>19:30</p>
                </div>
            </div>
        </div>
    )
}