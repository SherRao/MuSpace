import React from "react";
import { TestAtomComponent } from "@atoms";

function TestMoleculeComponent({ text }) {
    return (
        <>
            <TestAtomComponent text="hello my name is nausher" />
            <TestAtomComponent text={text} />

        </>
    );
}

export default TestMoleculeComponent;