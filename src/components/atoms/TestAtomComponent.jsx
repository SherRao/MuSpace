import styled from 'styled-components';

const Test = styled.h1`
	color: ${props => props.theme.colors.pink};
    font-family: ${props => props.theme.fonts.header};
    font-size: ${props => props.theme.fontSizes.small};
    padding: 0.5em;
    text-decoration: none;
    background-color: ${props => props.theme.colors.lightBlue};
`

function TestAtomComponent({ text }) {
    return (
        <Test>{text}</Test>
    );
}

export default TestAtomComponent;