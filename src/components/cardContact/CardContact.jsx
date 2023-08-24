import React from "react";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './cardContact.css'
import { DivCicle } from "../staled-components/DivCicle";
import { ImageCicle } from "../staled-components/ImageCicle";

export default function CardContact(props) {
    return (
        <>
            <div className="card-contact">
                <DivCicle>
                    <ImageCicle src={props.img} alt="Imagem de perfil de usuario" />
                </DivCicle>
                <div className="card-text">
                    <p className="name-text">{props.name}</p>
                    <p className="message-text"><FontAwesomeIcon icon={faCheckDouble} /> {props.lastMessage}</p>
                </div>
            </div>
            <hr className="line-break" />
        </>
    )
}