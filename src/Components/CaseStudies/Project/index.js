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

const BulletList = styled.ul`
    color: #424242;
    ${media.greaterThan("medium")`
        columns: 2;
    `}
    ${media.greaterThan("large")`
        columns: 3;
    `}
`;

const Bullet = styled.li`
    list-style-position: inside;
    font-size: 13px;
    padding-top: 8px;
    color: #424242;
`;

function Project(props) {
    const ListItems = props.listItems
    const items = ListItems.map((item) => {
        return <Bullet>{item}</Bullet>
    })
    return (
        <div className="ProductInfo">
            <Wrapper>
                <WhiteContainer>
                    <InnerWrapper>
                        <TextContainer>
                            <Title>Overview</Title>
                            <BodyText>{props.overview}</BodyText>
                        </TextContainer>
                        <TextContainer>
                            <Title>Project Summary</Title>
                            <BulletList>
                                {items}
                            </BulletList>
                        </TextContainer>
                    </InnerWrapper>
                </WhiteContainer>
            </Wrapper>
        </div>
     );
}
  
export default Project;
  