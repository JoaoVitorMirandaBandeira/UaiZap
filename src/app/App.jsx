import { useState } from 'react';
import AddContact from '../components/addContact/AddContact';
import CardContact from '../components/cardContact/CardContact';
import HeaderChat from '../components/headerChat/HeaderChat';
import HeaderContact from '../components/headerContact/HeaderContact';
import Message from '../components/message/Message';
import './App.css';
import Input from '../components/input/Input';
import Popup from '../components/popup/Popup';

function App() {
  const [message, setMessage] = useState([])
  const [persons, setPerson] = useState([])
  const [session,setSession] = useState()
  const [popup, setPopup] = useState(false)

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


  return (
      <div className="App">
        <main>
          <div className='menu-contacts'>
            <HeaderContact />
            <section className='contacts'>
              {
                persons.map((element) => {
                  return <CardContact
                  img={element.url}
                  name={element.name}
                  userId={element.id}
                  color={element.color}
                  isSelected={(element.id === session.id)}
                  key={element.id}
                  lastMessage="Ola, Tudo bem!"
                  changeSession={alterSession}
                />
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
                  return <Message color={element.color} name={element.name} myMessage={(element.id === session.id)?true:false} text={element.text} />
                })
              }
            </div>
            {session && <Input sendMessage={addMessage} session={session}/>}
          </section>
        </main>
        {popup && <Popup addNewContact={addPerson} setNewPopup={statusPopup}/>}
      </div>
  );
}

export default App;
