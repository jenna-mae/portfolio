import styled from 'styled-components';
import media from "styled-media-query";

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    z-index: 10;
    position: relative;

    ${media.greaterThan("large")`
        width: 80%;
    `}
`;

const WhiteContainer = styled.div`
    background-color: white;
    border-radius: 14px;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
`;

const InnerWrapper = styled.div`
    padding: 60px;

    ${media.greaterThan("medium")`
        padding: 80px;
    `}

    ${media.greaterThan("medium")`
        padding: 94px;
    `}
`;

const TextContainer = styled.div`
    padding-bottom: 40px;

    &:last-child {
        padding-bottom: 0px;
    }
`;

const Title = styled.h3`
    font-size: 19px;
    font-weight: normal;
    padding-bottom: 16px;
`;

const BodyText = styled.p`
    font-size: 13px;
    line-height: 26px;
    color: #424242;
`;

function Process(props) {
    return (
        <div className="Process">
            <Wrapper>
                <WhiteContainer>
                    <InnerWrapper>
                        <TextContainer>
                            <Title>My Strategy</Title>
                            <BodyText>{props.strategy}</BodyText>
                        </TextContainer>
                        <TextContainer>
                            <Title>Challenges</Title>
                            <BodyText>{props.challenges}</BodyText>
                        </TextContainer>
                    </InnerWrapper>
                </WhiteContainer>
            </Wrapper>
        </div>
     );
}
  
export default Process;
  