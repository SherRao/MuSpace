import styled from 'styled-components';
import { TestAtomComponent } from "@atoms";

function TestMoleculeComponent({ text }) {
    return (
        <>
            <TestAtomComponent text="hello my name is nausher" />
            <TestAtomComponent text="and i am very cool" />

        </>
    );
}

export default TestMoleculeComponent;