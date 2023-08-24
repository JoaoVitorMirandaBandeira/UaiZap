import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './headerContact.css'

export default function HeaderContact(){
    return(
        <div className='headerContact'>
            <div className='logo-name'>
                <img src="./logo_uaizap.png" alt="Logo da aplicação UaiZap" />
                <h1>UaiZap</h1>
            </div>
            <FontAwesomeIcon className='icon' icon={faBars} />
        </div>
    )
}