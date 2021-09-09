import styled from 'styled-components';

const Highlighter = styled.span`
    color: ${props => props.color};
`;

function Highlight(props) {
  return <Highlighter color={props.color}>{props.text}</Highlighter>;
}

export default Highlight;
