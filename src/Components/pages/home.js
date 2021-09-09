import styled from 'styled-components';
import media from "styled-media-query";

import Header from '../Home/Header';
import SectionHead from '../Main/SectionHead';
import Skills from '../Home/Skills';
import Projects from '../Home/Projects';
import About from '../Home/About';
import Contact from '../Home/Contact';
import Footer from '../Main/Footer';

const BodyContainer = styled.div`
  ${media.greaterThan("large")`
    width: 90%;
  `}
`;

function Home() {

    return (
      <div className="App">
        <Header />
        <BodyContainer>
          <SectionHead name='My Toolkit' />
          <Skills />
          <SectionHead name='Projects' />
          <Projects />
          <SectionHead name='About Me' />
          <About />
          <SectionHead name='Contact' />
          <Contact />
        </BodyContainer>
        <Footer />
      </div>
    );
  }
  
  export default Home;
  