import React from "react";
import Styled from "styled-components";

const StyledDiv = Styled.div`
    display: fixed;
    align-items: center;
    margin: 4em;
`;

const Spinner = Styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    
`;

const HalfSpinner = Styled.div`
    width: 50px;
    height: 50px;
    border: 3px solid ${props => props.theme.colors.muSpacePurple}};
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear 0s infinite;

    @keyframes spin {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(360deg);
        }
    }
`;


function Loading({ loading_text }) {
    return (
        <StyledDiv>
            <Spinner>
                <HalfSpinner/>
            </Spinner>
           <h3>{loading_text}</h3>
        </StyledDiv>
    );
}

export default Loading;