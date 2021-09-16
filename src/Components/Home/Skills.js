import styled from 'styled-components';
import media from "styled-media-query";
import Skill from './Skill.js';

import { LogoJavascript } from '@styled-icons/ionicons-solid/LogoJavascript';
import { LogoReact } from '@styled-icons/ionicons-solid/LogoReact';
import { Php } from '@styled-icons/simple-icons/Php';
import { LogoHtml5 } from '@styled-icons/ionicons-solid/LogoHtml5';
import { LogoNodejs } from '@styled-icons/ionicons-solid/LogoNodejs';
import { LogoCss3 } from '@styled-icons/ionicons-solid/LogoCss3';
import { Jquery } from '@styled-icons/simple-icons/Jquery';
import { Terminal } from '@styled-icons/ionicons-outline/Terminal';
import { LogoSass } from '@styled-icons/ionicons-solid/LogoSass';
import { LogoAngular } from '@styled-icons/ionicons-solid/LogoAngular';
import { Mysql } from '@styled-icons/simple-icons/Mysql';
import { Devices } from '@styled-icons/material-outlined/Devices';
import { Adobecreativecloud } from '@styled-icons/simple-icons/Adobecreativecloud';
import { LogoWordpress } from '@styled-icons/ionicons-solid/LogoWordpress';
import { LogoFigma } from '@styled-icons/ionicons-solid/LogoFigma';

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    z-index: 10;
    position: relative;
    ${media.greaterThan("large")`
        width: 87%;
    `}
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: white;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
    border-radius: 24px;
    padding: 40px 40px 20px 40px;
    ${media.greaterThan("medium")`
        padding: 50px 50px 30px 50px;
    `}
    ${media.greaterThan("large")`
        padding: 60px 60px 24px 60px;
    `}
`;

const Hidden = styled.div`
    width: 25%;
    height: 60px;
    display: none;

    ${media.between("small", "medium")`
        display: block;
    `}

    ${media.greaterThan("large")`
        display: block;
        width: 12%;
    `}
`;

const HiddenMed = styled.div`
    width: 15%;
    height: 60px;
    display: none;
    ${media.greaterThan("medium")`
        display: block;
    `}
    ${media.greaterThan("large")`
        display: none;
    `}
`;

function Skills() {
  return (
    <div id="Skills">
        <Wrapper>
            <IconContainer>
                <Skill colorId="1" label="JavaScript" icon={LogoJavascript} />
                <Skill colorId="2" label="React" icon={LogoReact} />
                <Skill colorId="3" label="PHP" icon={Php} />
                <Skill colorId="4" label="HTML5" icon={LogoHtml5} />
                <Skill colorId="1" label="Node" icon={LogoNodejs} />
                <Skill colorId="2" label="CSS3" icon={LogoCss3} />
                <Skill colorId="3" label="jQuery" icon={Jquery} />
                <Skill colorId="4" label="Terminal" icon={Terminal} />
                <Skill colorId="3" label="SASS" icon={LogoSass} />
                <Skill colorId="2" label="Angular" icon={LogoAngular} />
                <Skill colorId="1" label="MySQL" icon={Mysql} />
                <Skill colorId="4" label="Responsive" icon={Devices} />
                <Skill colorId="3" label="Adobe CC" icon={Adobecreativecloud} />
                <Skill colorId="2" label="WordPress" icon={LogoWordpress} />
                <Skill colorId="1" label="Figma" icon={LogoFigma} />
                <Hidden />
                <HiddenMed />
                <HiddenMed />
                <HiddenMed />
            </IconContainer>
        </Wrapper>
    </div>
  );
}

export default Skills;
