import styled from 'styled-components';
import media from "styled-media-query";

import Navigation from '../Navigation';
import SectionHead from '../Main/SectionHead';
import Heading from '../CaseStudies/Heading';
import Project from '../CaseStudies/Project';
import Process from '../CaseStudies/Process';
import Product from '../CaseStudies/Product';
import Footer from '../Main/Footer';

import cms_lrg from '../../imgs/cms_lrg.png';
import cms_products from '../../imgs/cms_products.gif';
import cms_orders from '../../imgs/cms_orders.gif';

const BodyContainer = styled.div`
  ${media.greaterThan("large")`
    width: 90%;
  `}
`;

function Cms() {
    return (
      <div className="App">
        <Navigation next="projects-sweeteats" />
        <BodyContainer>
          <Heading image={cms_lrg} title="Custom CMS" subTitle="Content Management System" techs={["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"]} description="Content management system for clients to create, read, update and delete the information on their website." />
          <SectionHead name="The Project" />
          <Project
          overview="I created a custom content management system for my clients to access through a secure login. Depending on the client site, they have the ability to view and edit their products, site pages, order information, site details, categories, navigations, images, and more. With this system the client is able to change or add any information on their site without having to contact the web developer."
          listItems={["Search feature", "CRUD abilities", "Custom UX/UI Design", "Login/logout feature", "Mark orders as fulfilled", "Customizable based on client"]}
          />
          <SectionHead name="The Process" />
          <Process
          strategy="The goal for the content management system was to create a very simple UI for a range of different clients to use. Sometimes there is a lot of data that the client has access to so I needed to structure the pages in a way that displayed the data clearly. When I was coding the system I started with the 'read' portion of CRUD. I queried all of the data required for the client to read and displayed it on the cms. I then added the functionality to 'create' new entries and 'delete' entries. Once those functions were all good to go I added the 'update' functionality for the client to update any of the information on their site."
          challenges="One of the more challenging aspects of this project was creating a smooth user interface for the client. Once all of the data and functionality was on the pages I had to revise my designs and take into consideration the volume of data that will be on the page. In the end I seperated everything into their own sections with a simple, easy to use navigation fixed on the left side." />
          <SectionHead name="The Product" />
          <Product 
          label="Add and Update Entries"
          listItems={["Add Products", "Update Products", "Update Types and Categories", "Delete Products"]}
          image={cms_products}
          label2="View Customer Orders"
          listItems2={["Search by Invoice Number", "Search by Email", "View Order Details", "Mark Order as Complete", "Mark Order as Incomplete"]}
          image2={cms_orders}
          />
          <Footer />
        </BodyContainer>
      </div>
    );
  }
  
  export default Cms;
  