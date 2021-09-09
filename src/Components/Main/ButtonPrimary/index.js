import styled from 'styled-components';
import media from "styled-media-query";

const Button = styled.a`
    color: #FF3062;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #FF3062;
    font-size: 13px;
    font-weight: 400;
    margin-right: 40px;
    margin-top: 20px;

    ${media.greaterThan("large")`
        font-size: 14px;
    `}
`;

function ButtonPrimary(props) {
    return ( <Button href={props.link}>{props.title}</Button> );
}

export default ButtonPrimary;