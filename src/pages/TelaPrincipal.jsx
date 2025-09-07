import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logoTB from '../assets/TB CONSTRUÇÕES (1).jpg';

export default function TelaPrincipal() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const onScroll = () => AOS.refresh();
    window.addEventListener('scroll', onScroll);

    // Responsividade
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Estilo dos cards com efeito de hover
  const cardStyle = {
    flex: 1,
    minWidth: isMobile ? '100%' : 250,
    background: '#fffbe6',
    borderRadius: 12,
    padding: isMobile ? 12 : 20,
    boxShadow: '0 2px 8px #cb9a2822',
    transition: 'transform 0.25s, box-shadow 0.25s',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return (
    <div
      style={{
        fontFamily: 'Segoe UI, Arial, sans-serif',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fffbe6 0%, #f5f5f5 100%)',
      }}
    >
      {/* Header */}
      <header
        style={{
          background: 'linear-gradient(90deg, #cb9a28 60%, #ffe082 100%)',
          color: '#fff',
          padding: isMobile ? '1.5rem 0 1rem 0' : '2.5rem 0 2rem 0',
          textAlign: 'center',
          boxShadow: '0 4px 24px #cb9a2822',
          borderBottomLeftRadius: isMobile ? 20 : 40,
          borderBottomRightRadius: isMobile ? 20 : 40,
        }}
        data-aos="fade-down"
      >
        <img
          src={logoTB}
          alt="Logo TB Construções"
          style={{
            width: isMobile ? 100 : 160,
            height: isMobile ? 100 : 160,
            objectFit: 'cover',
            marginBottom: isMobile ? 10 : 18,
            borderRadius: '50%',
            border: '4px solid #fffbe6',
            boxShadow: '0 4px 24px #cb9a2822',
            background: '#fffbe6'
          }}
          data-aos="zoom-in"
        />
        <h1
          style={{
            fontSize: isMobile ? '1.5rem' : '2.5rem',
            fontWeight: 800,
            letterSpacing: 2,
            margin: 0,
            color: '#fff',
            textShadow: '0 2px 8px #cb9a2855'
          }}
        >
          TB CONSTRUÇÕES
        </h1>
        <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', margin: '0.5rem 0 0 0', color: '#fffbe6', fontWeight: 500 }}>
          Construindo sonhos, realizando projetos.
        </p>
      </header>

      {/* Seção Quem Somos */}
      <section
        data-aos="fade-up"
        style={{
          maxWidth: 900,
          margin: isMobile ? '1.2rem auto 0 auto' : '2.5rem auto 0 auto',
          background: '#fff',
          borderRadius: isMobile ? 10 : 18,
          padding: isMobile ? '1.2rem 0.7rem' : '2.5rem 2rem',
          boxShadow: '0 4px 24px #cb9a2822',
          color: '#3d3d3d',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: isMobile ? 28 : 40, marginBottom: 8 }}>🏗️</span>
        <h2
          style={{
            marginTop: 0,
            fontSize: isMobile ? '1.2rem' : '2rem',
            fontWeight: 700,
            letterSpacing: 1,
            color: '#cb9a28',
            textAlign: 'center'
          }}
        >
          Quem Somos
        </h2>
        <div
          style={{
            width: 60,
            height: 4,
            background: 'linear-gradient(90deg, #cb9a28 60%, #fffbe6 100%)',
            borderRadius: 2,
            margin: '0 0 18px 0'
          }}
        />
        <div
          style={{
            maxWidth: 700,
            textAlign: 'justify',
            fontSize: isMobile ? '1rem' : '1.15rem',
            lineHeight: 1.6,
            color: '#444',
          }}
        >
          <p style={{ marginBottom: 12 }}>
            <strong style={{ color: '#cb9a28', fontWeight: 700 }}>TB CONSTRUÇÕES</strong> foi fundada por <strong>Thiago Barbosa de Lima</strong> com o propósito de transformar sonhos em realidade por meio da construção civil. Com dedicação, seriedade e compromisso, nossa empresa se destaca por oferecer soluções completas em obras residenciais, comerciais e industriais, sempre priorizando qualidade, segurança e prazos.
          </p>
          <p style={{ marginBottom: 12 }}>
            Nosso diferencial está na combinação de experiência prática e inovação, garantindo projetos que unem funcionalidade, estética e sustentabilidade. Acreditamos que cada obra é única e merece atenção especial em cada detalhe — desde o planejamento até a entrega final.
          </p>
          <p>
            Com uma equipe qualificada e comprometida, a TB CONSTRUÇÕES busca superar expectativas e construir mais do que imóveis: construímos confiança, solidez e parcerias duradouras.
          </p>
        </div>
      </section>

      {/* Seção Nossos Projetos */}
      <section
        data-aos="fade-up"
        style={{
          maxWidth: 900,
          margin: isMobile ? '1.2rem auto 0 auto' : '2.5rem auto 0 auto',
          background: '#fff',
          borderRadius: isMobile ? 10 : 18,
          boxShadow: '0 4px 24px #cb9a2822',
          padding: isMobile ? '1.2rem 0.7rem' : '2.5rem 2rem'
        }}
      >
        <h2 style={{
          color: '#cb9a28',
          fontWeight: 700,
          fontSize: isMobile ? '1.2rem' : '2rem',
          marginBottom: 8,
          textAlign: 'center'
        }}>Nossos Projetos</h2>
        <div style={{
          width: 60,
          height: 4,
          background: 'linear-gradient(90deg, #cb9a28 60%, #fffbe6 100%)',
          borderRadius: 2,
          margin: '0 auto 24px auto'
        }} />
        <div style={{
          display: 'flex',
          gap: isMobile ? 12 : 24,
          flexWrap: 'wrap',
          marginTop: 24,
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <Link
            to="/projeto1"
            style={cardStyle}
            data-aos="fade-right"
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 16px #cb9a2844';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px #cb9a2822';
            }}
          >
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Projeto 1" style={{ width: '100%', borderRadius: 8, marginBottom: 12, transition: 'transform 0.25s' }} />
            <h3 style={{ color: '#cb9a28', fontWeight: 700, fontSize: isMobile ? '1rem' : '1.2rem' }}>Residencial Jardim</h3>
            <p style={{ color: '#555', fontSize: isMobile ? '0.95rem' : '1rem' }}>Condomínio de casas modernas com área de lazer completa.</p>
          </Link>
          <Link
            to="/projeto2"
            style={cardStyle}
            data-aos="fade-up"
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 16px #cb9a2844';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px #cb9a2822';
            }}
          >
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Projeto 2" style={{ width: '100%', borderRadius: 8, marginBottom: 12, transition: 'transform 0.25s' }} />
            <h3 style={{ color: '#cb9a28', fontWeight: 700, fontSize: isMobile ? '1rem' : '1.2rem' }}>Edifício Central</h3>
            <p style={{ color: '#555', fontSize: isMobile ? '0.95rem' : '1rem' }}>Prédio comercial no centro da cidade, com arquitetura inovadora.</p>
          </Link>
          <Link
            to="/projeto3"
            style={cardStyle}
            data-aos="fade-left"
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 16px #cb9a2844';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px #cb9a2822';
            }}
          >
            <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80" alt="Projeto 3" style={{ width: '100%', borderRadius: 8, marginBottom: 12, transition: 'transform 0.25s' }} />
            <h3 style={{ color: '#cb9a28', fontWeight: 700, fontSize: isMobile ? '1rem' : '1.2rem' }}>Praça das Árvores</h3>
            <p style={{ color: '#555', fontSize: isMobile ? '0.95rem' : '1rem' }}>Espaço público revitalizado para lazer e convivência.</p>
          </Link>
        </div>
      </section>
           
      {/* Seção Solicite Orçamento */}
      <section
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-once="false"
        style={{
          maxWidth: 900,
          margin: isMobile ? '1.2rem auto' : '2.5rem auto',
          background: '#fffbe6',
          borderRadius: isMobile ? 10 : 18,
          boxShadow: '0 4px 24px #cb9a2822',
          padding: isMobile ? '1.2rem 0.7rem' : '2.5rem 2rem',
          textAlign: 'center'
        }}
      >
        <h2
          style={{
            color: '#cb9a28',
            marginBottom: 16,
            fontWeight: 700,
            fontSize: isMobile ? '1.2rem' : '2rem'
          }}
          data-aos="fade-down"
        >
          Solicite um Orçamento
        </h2>
        <div
          style={{
            width: 60,
            height: 4,
            background: 'linear-gradient(90deg, #cb9a28 60%, #fffbe6 100%)',
            borderRadius: 2,
            margin: '0 auto 18px auto'
          }}
        />
        <p
          style={{ marginBottom: 32, fontSize: isMobile ? '1rem' : '1.1rem', color: '#444' }}
          data-aos="fade-up"
        >
          Entre em contato conosco e faça já seu orçamento sem compromisso!
        </p>
        <a
          href="https://wa.me/5511976158048?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          data-aos="zoom-in-up"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #25d366 60%, #128c7e 100%)',
            color: '#fff',
            fontWeight: 700,
            fontSize: isMobile ? '1rem' : '1.15rem',
            padding: isMobile ? '0.8rem 1.5rem' : '1rem 2.5rem',
            borderRadius: 30,
            textDecoration: 'none',
            boxShadow: '0 2px 8px #25d36655',
            transition: 'background 0.2s, transform 0.2s',
            letterSpacing: 1,
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #128c7e 60%, #25d366 100%)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #25d366 60%, #128c7e 100%)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <span style={{ fontSize: 22, verticalAlign: 'middle', marginRight: 8 }}>💬</span>
          Conversar no WhatsApp
        </a>
      </section>

      <footer
        style={{
          background: 'linear-gradient(90deg, #cb9a28 60%, #ffe082 100%)',
          color: '#fff',
          textAlign: 'center',
          padding: isMobile ? '0.8rem 0' : '1.2rem 0',
          marginTop: 32,
          borderTopLeftRadius: isMobile ? 20 : 40,
          borderTopRightRadius: isMobile ? 20 : 40,
          fontWeight: 500,
          fontSize: isMobile ? '0.95rem' : '1rem',
          letterSpacing: 1,
          boxShadow: '0 -2px 12px #cb9a2822'
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Construtora TB CONSTRUÇÕES. Todos os direitos reservados. | Site desenvolvido por Bruno Guedes
        </p>
      </footer>
    </div>
  );
}