import styled from 'styled-components';
import media from "styled-media-query";

import Navigation from '../Navigation';
import SectionHead from '../Main/SectionHead';
import Heading from '../CaseStudies/Heading';
import Project from '../CaseStudies/Project';
import Process from '../CaseStudies/Process';
import Product from '../CaseStudies/Product';
import Footer from '../Main/Footer';

import lhmedia_lrg from '../../imgs/lhmedia_lrg.png';
import lhmedia_hero from '../../imgs/lhmedia_hero.gif';
import lhmedia_features from '../../imgs/lhmedia_features.gif';

const BodyContainer = styled.div`
  ${media.greaterThan("large")`
    width: 90%;
  `}
`;

function Lhmedia() {
    return (
      <div className="App">
        <Navigation next="projects-openspace" />
        <BodyContainer>
          <Heading image={lhmedia_lrg} title="LH Media Productions" subTitle="Client Site" techs={["php", "JavaScript", "HTML5", "CSS3", "MySQL"]} description="A portfolio site built for a client who works as a videographer and photogtrapher." live="http://jennamae.ca/lhmedia/" />
          <SectionHead name="The Project" />
          <Project
          overview="Liam Herring Media Productions is a prouction company that specializes in promotional videos and documentary camera work. They needed a webstie that explained what services they offer and showcase their past work. The main goal of the site was to generate traffic and expand their customer base. It was important to the client to ensure their range of capabilities was portreyed clearly to the user."
          listItems={["Interactive hero graphic", "Image modals", "Email system", "Custom UX/UI design", "Logo Design", "Custom Accordian", "Responsive", "Smooth CSS transitions"]}
          />
          <SectionHead name="The Process" />
          <Process
          strategy="To start off the project I met with the client to determine the look and feel that the website was going to have. After a few meetings and logo/mockup revisions we landed on a clean and informative UI design. The client was very interested in having the site be interactive with the user, making it a more fun experience. For this I added the interactive hero section that displayed both their video and photo work. I also implemented the accordian style dropdowns on the services page."
          challenges="It was imperitive that the website displayed the clients incredible photogrpahy and videography work. In order to show their work off I wanted the design to be very heavy on the imagery. However, it became complicated as the file sizes were very large and slowed the site down. I needed to decrease the file sizes to speed the site back up but didn't want to lose the quality of the clients work. In order to solve this I carefully adjusted the file sizes in photoshop to be just as large as the site needed them to be." />
          <SectionHead name="The Product" />
          <Product 
          label="Interactive Hero Display"
          listItems={["Change View on Click", "Video Display"]}
          image={lhmedia_hero}
          label2="Accordian Feature and Form Validator"
          listItems2={["Custom Built Drop Down", "Fixed Background Images", "PHP Email System", "Form Validator"]}
          image2={lhmedia_features}
          />
          <Footer />
        </BodyContainer>
      </div>
    );
  }
  
  export default Lhmedia;
  