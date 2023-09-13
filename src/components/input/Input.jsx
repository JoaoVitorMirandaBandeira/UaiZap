import './input.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import {getRandomArbitrary} from '../../utils/getRandomArbitrary'
export default function Input(props){
    const [message,setMessage] = useState('')

    const sendNewMessage = () => {
        const newMessage = {
            id: props.session.id,
            messageId: getRandomArbitrary(0,1000),
            color: props.session.color,
            name: props.session.name,
            text:message
        };
        if(message !== ''){
            props.sendMessage(newMessage);
            setMessage(''); // Limpa o campo de mensagem após enviar
        }           
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendNewMessage();
        }
    }
    const editMenssege = (event) => {
        const value = event.target.value
        setMessage(value)
    }
    return(
        <div className="input-message">
            <input {...props} value={message} placeholder='Menssagem...' onChange={editMenssege} onKeyDown={handleKeyPress}/>
            <button onClick={sendNewMessage}><FontAwesomeIcon icon={faPaperPlane}/></button>
        </div>
    )
}