import styled from 'styled-components';
import media from "styled-media-query";

const ProjectSpecs = styled.h2`
    font-size: 10px;
    font-weight: normal;
    padding: 6px 8px;
    display: inline-block;
    margin-right: 8px;
    background-color: white;
    border-radius: 6px;
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