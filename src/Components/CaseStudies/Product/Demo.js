import styled from 'styled-components';
import media from "styled-media-query";

const Section = styled.div`

`;

const Label = styled.p`
    padding-bottom: 10px;
`;

const SubLabel = styled.p`
    font-size: 12px;
    padding-bottom: 20px;
`;

const GifDesktop = styled.img`
    width: 50%;
    border-radius: 14px;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
`;

function Demo(props) {
    return (
        <Section>
            <Label>{props.label}</Label>
            <SubLabel>{props.subLabel}</SubLabel>
            <GifDesktop src={props.image} alt="jenna emerman web development" />
        </Section>
     );
}
  
export default Demo;
  