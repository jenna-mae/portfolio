import styled from 'styled-components';
import media from "styled-media-query";

function SectionHead(props) {

  const Heading = styled.h2`
    display: inline-block;
    font-weight: 300;
    font-size: 22px;
    // background-color: #6ABB72;
    // color: white;
    background-color: white;
    box-shadow: 0px 4px 10px rgb(134 151 168 / 10%);
    border: 1px solid #eee;
    border-bottom: none;
    margin-bottom: -4px;
    padding: 16px 32px;
    border-radius: 12px 12px 0px 0px;
    z-index: 0;
    position: relative;

    ${media.greaterThan("large")`
      
    `}
  `;

  const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 80px 60px 0px 60px;
    z-index: 0;
    position: relative;
    ${media.greaterThan("large")`
      width: 80%;
    `}
  `;

    return (
      <div className="SectionHead">
        <Container>
          <Heading>{props.name}</Heading>
        </Container>
      </div>
    );
  }
  
  export default SectionHead;