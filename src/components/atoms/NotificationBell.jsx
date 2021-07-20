import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Styled from "styled-components";

const StyledForm = Styled.form`

        
    background-color: transparent;
    
    display: inline-flex;
    flex-direction: column;
`;
const CircleStyle = Styled.form`

        
    background-color: transparent;
    
    display: inline-flex;
    flex-direction: column;
    margin: -5px -10px 0px -10px;
    color: pink;
`;
const BellStyle = Styled.form`

        
    background-color: transparent;
    
    display: inline-flex;
    flex-direction: column;
    style=font-size: em;
    color: black;
`;


function NotificationBell() {
    return (
        <StyledForm>
            {/* <div style={{ position: "relative" }}> */}
            <span>
                <BellStyle> <FontAwesomeIcon icon={faBell} size={"lg"} /> </BellStyle>
                <CircleStyle><FontAwesomeIcon icon={faCircle} size={"xs"} /></CircleStyle>
                <span style={{ position: "absolute" }, { color: "blue" }, { fontsize: "2px" }}>2</span>
            </span>
            {/* </div> */}
        </StyledForm >
    );
}

export default NotificationBell;