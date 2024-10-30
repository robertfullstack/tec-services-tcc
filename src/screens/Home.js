import React, { useEffect, useState } from "react";
import '../styles/Home.scss';
import { FaTools, FaMobileAlt, FaSyncAlt, FaShoppingCart, FaEnvelope, FaStar } from 'react-icons/fa';
import qrCodeImage from '../images/print-QR-Code.png'; // Atualize com o caminho correto para a imagem do QR code
import "../styles/Servico.scss"

const Home = () => {
  const [selected, setSelected] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false); // Modal para o QR Code

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 6000);
  };

  const handleOpenQrModal = () => {
    setIsQrModalOpen(true);
  };

  const handleCloseQrModal = () => {
    setIsQrModalOpen(false);
  };

  const data = [
    {
      question: "Porque escolha nossa loja?",
      answer: "Todo aparelho eletrônico tem um tempo de vida especificado..."
    },
    {
      question: "Qual é a especialização da Assistência especializada em Celular?",
      answer: "Texto explicando a especialização da assistência especializada em celular."
    },
    {
      question: "Habilidades para consertos de celular",
      answer: "Texto explicando as habilidades necessárias para consertos de celular."
    },
    {
      question: "Quando procurar uma assistência especializada?",
      answer: "Texto explicando quando é necessário procurar uma assistência especializada."
    }
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 style={{ color: 'white' }}>Bem-vindo à TecService</h1>
        <p>Sua solução para consertos e assistência técnica de dispositivos móveis.</p>
      </header>

      <section className="services-section">
        <h2>Nossos Principais Serviços</h2>
        <div className="services-list">
          <div className="service-item">
            <FaTools className="service-icon" />
            <h3>Agendamento de Consertos</h3>
            <p>Agende consertos para dispositivos móveis de forma rápida e prática.</p>
          </div>
          <div className="service-item">
            <FaMobileAlt className="service-icon" />
            <h3>Troca de Tela</h3>
            <p>Especialistas em troca de tela para smartphones e tablets.</p>
          </div>
          <div className="service-item">
            <FaSyncAlt className="service-icon" />
            <h3>Atualização de Software</h3>
            <p>Atualize seu sistema operacional para a versão mais recente.</p>
          </div>
          <div className="service-item">
            <FaShoppingCart className="service-icon" />
            <h3>Compra de Peças</h3>
            <p>Compre peças de reposição originais e de alta qualidade.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Quem Somos</h2>
        <p>
          Na <strong>TecService</strong>, temos o compromisso de oferecer soluções de assistência técnica para dispositivos móveis com um nível superior de eficiência e qualidade. Nossa equipe de técnicos especializados trabalha com as melhores práticas do mercado para garantir um atendimento rápido e um resultado duradouro.
        </p>
        <p>
          Desde consertos simples até a manutenção avançada de software, nossa missão é restaurar a funcionalidade e a performance dos seus dispositivos, proporcionando uma experiência de uso sem interrupções. Valorizamos a confiança e a satisfação de cada cliente, cuidando de cada detalhe com dedicação.
        </p>
      </section>


      <section className="testimonials-section">
        <h2>Depoimentos de Clientes</h2>
        <div className="testimonials-list">
          <div className="testimonial-item">
            <h4>João Silva</h4>
            <p>"Serviço excelente! Meu celular voltou a funcionar como novo. Recomendo a TecService a todos."</p>
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
          </div>
          <div className="testimonial-item">
            <h4>Maria Oliveira</h4>
            <p>"Atendimento rápido e eficiente. Consegui agendar o conserto no mesmo dia. Muito satisfeita!"</p>
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
          </div>
          <div className="testimonial-item">
            <h4>Pedro Santos</h4>
            <p>"Peças de alta qualidade e preços justos. A TecService é a melhor assistência técnica que já usei."</p>
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
          </div>
        </div>
      </section>

      <div className="servico-container">
        <div className="servico-content">
          <div className="servico-image">
            <img src="https://clickcel.com.br/images/conserto-carcaa.jpg" alt="Conserto de celular" />
          </div>
          <div className="servico-text">
            <h1>Conserto de celular São Paulo</h1>
            <p>A Novo Smart conta com equipe de profissionais com experiência e aptidão para consertar xiaomi, iphone, motorola, LG, Asus e samsung.</p>
            <p>Temos uma estrutura completa para quem busca consertos de celulares em todo Brasil.</p>
            <p>Arrume seu celular, tablet e smartwatch no mesmo dia! Tenha total garantia de serviço e <span className="highlight">privacidade</span>.</p>
            <button className="contact-btn">Fale Conosco agora!</button>
          </div>
        </div>
      </div>

      <div className="faq-section" style={{ height: '100%', marginTop: '40px' }}>
        <h1 className="faq-title">Perguntas Frequentes</h1>
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item" key={i}>
              <div className="title" onClick={() => toggle(i)}>
                <h2 style={{ color: 'black' }}>{item.question}</h2>
                <span className="icon">{selected === i ? '-' : '+'}</span>
              </div>
              <div className={`content ${selected === i ? 'show' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="about-section">
        <h2>Fale Conosco</h2>
        <p>
          Estamos aqui para ajudar! Caso tenha dúvidas, queira saber mais sobre nossos serviços, ou agendar um atendimento, entre em contato conosco.
        </p>
        <p>
          Email: <strong>contato@tecservice.com</strong><br />
          Telefone: <strong>(11) 1234-5678</strong><br />
          WhatsApp: <strong>(11) 98765-4321</strong>
        </p>
      </section>




      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>TecService</h3>
            <p>Sua solução completa para consertos e assistência técnica de dispositivos móveis.</p>
          </div>
          <div className="footer-section links">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#about">Quem Somos</a></li>
              <li><a href="#contact">Contato</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contato</h3>
            <p><FaEnvelope /> contato@tecservice.com</p>
            <p><FaMobileAlt /> (11) 1234-5678</p>
            <p><FaMobileAlt /> WhatsApp: (11) 98765-4321</p>
          </div>
        </div>
        <p className="footer-bottom">&copy; 2024 TecService. Todos os direitos reservados.</p>
      </footer>



      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Baixe também nosso aplicativo!</h2>
            <p>Experimente nossos serviços de forma ainda mais prática e rápida.</p>
            <button className="modal-download-button" onClick={handleOpenQrModal}>Download</button>
            <br />
            <button onClick={handleCloseModal} className="modal-close-button">Fechar</button>
          </div>
        </div>
      )}

      {isQrModalOpen && (
        <div className="modal">
          <div className="modal-content" style={{ height: '70%', height: '80%' }}>
            <h2>Download do QR Code</h2>
            <p>Baixe seu QR Code abaixo:</p>
            <img src={qrCodeImage} className="qr-code-image" width="70%" height="60%" /> <br />
            <a href='https://expo.dev/accounts/robertcostapinto/projects/tecservicesaplicativo/builds/b562f18c-e54a-4e6f-a179-83b356aa4a8f' target="_blank" className="modal-download-link">Clique aqui para baixar</a>
            <br />
            <button style={{ marginTop: '20px' }} onClick={handleCloseQrModal} className="modal-close-button">Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
