import React from 'react';
import ReactDOM from 'react-dom/client';


// const jsxParent = <h1 id="parent">Hello from JSX Parent</h1>;
const Heading = () => <h1 className='title-header'>🚀Financial Express!</h1>;

const subHeading = <h2 id="sub-heading">Your daily dose of financial news {2*2*2} times</h2>;
const title = () => "Namaste React Course";
// React funtional component
const JsxParent = () => (
    <div id="parent" className="wrapper">
        <Heading/>
        {subHeading} {title()}
        <h1 id="parent">Hello from JSX Parent</h1>
    </div>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JsxParent/>);