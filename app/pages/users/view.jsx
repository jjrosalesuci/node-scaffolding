const React = require('react');
const style = require('./style.scss');
const Users = require('../../components/users');

class UsersPage extends React.Component {
    render() {
        return (<Users />);
    }
};

module.exports = UsersPage;
