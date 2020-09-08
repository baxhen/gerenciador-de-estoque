import React from 'react';
import { connect } from 'react-redux';

import { fetchTodos, deleteTodo, addTodo } from 'actions';
import 'components/App.css';
import Card from 'components/Card';

class App extends React.Component {
  state = {
    inputText: '',
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  onDeleteTodoClick = (id) => {
    this.props.deleteTodo(id);
  };
  onAddTodoClick = () => {
    const todo = {
      text: this.state.inputText,
      id: Date.now().toString(),
    };

    this.props.addTodo(todo);
    this.setState({ inputText: '' });
  };

  render() {
    return (
      <>
        <header>
          <h3>Todo List</h3>
        </header>
        <section id="todo">
          <div className="container">
            <div className="todo-bar">
              <input
                id="todo-bar-input"
                value={this.state.inputText}
                onChange={(e) => this.setState({ inputText: e.target.value })}
                type="text"
              />
              <button
                id="todo-bar-btn"
                onClick={this.onAddTodoClick}
                className="btn"
              >
                Add Todo
              </button>
            </div>

            <div className="todos">
              {this.props.todos.map(({ id, text }) => {
                return (
                  <Card
                    key={id}
                    text={text}
                    id={id}
                    onDeleteClick={this.onDeleteTodoClick}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = ({ todos }) => {
  return { todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo, addTodo })(
  App
);
