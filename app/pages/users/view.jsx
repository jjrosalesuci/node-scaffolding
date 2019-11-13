const React = require('react');
const User = require('./components/user');

class UsersPage extends React.Component {
    render() {
      const { users } = this.props.initialState;

      return (
        <div>
          {
            users.map((user) => {
              return (
                <User username={user.username} />
              );
            })
          }
        </div>
      )

    }
};

module.exports = UsersPage;
