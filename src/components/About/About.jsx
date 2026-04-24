import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">Sobre mim</h2>

          <p className="about-subtitle">
            Desenvolvedor em formação, focado em back-end, automações e construção de sistemas reais.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h3>Quem sou</h3>

              <p>
                Me chamo Jonh Henrique, tenho 24 anos e sou estudante de Ciência da Computação pela UNIFOR,
                com passagem anterior por Engenharia de Software na UFC.
              </p>

              <p>
                Tenho interesse em entender como sistemas são construídos na prática, buscando evoluir
                não só no código, mas também na forma como penso soluções.
              </p>
            </div>

            <div className="about-card">
              <h3>Meu foco</h3>

              <p>
                Tenho maior afinidade com o desenvolvimento back-end, trabalhando com lógica,
                estrutura e construção de sistemas.
              </p>

              <p>
                Gosto especialmente de lidar com regras de negócio, organização de código e comunicação
                entre serviços, focando sempre em soluções bem estruturadas.
              </p>
            </div>

            <div className="about-card">
              <h3>Experiência prática</h3>

              <p>
                Minha experiência vem principalmente de projetos pessoais e automações que desenvolvo
                para serviços próprios.
              </p>

              <p>
                Isso me permite lidar com cenários reais, aplicar conceitos de arquitetura e tomar
                decisões práticas durante o desenvolvimento.
              </p>
            </div>

            <div className="about-card highlight">
              <h3>Objetivo</h3>

              <p>
                Busco evoluir constantemente como desenvolvedor, aprimorando tanto a parte técnica
                quanto a forma como estruturo sistemas.
              </p>

              <p>
                Meu objetivo é construir soluções cada vez mais organizadas, eficientes e com qualidade
                real de uso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;