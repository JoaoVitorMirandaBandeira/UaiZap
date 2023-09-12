import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { DivCicle } from "../staled-components/DivCicle";
import style from'./addContact.module.css'
import React from "react";

export default function AddContact(props){
    return(
        <DivCicle onClick={()=>{props.setNewPopup(true)}} className={style.cardAdd}>
            <FontAwesomeIcon icon={faPlus}/>
        </DivCicle>
    )
}