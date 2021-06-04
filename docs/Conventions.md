<h1 align="center">
    <a href="./"><img id="header-logo" src="./logo.svg" width="250" alt="MuSpace logo" /></a>
</h1>

<h1 align="center">Project Conventions</h1>
<p align="center">
    This document outlines basic code styling conventions to be followed by all developers of this project.
</p>

<h2>Naming</h2>

<ul>
    <li>We will use the standard naming conventions for React projects</li>
    <ul>
        <li>Uppercase names are reserved only for the export function in the component.</li>
        <ul>
            <li>Also, the export function’s name should match the file name.</li>
        </ul>
        <li>Lowercase names are used for functions and variables within the function component.</li>
        <li>
            All uppercase names (NUMBERS, STRING) are used for constant values and are defined outside the scope of the
            function component
        </li>
    </ul>
    <br />
    <li>
        Try to use longer and more descriptive names to enhance readability of code. Try to avoid variables like:
        <pre>const (t, setT) = useState([]); </pre>
        and instead use:
        <pre>const (screenPositions, setScreenPositions) = useState([]);</pre>
    </li>
    <br />
    <li>
        Avoid leaving numbers in formulas (avoid creating Magic numbers); it makes it hard to read and understand code.
        Instead of:
        <pre>var speed = currentPosition * 0.678;</pre>
        Do this:
        <pre>var speedCoefficient = 0.678;<br/>var speed = currentPosition * speedCoefficient;</pre>
    </li>
    <br />
</ul>

<h2>Code Style</h2>
<p>
    All code pushed to the main branch will be linted via ESLint - ESLint follows the JavaScript Standard Style which
    can be found <a href="https://standardjs.com/" target="_blank">here</a>.
</p>
