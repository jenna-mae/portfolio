import styled from 'styled-components';

function Bubble(props) {
  let animation
  let color
  let size
  let zIndex

  if(props.size === '1') {
    size = '150px';
    zIndex = '0';
  } else if (props.size === '2') {
    size = '190px';
    zIndex = '20';
  } else {
    size = '220px';
    zIndex = '40';
  }

  if(props.number <= 4) {
    animation = "move2";
    color = "orange";
  } else if(props.number > 4 && props.number <= 8) {
    color = "pink"
    animation = "move1";
  } else {
    color = "green"
    animation = "move2";
  }

  const BubbleElement = styled.div`
    width: ${size};
    height: ${size};
    z-index: ${zIndex};
    border-radius: 200px;
    box-shadow: 0px 4px 10px rgb(134 151 168 / 30%);
    background-color: #F7F7F7;
    // background-color: ${color};
    position: absolute;
    top: ${props.top};
    left: ${props.left};
    animation: ${animation} 34s linear infinite;
  }
  `;
    return ( <BubbleElement /> );
  }
  
  export default Bubble;