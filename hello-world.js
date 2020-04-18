class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello World, {this.props.name}</h1>
    );
  }
}

ReactDOM.render(<HelloWorld name="Ashish" />, document.getElementById("root"));
