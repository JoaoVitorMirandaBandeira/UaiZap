import './lastMessage.css'
import React from 'react'
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LastMessage (props){
    return(
        <>
            <p className="message-text"><FontAwesomeIcon icon={faCheckDouble} className="message-text-icon"/><abbr className="mensagem-reduzida" title={props.text}>{props.text}</abbr></p>
            {/* <p className="truncate ml-3 w-36 sm:w-64 md:w-11/12 lg:w-11/12 xl:w-11/12"><abbr className="no-underline" title={link} >{link}</abbr></p> */}
        </>
    )
}