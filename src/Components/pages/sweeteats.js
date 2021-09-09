import styled from 'styled-components';
import media from "styled-media-query";

import Navigation from '../Navigation';
import SectionHead from '../Main/SectionHead';
import Heading from '../CaseStudies/Heading';
import Project from '../CaseStudies/Project';
import Process from '../CaseStudies/Process';
import Product from '../CaseStudies/Product';
import Footer from '../Main/Footer';

import sweeteats_lrg from '../../imgs/sweeteats_lrg.png';
import sweeteats_shop from '../../imgs/sweeteats_shop.gif';
import sweeteats_user from '../../imgs/sweeteats_user.gif';

const BodyContainer = styled.div`
  ${media.greaterThan("large")`
    width: 90%;
  `}
`;

function Sweeteats() {
    return (
      <div className="Sweeteats">
        <Navigation next="projects-lhmedia" />
        <BodyContainer>
          <Heading image={sweeteats_lrg} title="sweeteats" subTitle="E-Commerce" techs={["php", "JavaScript", "HTML5", "CSS3", "MySQL"]} description="E-commerce site built from scratch with PHP and MySQL. Functionalities include add to cart, adjust quantities, checkout, login, register, edit account details, and more." live="http://jennamae.ca/sweeteats/" github="https://github.com/jenna-mae/sweeteats/" />
          <SectionHead name="The Project" />
          <Project
          overview="Sweeteats is a family run meal kit company that specializes in bake-at-home dessert boxes. They create the recipes and package up the ingredients then send the box strait to your door. They needed a website that portreyed their mission and values as well as explained how they operate in a clear and exciting manner. One of the main goals was to ensure the user could navigate the website with ease while being informed about the companies processes along the way."
          listItems={["MVC Framework", "Custom UX/UI design", "Data restructuring", "Filter and sort products", "Create account", "Forgot password system", "Custom CMS for the client", "View all past invoices", "Responsive"]}
          />
          <SectionHead name="The Process" />
          <Process
          strategy="As this was a larger project I setup the file structure using the MVC model in PHP. The framework itself takes some time to setup but I knew that once it was done it would make less work in the future. I then moved to the design phase; I conducted user testing for the branding (logo design and color palette) and then created the wireframes and mockups. Once the designs were done I moved strait to coding the site. I started with the homepage in it's entirety and then worked at each function one by one in order of pre-determined importance. My first goal was to complete the shopping user flow. That way I could ensure the user would be able to visit the site, shop, and checkout. After that I picked away at each function/page until it was at a point where I felt confident in it's functionality."
          challenges="My main challenge for this project was the time frame. I had 2.5 months to create the whole project so I had to make sure I was staying focussed and not getting distracted along the way. In order to ensure I would be done on time I tried to focus on creating the minimial viable product. I did this by working on the functions that were needed for the site before adding any extra features." />
          <SectionHead name="The Product" />
          <Product 
          label="The User Flow of Shopping"
          listItems={["Filter", "Sort", "Adjust Quantity", "Add to Cart", "Checkout"]}
          image={sweeteats_shop}
          label2="The User Backend"
          listItems2={["Register", "Login", "Update Account", "Order History", "Recommended Products"]}
          image2={sweeteats_user}
          />
          <Footer />
        </BodyContainer>
      </div>
    );
  }
  
  export default Sweeteats;
  