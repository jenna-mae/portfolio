import styled from 'styled-components';
import media from "styled-media-query";

import Navigation from '../Navigation';
import SectionHead from '../Main/SectionHead';
import Heading from '../CaseStudies/Heading';
import Project from '../CaseStudies/Project';
import Process from '../CaseStudies/Process';
import Product from '../CaseStudies/Product';
import Footer from '../Main/Footer';

import emerald_lrg from '../../imgs/emerald_lrg.png';
import emerald_home from '../../imgs/emerald_home.gif';
import emerald_features from '../../imgs/emerald_features.gif';

const BodyContainer = styled.div`
  ${media.greaterThan("large")`
    width: 90%;
  `}
`;

function Emerald() {
    return (
      <div className="App">
        <Navigation next="projects-cms" />
        <BodyContainer>
          <Heading image={emerald_lrg} title="Emerald Backyards" subTitle="Web Development" techs={["JavaScript", "HTML5", "CSS3", "PHP"]} description="UX/UI design and frontend development for a landscaping company looking to gain clients." live="http://jennamae.ca/pm2/" />
          <SectionHead name="The Project" />
          <Project
          overview="Emerald Backyards is a landscaping company that provides services to the lower mainland. The companies goal of the website was to expand their client base with an attractive and explanitory website. I was working with a 3 month time frame to create the branding (logo design, color pallette), the wireframes and mockups, and code the responsive website. "
          listItems={["Responsive", "CSS animations", "Custom image modal", "Custom UX/UI Design", "Logo Design", "Active page in menu bar"]}
          />
          <SectionHead name="The Process" />
          <Process
          strategy="To start this project I wanted to be very clear on what the client was looking for. After interviewing and conversing with the client I landed on these words to have an idea of who they are as a company: bold, trend-setting, classic, and elegant. Once I felt confident in knowing what direction to go in I started to brainstorm the design. I spent a good portion of my time specifically on the logo and color palette. I knew they would play a large role in portreying who the company was in their site. After that I moved to the wireframes and mockups which included a few revisions. When I was ready to start coding I made sure to add a good amount of CSS transitions and animations to really convey that elegant feeling."
          challenges="Creating the design and branding for this project was a challenge because the client was very specific about what they wanted. I really wanted to make sure I was ticking all of their boxes and including everything that they wanted on the site. For this reason, I made sure to make lots of time for the design as I wanted to fit in as many revisions as possible to make the client feel satisfed with the designs." />
          <SectionHead name="The Product" />
          <Product 
          label="Home Page Design"
          listItems={["Active Page Highlighted", "CSS Animations", "Clean Design"]}
          image={emerald_home}
          label2="Custom Image Modal"
          listItems2={["Expand Image", "Close Icon", "Contact Form"]}
          image2={emerald_features}
          />
          <Footer />
        </BodyContainer>
      </div>
    );
  }
  
  export default Emerald;
  