import { useState } from 'react';
import React from 'react';
import AddContact from '../components/addContact/AddContact';
import CardContact from '../components/cardContact/CardContact';
import HeaderChat from '../components/headerChat/HeaderChat';
import HeaderContact from '../components/headerContact/HeaderContact';
import Message from '../components/message/Message';
import './App.css';
import Input from '../components/input/Input';
import Popup from '../components/popup/Popup';

import LastMessage from '../components/lastMessage/LastMessage';

function App() {
  const [message, setMessage] = useState([])
  const [persons, setPerson] = useState([])
  const [session,setSession] = useState({name:"",id: "",color:""})
  const [popup, setPopup] = useState(false)
  const [statusBar,setStatusBar] = useState(true)

  const addMessage = (newMessage) => {
    setMessage([...message, newMessage])
  }
  const addPerson = (newPerson) => {
    setPerson([...persons,newPerson])
  }
  const statusPopup = (status) => {
    setPopup(status)
  }
  const alterSession = (newSession) => {
    setSession(newSession)
  }
  const deleteMessage = (messageId) => {
    const accept = window.confirm("Tem certeza que deseja excluir?")
    if(accept){
      const indexMessage = message.findIndex((element) => {
          return messageId === element.messageId
      })
      const newArray = [...message]
      newArray.splice(indexMessage,1)
      setMessage(newArray)
      console.log(newArray)
    }
  }
  const lastMessageUser = (userId) => {
    const lastMessage = message.findLast((element) => {
      return element.id === userId
    })
    console.log(lastMessage)
    if(lastMessage) return(<LastMessage text ={lastMessage.text}/>) 
  }
  const toggleContacts = () => {
    setStatusBar(!statusBar)
  }

  return (
      <div className="App">
        <main>
          <div className='menu-contacts'>
            <HeaderContact activeBarContacts={toggleContacts} overflow={statusBar} />
            <section className={`contacts ${statusBar ? 'visible' : 'hidden'}`}>
              {
                persons.map((element) => {
                  return <CardContact
                  img={element.url}
                  name={element.name}
                  userId={element.id}
                  color={element.color}
                  isSelected={(element && element.id === session.id)}
                  key={element.id}
                  changeSession={alterSession}
                  overflow={statusBar}
                >{lastMessageUser(element.id)}</CardContact>
                })
              }
              <AddContact setNewPopup={statusPopup}/>
            </section>
          </div>
          <section className='main-chat'>
            <HeaderChat />
            <div className='chat'>
              {
                message.map(element => {
                  return <Message  message={element} key={element.messageId} myMessage={(element.id === session.id)?true:false} onClickDelete={deleteMessage} />
                })
              }
            </div>
            {(session.id !== '')&& <Input sendMessage={addMessage} session={session}/>}
          </section>
        </main>
        {popup && <Popup addNewContact={addPerson} setNewPopup={statusPopup}/>}
      </div>
  );
}

export default App;
