import React from 'react';

import { Container, Content } from '../styles/pages/Home';

import SEO from '../components/SEO';
import Header from '../components/Header';

import Background from '../assets/background.svg';

const Home: React.FC = () => (
  <>
    <SEO
      title="Home"
      description="O melhor site desenvolvido em NextJS já visto!"
      image="promo.jpg"
    />
    <Header />
    <Container>
      <Content>
        <div>
          <h1>
            <span>Need</span> a <br />
            designer?
          </h1>
          <p>
            Leading digital agency with solid design and development expertise.
            We build mobile and web products for startups and design intricate
            trading platforms. Choose below what you need.
          </p>
        </div>
      </Content>
      <div>
        <Background />
      </div>
    </Container>
  </>
);

export default Home;
