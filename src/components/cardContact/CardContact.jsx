import React from "react";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './cardContact.css'
import { DivCicle } from "../staled-components/DivCicle";
import { ImageCicle } from "../staled-components/ImageCicle";

export default function CardContact(props) {
    const sendSession = () => {
        props.changeSession({name:props.name,id:props.userId,color:props.color})
    }
    return (
        <>
           {props.overflow && 
           <>
           <div className="card-contact" style={{backgroundColor: (props.isSelected?'rgb(0 0 0 / 64%)':"transparent")}} onClick={sendSession}>
                <DivCicle>
                    <ImageCicle src={props.img} alt="Imagem de perfil de usuario" />
                </DivCicle>
                <div className="card-text">
                    <p className="name-text">{props.name}</p>
                    {props.children}
                </div>
            </div>
            <hr className="line-break" /> </>}
           {!props.overflow && <div className="card-contact-min" style={{backgroundColor: (props.isSelected?'rgb(0 0 0 / 64%)':"transparent")}} onClick={sendSession}>
                <DivCicle>
                    <ImageCicle src={props.img} alt="Imagem de perfil de usuario" />
                </DivCicle>
            </div> }
        </>
    )
}