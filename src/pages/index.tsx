import React from 'react';

import SEO from '../components/SEO';
import Header from '../components/Header';

const Home: React.FC = () => (
  <>
    <SEO
      title="Home"
      description="O melhor site desenvolvido em NextJS já visto!"
      image="promo.jpg"
    />
    <Header />
  </>
);

export default Home;
