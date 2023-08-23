import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './cardContact.css'

export default function CardContact(props) {
    return (
        <>
            <div className="card-contact">
                <div className="img-contact" >
                    <img className="img-conact" src={props.img} alt="Imagem de perfil de usuario" />
                </div>
                <div className="card-text">
                    <p className="name-text">{props.name}</p>
                    <p className="message-text"><FontAwesomeIcon icon={faCheckDouble} /> {props.lastMessage}</p>
                </div>
            </div>
            <hr className="line-break" />
        </>
    )
}