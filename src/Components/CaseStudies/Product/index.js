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

const Section = styled.div`
    padding-bottom: 100px;

    &:last-child {
        padding-bottom: 0px;
    }
    ${media.greaterThan("medium")`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `}
`;

const SectionText = styled.div`
    ${media.greaterThan("medium")`
        width: 45%;
    `}
`;

const SectionImage = styled.div`
    ${media.greaterThan("medium")`
        width: 55%;
    `}
`;

const Label = styled.p`
    font-size: 18px;
    padding-bottom: 12px;
`;

const GifDesktop = styled.img`
    width: 100%;
    border-radius: 14px;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
`;

const BulletList = styled.ul`
    color: #424242;
    columns: 1;
    padding-bottom: 20px;
`;

const Bullet = styled.li`
    list-style-position: inside;
    font-size: 13px;
    padding-top: 8px;
    color: #424242;
    ${media.greaterThan("large")`
        font-size: 14px;
        padding-top: 12px;
    `}
`;

const BulletItem = styled.span`
    padding-left: 8px;
`;

function Product(props) {
    const ListItems = props.listItems
    const items = ListItems.map((item) => {
        return <Bullet><BulletItem>{item}</BulletItem></Bullet>
    })
    const ListItems2 = props.listItems2
    const items2 = ListItems2.map((item) => {
        return <Bullet><BulletItem>{item}</BulletItem></Bullet>
    })
    return (
        <div className="Product">
            <Wrapper>
                <WhiteContainer>
                    <InnerWrapper>
                        <Section>
                            <SectionText>
                                <Label>{props.label}</Label>
                                {/* <SubLabel>{props.subLabel}</SubLabel> */}
                                <BulletList>
                                    {items}
                                </BulletList>
                            </SectionText>
                            <SectionImage>
                                <GifDesktop src={props.image} alt="jenna emerman web development" />
                            </SectionImage>
                        </Section>
                        <Section>
                            <SectionText>
                                <Label>{props.label2}</Label>
                                {/* <SubLabel>{props.subLabel2}</SubLabel> */}
                                <BulletList>
                                    {items2}
                                </BulletList>
                            </SectionText>
                            <SectionImage>
                                <GifDesktop src={props.image2} alt="jenna emerman web development" />
                            </SectionImage>
                        </Section>
                    </InnerWrapper>
                </WhiteContainer>
            </Wrapper>
        </div>
     );
}
  
export default Product;
  