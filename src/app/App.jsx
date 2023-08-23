import CardContact from '../components/cardContact/cardContact';
import HeaderContact from '../components/headerContact/headerContact';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className='menu-contacts'>
          <HeaderContact />
          <section className='contacts'>
            <CardContact
             img="https://img.freepik.com/fotos-gratis/linda-mulher-asiatica-usa-aplicativo-de-smartphone-e-envia-mensagens-em-pontos-de-bate-papo-de-midia-social-no-espaco-da-copia-usa-jaqueta-casual_273609-48643.jpg"
             name= "Maria"
             lastMessage= "Ola, Tudo bem!"/>
          </section>
        </div>
        <section className='main-chat'>

        </section>
      </main>

    </div>
  );
}

export default App;
