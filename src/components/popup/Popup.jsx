import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './popup.css'
import { useState } from 'react'

export default function Popup(props) {
    const [formData, setFormData] = useState();
    const changeFormData = (event) => {
        const { name, value } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    const getRandomArbitrary = (min, max) => {
        return parseInt(Math.random() * (max - min) + min)
    }
    const gerarCorHexadecimal = () => {
        return '#' + parseInt((Math.random() * 0xFFFFFF))
            .toString(16)
            .padStart(6, '0');
    }
    const addNewContact = (event) => {
        event.preventDefault()
        props.addNewContact({ ...formData, id: getRandomArbitrary(0, 1000), color:gerarCorHexadecimal()})
        setFormData({})
        props.setNewPopup(false)
    }

    return (
        <div className='popup'>
            <div className='popup-container'>
                <div className='close'>
                    <button onClick={() => props.setNewPopup(false)}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <p>Cadastar Contato</p>
                <form onSubmit={addNewContact}>
                    <div className='section-popup'>
                        <div className='label-input'>
                            <label htmlFor="url">URL FOTO:</label>
                            <input className='popup-input' type="text" name='url' onChange={changeFormData} required />
                        </div>
                        <div className='label-input'>
                            <label htmlFor="url">NOME:</label>
                            <input className='popup-input' type="text" name='name' onChange={changeFormData} required />
                        </div>
                    </div>
                    <button type='submit' className='button-add'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}