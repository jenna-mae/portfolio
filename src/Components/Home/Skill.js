import styled from 'styled-components';
import media from "styled-media-query";
import { useState } from 'react';

const IconWrapper = styled.div`
    display: inline-block;
    margin-bottom: 20px;
    width: 28%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.between("small", "medium")`
        width: 23%;
    `}

    ${media.greaterThan("medium")`
        width: 15%;
    `}

    ${media.greaterThan("large")`
        width: 12%;
        margin-bottom: 36px;
    `}
`;

const IconLabel = styled.h2`
    font-size: 8px;
    font-weight: normal;
    padding-top: 6px;

    ${media.greaterThan("large")`
        font-size: 9px;
    `}
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px 0px;
    width: 70px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    border: 1px solid #eee;

    ${media.greaterThan("large")`
        padding: 14px;
        width: 80px;
    `}
`;

function Skill(props) {
    const [color, setColor] = useState('black');
    const [flipAnimation, setFlipAnimation] = useState('');

    const Icon = styled(props.icon)`
        width: 26px;
        height: 26px;
        color: ${color};
        position: relative;
        animation-name: ${flipAnimation};
        animation-duration: 2s;

        @keyframes flip {
            50%  {color:${color}; transform: rotateY(180deg)}
          }
    `;

    const showColor = () => {
        if(props.colorId === "1") {
            setColor('#FF4471');
        } else if(props.colorId === "2") {
            setColor('#6ABB72');
        } else if(props.colorId === "3") {
            setColor('#359EFF');
        } else if(props.colorId === "4") {
            setColor('#7683EE');
        }
        
        setFlipAnimation('flip');
    }

    return (
        <IconWrapper>
            <InnerWrapper onMouseOver={showColor}>
                <Icon />
                <IconLabel>{props.label}</IconLabel>
            </InnerWrapper>
        </IconWrapper>
    );
  }
  
export default Skill;