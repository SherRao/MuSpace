<h1 align="center"> 
  <a href=""><img src="../public/logo.svg" width="250"/></a>
</h1>

<h2 align="center"> >Project Conventions</h2>
<p align="center"> >
This document outlines basic conventions to be followed by all developers of this project.
</p>

<h3>Naming</h3>
<ul>
  <li>We will use the standard naming conventions for React projects</li>
  <ul>
    <li>Uppercase names are reserved only for the export function in the component.</li>
    <ul><li>Also, the export function’s name should match the file name.</li></ul>
    <li>Lowercase names are used for functions and variables within the function component.</li>
    <li>All uppercase names (NUMBERS, STRING) are used for constant values and are defined outside the scope of the function component</li>
  </ul>
    <li>Try to use longer and more descriptive names to enhance readability of code. Try to avoid variables like:
      <pre>const (t, setT) = useState([]); </pre>
      and instead use:
        <pre>const (screenPositions, setScreenPositions) = useState([]);</pre></li>
    <li>Avoid leaving numbers in formulas (avoid creating Magic numbers); it makes it hard to read and understand code.
        Instead of:
        <pre>var speed = currentPosition * 0.678;</pre>
        Do this:
        <pre>var speedCoefficient = 0.678;<br/>var speed = currentPosition * speedCoefficient;</pre></li>
</ul>

<h3>Code Style</h3>
All code pushed to the main branch will be linted via ESLint - ESLint follows the JavaScript Standard Style which can be found <a href="https://standardjs.com/", target="_blank">here</a>
