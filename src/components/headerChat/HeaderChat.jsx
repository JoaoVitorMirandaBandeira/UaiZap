import React from 'react'
import  './headerChat.css'
import { DivCicle } from '../staled-components/DivCicle'
import { ImageCicle } from '../staled-components/ImageCicle'

export default function HeaderChat(){
    return(
        <div className="header-chat">
            <DivCicle>
                    <ImageCicle src="https://s24534.pcdn.co/carreira-sucesso/wp-content/uploads/sites/3/2021/11/imagem-pessoal-imagem-profissional.jpg" alt="Imagem de perfil de usuario" />
            </DivCicle>
            <p>Chat Geral</p>
        </div>
    )
}