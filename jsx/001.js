{/*
    JSX
    - Syntax extension for JavaScript, not valid JS, written for React.
    - Needs to be compiled.
    - Comments are different.
*/}

{/* JSX element saved in variable "title" */}
const title = <h1 id="main-title">Build, own, conquer</h1>;

{/* Nested JSX expression. Only one outermost element */}
let multiple = (
    <div>
        <div>A</div>
        <div>B</div>
    </div>
);

{/* This is wrong */}
let wrong = (
    <div>A</div>
    <div>B</div>
);