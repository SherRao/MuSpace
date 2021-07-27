import Styled from "styled-components";

const SpaceFillerDiv = Styled.div`
    flex-grow: ${props => props.size === undefined ? 1 : props.size};


    margin: 1em;
    margin: 2em 0;
    margin: 1em 2em 3em 4em;
`;

export default SpaceFillerDiv;