import AddContact from '../components/addContact/AddContact';
import CardContact from '../components/cardContact/CardContact';
import HeaderChat from '../components/headerChat/HeaderChat';
import HeaderContact from '../components/headerContact/HeaderContact';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className='menu-contacts'>
          <HeaderContact />
          <section className='contacts'>
            <CardContact
             img="https://s24534.pcdn.co/carreira-sucesso/wp-content/uploads/sites/3/2021/11/imagem-pessoal-imagem-profissional.jpg"
             name= "Maria"
             lastMessage= "Ola, Tudo bem!"/>
             <AddContact/>
          </section>
        </div>
        <section className='main-chat'>
            <HeaderChat/>
        </section>
      </main>

    </div>
  );
}

export default App;
