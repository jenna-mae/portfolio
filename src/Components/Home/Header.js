import styled from 'styled-components';
import media from "styled-media-query";

import Navigation from '../Navigation';
import Highlight from '../Main/Highlight';
import Bubble from '../Main/Bubble';
import me from '../../imgs/me.jpeg';

import { ArrowDownShort } from '@styled-icons/bootstrap/ArrowDownShort';

const Hero = styled.div`
    // background-image: url('');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    position: relative;
    overflow: hidden;

    ${media.greaterThan("large")`
      width: 90%;
    `}
`;

const Texture = styled.div`
    height: 100%;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  z-index: 40;

  ${media.between("small", "medium")`
    width: 60%;
  `}

  ${media.greaterThan("medium")`
    flex-direction: row;
    justify-content: space-around;
  `}
`;

const Portrait = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 200px;
  box-shadow: 0px 4px 10px rgb(134 151 168 / 30%);

  ${media.greaterThan("medium")`
    width: 240px;
    height: 240px;
    margin-right: 40px;
  `}

  ${media.greaterThan("large")`
    width: 280px;
    height: 280px;
    margin-right: 20px;
  `}
`;

const Heading = styled.div`
  text-align: center;

  ${media.greaterThan("medium")`
    width: 50%;
    text-align: left;
  `}
`;

const Title = styled.h1`
  font-size: 24px;
  padding: 30px 0px 14px;
  font-weight: 400;

  ${media.greaterThan("medium")`
    padding-top: 0px;
  `}

  ${media.greaterThan("large")`
    font-size: 28px;
    padding-bottom: 20px;
  `}
`;

const Bio = styled.p`
  font-size: 15px;
  line-height: 26px;
  font-weight: 400;
  color: #313131;

  ${media.greaterThan("large")`
    font-size: 16px;
    line-height: 28px;
  `}
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%,0%);
`;

const Bubbles = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

function Header() {

  const bubbles = [
    {
      top: "340px",
      left: "300px",
      size: "1",
      speed: "120",
    },
    {
      top: "480px",
      left: "1000px",
      size: "2",
      speed: "110",
    },
    {
      top: "40px",
      left: "40px",
      size: "3",
      speed: "130",
    },
    {
      top: "80px",
      left: "420px",
      size: "1",
      speed: "144",
    },
    {
      top: "500px",
      left: "200px",
      size: "2",
      speed: "120",
    },
    {
      top: "400px",
      left: "420px",
      size: "1",
      speed: "110",
    },
    {
      top: "20px",
      left: "620px",
      size: "3",
      speed: "130",
    },
    {
      top: "300px",
      left: "90px",
      size: "1",
      speed: "144",
    },
    {
      top: "10px",
      left: "940px",
      size: "1",
      speed: "120",
    },
    {
      top: "600px",
      left: "60px",
      size: "2",
      speed: "110",
    },
    {
      top: "400px",
      left: "720px",
      size: "3",
      speed: "130",
    },
    {
      top: "340px",
      left: "40px",
      size: "1",
      speed: "144",
    },
    {
      top: "280px",
      left: "800px",
      size: "2",
      speed: "120",
    },
    {
      top: "460px",
      left: "500px",
      size: "3",
      speed: "130",
    }
  ]

  return (
    <div className="Header" id="Header">
      <Hero>
        <Navigation />
        <Bubbles>
          {bubbles.map((bubble, index) => (
            <Bubble key={index} number={index} top={bubble.top} left={bubble.left} size={bubble.size} speed={bubble.speed} />
          ))}
        </Bubbles>
        <Texture>
        <ContentContainer>
          <div>
            <Portrait src={me} alt="me" />
          </div>
          <Heading>
            <Title>Hi there! I'm <Highlight color="#6ABB72" text="Jenna"/></Title>
            <Bio>I'm a Vancouver based <Highlight color="#FF3062" text="full-stack web developer"/> passionate about building creative and interactive user interfaces. Let's build something together!</Bio>
          </Heading>
        </ContentContainer>
        <ArrowContainer>
          <ArrowDownShort size="30px" color="black" />
        </ArrowContainer>
        </Texture>
      </Hero>
    </div>
  );
}

export default Header;