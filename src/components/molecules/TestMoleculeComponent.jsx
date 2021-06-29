import React from "react";
import { TestAtomComponent } from "@atoms";

function TestMoleculeComponent({ text }) {
    return (
        <div>
            <TestAtomComponent text="hello my name is nausher" />
            <TestAtomComponent text={text} />

        </div>
    );
}

export default TestMoleculeComponent;