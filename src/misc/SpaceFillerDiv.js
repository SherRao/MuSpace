import Styled from "styled-components";

const SpaceFillerDiv = Styled.div`
    flex-grow: ${props => props.size === undefined ? 1 : props.size};
`;

export default SpaceFillerDiv;