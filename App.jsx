import React from 'react'
import Logo from './assets/logo.noel.png'
import Button from './assets/button.png'
import Imagem from './assets/send.png'
import Presentes from './assets/img1.png'
import Sino from './assets/img2.png'
import Doces from './assets/img3.png'
import Amor from './assets/img4.png'
import Mao from './assets/shared.png'





function App() {


  return (
    <>
  <header>
    <div className='topo-site'>
        <div className='Logo'>
          <img src={Logo} alt="Logo papai noel" />
          <p>Feliz Natal</p>
    </div>

      <nav>

        <ul>
          <li>Ínicio</li>
          <li>Acessórios</li>
          <li>Doação</li>
          <li>Contato</li>
        </ul>

      </nav>
    </div>

  <div className='container'>
    <h1>Feliz Natal e <br />Feliz Ano Novo!</h1>
    <p>Nessas festas de fim de ano mande um presente para <br /> a pessoa amada e compartilhe a alegria do Natal.</p>
    <img className="button"src={Button} alt="Botão doações" />
    <div className='imagem'>
    <img src={Imagem} alt="Botão doações" />
    </div>
  </div>

  </header>

  <main>
    <div className='main'>
      <h1>Acessórios</h1>
      <p>Nessas festas de fim de ano mande um presente para a <br /> pessoa amada e compartilhe a alegria do Natal.</p>
      
      <div className='img-natal'>
        <img className="presente" src={Presentes} alt="Caixa presente natal" />
        <img className="sino" src={Sino} alt="Sino natal" />
        <img className="doces" src={Doces} alt="Doces natal" />
        <img className="amor" src={Amor} alt="Amor natal" />
      </div>
      
      <div className='descricao'>
        <p className='presentes'>Presentes</p>
        <p className='enfeites'>Enfeites</p>
        <p className='doce'>Doces</p>
        <p className='love'>Muito amor</p>
      </div>
      <div className='text'>
        <h1 id='preset'>Eles são os melhores presentes que existem.</h1>
        <h1 id='decor'>Dê uma decoração.</h1>
        <h1 id='sugar'>Aproveite os doces natalinos.</h1>
        <h1 id='sentiment'>Aproveite os sentimentos que duram para sempre.</h1>
      </div>
    </div>
  </main>

  <footer>
    <div className='container-footer'>
      <img className="shared" src={Mao} alt="Natal" />
      <h1 id='comemoracão'>Comemore com <br /> muito amor!</h1>
    </div>
    <div className='footer'>
      <p>Nestes feriados, festeje com muito amor e paz, <br /> oferecendo muitas bênçãos aos nossos entes queridos, <br /> amigos e vizinhos, desejando-lhes um Feliz Natal.</p>
      <img className="button-dois"src={Button} alt="Botão doações" />
    </div>

    
      <div className='fim-site'>
        <div className='Logo'>
          <img src={Logo} alt="Logo papai noel" />
          <p>Feliz Natal</p>
      </div>
    </div>
  </footer>

 
    </>
  )
}

export default App
