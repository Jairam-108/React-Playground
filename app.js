import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', {
    id: 'parent'
}, React.createElement('div', {id: 'child'},  [
    React.createElement('h1', {id: 'head-txt', key: 'head-1'},  'Hello wold from h1 react'),
    React.createElement('h2', {id: 'h2-txt', key: 'head-2'},  'Hello wold from h2 react')
]));
console.log('parent', parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);