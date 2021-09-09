import styled from 'styled-components';
import media from "styled-media-query";
import Highlight from '../Main/Highlight';

import odie from '../../imgs/odie.jpeg';
import me2 from '../../imgs/me2.jpeg';
import food from '../../imgs/food.jpeg';
import flowers from '../../imgs/flowers.jpeg';


const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    z-index: 10;
    position: relative;
`;

const AboutContainer = styled.div``;

const AboutText = styled.p`
    font-size: 14px;
    line-height: 26px;
    color: #424242;
    padding-bottom: 20px;

    ${media.greaterThan("large")`
        line-height: 28px;
    `}
`;

const Images = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${media.greaterThan("medium")`
        width: 44%;
    `}
`;

const Image = styled.div`
    width: 45%;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
    background-color: white;
    padding: 10px;
    margin-top: 40px;

    ${media.greaterThan("medium")`
        width: 48%;
        margin-top: 0px;
        margin-bottom: 10px;
    `}
`;

const AboutImage = styled.img`
    max-width: 100%;
    border-radius: 14px;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    height: 100%;
    object-fit: cover;
`;

const WhiteContainer = styled.div`
    background-color: white;
    border-radius: 14px;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
    padding: 40px;
    ${media.greaterThan("medium")`
        padding: 50px;
    `}
    ${media.greaterThan("medium")`
        padding: 60px;
    `}
`;

const InnerWrapper = styled.div`
    ${media.greaterThan("medium")`
        display: flex;
        justify-content: space-between;
    `}
`;

const TextWrapper = styled.div`
    ${media.greaterThan("medium")`
        width: 50%;
    `}
`;

const ListItems = styled.ul`
    padding-top: 0px;
`;

const ListItem = styled.li`
    list-style-position: inside;
    font-size: 14px;
    line-height: 26px;
    color: #424242;

    ${media.greaterThan("large")`
        line-height: 28px;
    `}
`;

const Item = styled.span`
    padding-left: 8px;
`;

function About() {
  return (
    <div id="About">
        <Wrapper>
            <WhiteContainer>
                <InnerWrapper>
                    <TextWrapper>
                        <AboutContainer>
                            <AboutText>I'm a recent graduate from the Web Development and Interactive Design program at the Vancouver Institutue of Media Arts (VanArts). The program taught me the ins an outs of the web development life cycle from start to finish. Although I enjoyed learning about the UX/UI design process; what I really fell in love with was coding. I developed a strong passion for building complex products and solving problems through code. I'm eager and excited to join a team of passionate programmers and grow in this industry.</AboutText>
                        </AboutContainer>
                        <AboutContainer>
                            <AboutText>Things that are important to me (in no specific order):</AboutText>
                            <ListItems>
                                <ListItem><Item>My Dog <Highlight color="#45ac4f" text="Odie" /></Item></ListItem>
                                <ListItem><Item>Being in <Highlight color="#5361df" text="Nature" /></Item></ListItem>
                                <ListItem><Item><Highlight color="#FF4471" text="Coffee" /></Item></ListItem>
                                <ListItem><Item>Exploring new <Highlight color="#0092e1" text="Restaurants" /></Item></ListItem>
                                <ListItem><Item>Daily <Highlight color="#45ac4f" text="Excersice" /></Item></ListItem>
                                <ListItem><Item>Creative <Highlight color="#5361df" text="Coding" /> Projects</Item></ListItem>
                            </ListItems>
                        </AboutContainer>
                    </TextWrapper>
                    <Images>
                        <Image>
                            <AboutImage src={odie} alt="dog" />
                        </Image>
                        <Image>
                            <AboutImage src={me2} alt="dog" />
                        </Image>
                        <Image>
                            <AboutImage src={food} alt="dog" />
                        </Image>
                        <Image>
                            <AboutImage src={flowers} alt="dog" />
                        </Image>
                    </Images>
                </InnerWrapper>
            </WhiteContainer>
        </Wrapper>
    </div>
  );
}

export default About;
