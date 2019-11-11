const React = require('react');
const style = require('./style.scss');

class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            users: [],
        };
    }

    componentDidMount() {
        fetch('/api/users')
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                users: result.users
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
        const { error, isLoaded, users } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul className="to-do-list">
                    {users.map(user => (
                        <li key={user.username}>
                            {user.username}
                        </li>
                    ))}
                </ul>
            );
        }
    }
};

module.exports = Users;
