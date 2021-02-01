import React from "react";
import ReactDOM from "react-dom";
import P from 'prop-types';
import './style.scss';

App.propTypes = {
    optionalChainingValue: P.string.isRequired
};
function App (props) {
    const optionalChainingDemo = props?.optionalChainingValue;
    const env = process?.env?.NODE_ENV;

    return (
        <>
            <h1>Hello App!!!</h1>
            <h1>App is currently running in {env} mode.</h1>
            <a href={optionalChainingDemo} target="_blank">This is example
                of polyfilled JS feature called Optional Chainig. Click to learn more.</a>
        </>
    );
}

const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining";
ReactDOM.render(
    <App optionalChainingValue={url} />,
    document.getElementById('root')
);
