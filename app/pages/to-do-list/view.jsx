const React = require('react');
const style = require('./style.scss');
const ToDoList = require('../../components/to-do-list');

class ToDoListPage extends React.Component {
    render() {
        return (<ToDoList />);
    }
};

module.exports = ToDoListPage;
