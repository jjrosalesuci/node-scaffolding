const React = require('react');

class User extends React.Component {
  constructor(props) {
    super(props);

    this.sayHello = this.sayHello.bind(this);
  }

  sayHello() {
    alert("Hola Mundo:" + this.props.username);
  }

  render() {
    return (
      <div>
        <p>{this.props.username}</p>
        <button onClick={this.sayHello}>Click Me</button>
      </div>
    );
  }
};

module.exports = User;
