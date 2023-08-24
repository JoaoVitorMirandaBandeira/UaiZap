import React from 'react'
import  './headerChat.css'
import { DivCicle } from '../staled-components/DivCicle'
import { ImageCicle } from '../staled-components/ImageCicle'

export default function HeaderChat(){
    return(
        <div className="header-chat">
            <DivCicle>
                    <ImageCicle src="https://img.freepik.com/fotos-gratis/linda-mulher-asiatica-usa-aplicativo-de-smartphone-e-envia-mensagens-em-pontos-de-bate-papo-de-midia-social-no-espaco-da-copia-usa-jaqueta-casual_273609-48643.jpg" alt="Imagem de perfil de usuario" />
            </DivCicle>
            <p>Chat Geral</p>
        </div>
    )
}