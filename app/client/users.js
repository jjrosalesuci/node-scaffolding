const React = require('react');
const ReactDOM = require('react-dom');
const UsersPage = require('../pages/users/view');
const styles = require('../pages/users/style.scss');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

ReactDOM.hydrate(<UsersPage initialState={initialState}/>, document.getElementById('app'));