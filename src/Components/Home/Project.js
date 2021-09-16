import styled from 'styled-components';
import media from "styled-media-query";
import TechUsed from "../Main/TechUsed";

const SubTitle = styled.h2`
    color: grey;
    font-size: 12px;
    padding-bottom: 16px;
    font-style: italic;

    ${media.greaterThan("large")`
        font-size: 14px;
        padding-bottom: 20px;
    `}
`;

const Background = styled.div`
    background-color: white;
    border-radius: 14px;
    // box-shadow: 0px 14px 28px rgba(134, 151, 168, 0.08);
    box-shadow: 0px 8px 12px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
    position: relative;
    margin-bottom: 30px;
    ${media.greaterThan("medium")`
        margin-bottom: 50px;
    `}
    ${media.greaterThan("large")`
        margin-bottom: 60px;
    `}
`;

const ProjectName = styled.h1`
    font-size: 22px;
    padding: 30px 0px 4px;

    ${media.greaterThan("medium")`
        padding-top: 0px;
    `}
`;

const ProjectDetails = styled.p`
    font-size: 13px;
    line-height: 21px;
    font-weight: 400;
    padding: 10px 0px 18px;

    ${media.between("medium", "large")`
        font-size: 12px;
    `}

    ${media.greaterThan("large")`
        line-height: 24px;
        padding: 20px 0px;
    `}
`;

const MockupFlat = styled.img`
    width: 100%;
    display: block;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
    border-radius: 8px;

    ${media.between("small", "medium")`
        width: 80%;
        margin: 0 auto;
    `}
`;

const ProjectInfo = styled.div`
    padding: 24px;

    ${media.between("small", "medium")`
        padding: 40px;
    `}

    ${media.greaterThan("medium")`
        display: flex;
        padding: 30px;
        flex-direction: row;
        align-items: center;
    `}

    ${media.greaterThan("large")`
        padding: 50px;
    `}
`;

const ImageContainer = styled.div`
    ${media.greaterThan("medium")`
        width: 45%;
        margin-right: 10px;
    `}
`;

const TextContainer = styled.div`
    ${media.greaterThan("medium")`
        width: 55%;
        padding-left: 40px;
    `}
`;

const ViewBtn = styled.a`
    color: ${props => props.color};
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid ${props => props.color};
    font-size: 13px;
    font-weight: 400;

    &:hover {
        text-shadow: 0 0 .25px ${props => props.color}, 0 0 .25px ${props => props.color};
        transition: all .3s linear;
    }

    ${media.greaterThan("large")`
        font-size: 14px;
    `}
`;

function Project(props) {
    let color

    if(props.color === '1') {
        color = '#FF3062';
    } else if(props.color === '2') {
        color = '#6ABB72';
    } else if(props.color === '3') {
        color = '#7683EE';
    } else if(props.color === '4') {
        color = '#1fa3eb';
    } else {
        color = '#FF3062';
    }

    const TechSpecs = props.techs
    const specs = TechSpecs.map((spec, index) => {
        return <TechUsed key={index} value={spec} />
    })

    return (
      <div className="Project">
            <Background>
                <ProjectInfo className="projectSingle">
                    <ImageContainer>
                        <MockupFlat src={props.image} alt="mockup" />
                    </ImageContainer>
                    <TextContainer>
                        <ProjectName>{props.name}</ProjectName>
                        <SubTitle>{props.subTitle}</SubTitle>
                        {specs}
                        <ProjectDetails>{props.description}</ProjectDetails>
                        <ViewBtn href={props.goto} color={color}>View Project</ViewBtn>
                    </TextContainer>
                </ProjectInfo>
            </Background>
      </div>
    );
  }
  
  export default Project;