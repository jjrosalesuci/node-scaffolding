const React = require('react');
const style = require('./style.scss');
const Task = require('../task');

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            tasks: [],
        };
    }

    componentDidMount() {
        fetch('/api/tasks')
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                tasks: result.tasks
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {
        const { error, isLoaded, tasks } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul className="to-do-list">
                  {
                    tasks.map(task => (
                      <Task key={task.id} id={task.id} name={task.name} description={task.description} />
                    ))
                  }
                </ul>
            );
        }
    }
};

module.exports = ToDoList;
