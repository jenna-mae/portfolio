import styled from 'styled-components';
import media from "styled-media-query";

const ProjectSpecs = styled.h2`
    font-size: 11px;
    font-weight: normal;
    padding: 8px;
    display: inline-block;
    margin-right: 10px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
    margin-bottom: 8px;
    ${media.greaterThan("large")`
        margin-bottom: 0px;
    `}
`;

function TechUsed(props) {
    return ( <ProjectSpecs>{props.value}</ProjectSpecs> );
}

export default TechUsed;