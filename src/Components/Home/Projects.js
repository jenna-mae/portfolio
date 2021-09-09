import styled from 'styled-components';
import media from "styled-media-query";
import Project from './Project';
import sweeteats_lrg from '../../imgs/sweeteats_lrg.png';
import openspace_lrg from '../../imgs/openspace_lrg.png';
import lhmedia_lrg from '../../imgs/lhmedia_lrg.png';
import emerald_lrg from '../../imgs/emerald_lrg.png';
import cms_lrg from '../../imgs/cms_lrg.png';

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  background-color: white;
  box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
  border-radius: 10px;
  padding: 40px 40px 0px 40px;
  border: 1px solid #eee;
  z-index: 10;
  position: relative;

  ${media.greaterThan("medium")`
    padding: 50px 50px 0px 50px;
  `}
  ${media.greaterThan("large")`
    padding: 60px 60px 0px 60px;
  `}
`;

function Projects(props) {
  return (
      <div id="Projects">
          <Wrapper>
            <Project goto="/projects-sweeteats" image={sweeteats_lrg} name='sweeteats' subTitle="E-Commerce" techs={["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"]} description='E-commerce site built from scratch with PHP and MySQL. Functionalities include add to cart, adjust quantities, checkout, login, register, edit account details, and more.' color='1' />
            <Project goto="/projects-lhmedia" image={lhmedia_lrg} name='LH Media Productions' subTitle="Client Site" techs={["JQuery", "HTML5", "CSS3", "PHP"]} description='A portfolio site built for a client who works as a videographer and photogtrapher.' color='2' />
            <Project goto="/projects-openspace" image={openspace_lrg} name='openspace' subTitle="Social Networking Service" techs={["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"]} description='A social networking web application that allows you to video chat with new groups of people.' color='1' />
            <Project goto="/projects-emerald" image={emerald_lrg} name='Emerald Backyards' subTitle="Web Development" techs={["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"]} description='UX/UI design and frontend development for a landscaping company looking to gain clients.' color='2' />
            <Project goto="/projects-cms" image={cms_lrg} name='Custom CMS' subTitle="Content Management System" techs={["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"]} description='Content management system for clients to create, read, update and delete the information on their website.' color='1' />
          </Wrapper>
      </div>
  );
}

export default Projects;
