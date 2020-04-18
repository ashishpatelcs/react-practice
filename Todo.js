class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemTitle: '',
      items: [
       { id: 1, title: 'buy milk' },
       { id: 2, title: 'create react app' }
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  render() {
    return (
      <div>
        <h3>Todo:</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-item">
            Add a new item 
          </label>
          <input
            id="new-item"
            type="text"
            onChange={this.handleChange}
            value={this.state.newItemTitle}
          />
          <button>
            Add Item #{this.state.items.length}
          </button>
        </form>
      </div>
    );
  }
  
  handleChange($event) {
    this.setState({ newItemTitle: $event.target.value })
  }
  
  handleSubmit($event) {
    $event.preventDefault();
    if (this.state.newItemTitle.length === 0) {
      return;
    }
    
    const newItem = {
      title: this.state.newItemTitle,
      id: Date.now()
    }
    
    this.setState(state => ({
      items: state.items.concat(newItem),
      newItemTitle: ''
    }))
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('app'));
