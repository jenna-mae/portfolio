import styled from 'styled-components';
import media from "styled-media-query";

import Navigation from '../Navigation';
import SectionHead from '../Main/SectionHead';
import Heading from '../CaseStudies/Heading';
import Project from '../CaseStudies/Project';
import Process from '../CaseStudies/Process';
import Product from '../CaseStudies/Product';
import Footer from '../Main/Footer';

import openspace_lrg from '../../imgs/openspace_lrg.png';
import openspace_space from '../../imgs/openspace_space.gif';
import openspace_user from '../../imgs/openspace_user.gif';

const BodyContainer = styled.div`
  ${media.greaterThan("large")`
    width: 90%;
  `}
`;

function Openspace() {
    return (
      <div className="App">
        <Navigation next="projects-cms" />
        <BodyContainer>
          <Heading image={openspace_lrg} title="Openspace" subTitle="Social Networking Service" techs={["php", "JavaScript", "HTML5", "CSS3", "MySQL"]} description="A social networking web application that allows you to video chat with new groups of people." live="http://jennamae.ca/openspace/" github="https://github.com/jenna-mae/openspaces/" />
          <SectionHead name="The Project" />
          <Project
          overview="Openspace is a web application that encourages people to meet and hangout with new people in a group setting. The user has the option to join an existing space where a group of people are hanging out with a certain topic/goal in mind. Or, if there are no spaces that catch their eye they can create their own and wait for other users to join. I worked on this project with 3 others. We followed the Agile/Scrum method and used technologies such as JIRA and Trello to organize the project. We each had a specific role in the project to ensure we stayed focused and aware of of our own tasks at all times. My role was the backend developer and I used PHP and MySQL."
          listItems={["Register and login system", "Date and time functionality", "Hide expired spaces", "Show currently happening at the top", "Data restructuring", "Redirect to dynamic URL", "Categories"]}
          />
          <SectionHead name="The Process" />
          <Process
          strategy="At the very beginning we made a list of all of the functions the application might need. We then sorted them in order of importance. Once we had our list of tasks organzied we setup our Trello board to assign tasks and points to each card. We hosted daily standup meetings as well as weekly sprint retrospectives. Using the Agile and SCRUM methods ensured we were always staying on track and completing our tasks in a timely fashion."
          challenges="It was my first project using Agile and SCRUM which made the beginning of the project feel slightly uncomfortable. This is because it involved a whole mindset change of how I viewed the project and tasks at hand. After the first week or two it became much smoother as we all became more comfortable with the framework. By the end of the project I felt very confident in my abilities to work in the Agile way, and now I enjoy using the method in my other projects." />
          <SectionHead name="The Product" />
          <Product 
          label="Login and Create a Space"
          listItems={["Register", "Login", "Create a New Space", "Select Category", "Set Date and Time"]}
          image={openspace_space}
          label2="Coming Soon Button and Edit User"
          listItems2={["Display Inactive Space", "Edit Account Details", "User and Home Navigation"]}
          image2={openspace_user}
          />
        </BodyContainer>
        <Footer />
      </div>
    );
  }
  
  export default Openspace;
  