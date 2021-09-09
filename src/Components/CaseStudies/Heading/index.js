import styled from 'styled-components';
import media from "styled-media-query";
import { ArrowDownShort } from '@styled-icons/bootstrap/ArrowDownShort';
import TechUsed from "../../Main/TechUsed";
import ButtonPrimary from "../../Main/ButtonPrimary";

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;

    ${media.between("small", "medium")`
        width: 75%;
    `}

    ${media.greaterThan("large")`
        width: 80%;
    `}
`;

const ContentWrapper = styled.div`
    ${media.greaterThan("medium")`
        display: flex;
        flex-direction: row-reverse;
        height: 100vh;
        align-items: center;
        justify-content: space-between;
    `}
`;

const ImageContainer = styled.div`
    padding-top: 80px;

    ${media.greaterThan("medium")`
        width: 50%;
        padding-top: 0px;
        padding-left: 20px;
    `}
    ${media.greaterThan("large")`
        padding-left: 0px;
    `}
`;

const ContentContainer = styled.div`
    width: 100%;
    ${media.between("small", "medium")`
        width: 85%;
    `}
    ${media.greaterThan("medium")`
        width: 50%;
    `}
    ${media.greaterThan("large")`
        padding-right: 80px;
    `}
`;

const Image = styled.img`
    width: 100%;
    border-radius: 14px;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
`;

const Title = styled.h1`
    font-size: 26px;
    padding-top: 20px;

    ${media.greaterThan("medium")`
        padding-top: 0px;
    `}

    ${media.greaterThan("large")`
        font-size: 28px;
    `}
`;

const SubTitle = styled.h2`
    color: grey;
    font-size: 12px;
    padding-bottom: 10px;
    font-style: italic;

    ${media.greaterThan("large")`
        font-size: 14px;
        padding-bottom: 20px;
    `}
`;

const Description = styled.p`
    padding-top: 10px;
    font-size: 13px;
    
    ${media.greaterThan("large")`
        font-size: 15px;
        line-height: 24px;
        padding-top: 20px;
    `}
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%,0%);
`;


function Heading(props) {

    const TechSpecs = props.techs
    const specs = TechSpecs.map((spec) => {
        return <TechUsed value={spec} />
    })

    return (
        <div className="Heading">
            <Wrapper>
                <ContentWrapper>
                    <ImageContainer>
                        <Image src={props.image} alt={props.alt} />
                    </ImageContainer>
                    <ContentContainer>
                        <Title>{props.title}</Title>
                        <SubTitle>{props.subTitle}</SubTitle>
                        {specs}
                        <Description>{props.description}</Description>
                        {props.live ? <ButtonPrimary title="View Live" link={props.live} /> : ""}
                        {props.github ? <ButtonPrimary title="GitHub" link={props.github} /> : ""}
                    </ContentContainer>
                    <ArrowContainer>
                        <ArrowDownShort size="30px" color="black" />
                    </ArrowContainer>
                </ContentWrapper>
            </Wrapper>
        </div>
     );
}
  
  export default Heading;
  