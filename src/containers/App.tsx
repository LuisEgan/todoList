import * as React from 'react';
import * as actions from '../actions';
import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../actions/storeState';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

interface IProps {
  todos: string[];
  addTodo?: () => void;
  delTodo?: () => void;
}

class App extends React.Component<any, any> {

  constructor(props: IProps) {
    super(props);
  
    this.state = {
      todoInput: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.delTodo = this.delTodo.bind(this);
  }

  handleChange(e: any) {
    var { value } = e.target;
    this.setState({todoInput: value});
  }
  
  addTodo() {
    const { add } = this.props;
    add(this.state.todoInput);
    this.setState({todoInput: ' '});
  }

  delTodo(todo: string) {
    const { del } = this.props;
    del(todo);
  }

  renderTodos() {
    const { todos } = this.props;
    
    return (todos.map( (todo: string) => {
      return(
        <tr key={todo + '_tr'}>
          <td key={todo}>{todo}</td>
          <td key={todo + '_btn'}><button className="btn btn-danger" onClick={() => this.delTodo(todo)}>Delete</button></td>
        </tr>
      );
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="container add">
          <h3>ADD NEW TO DO</h3>
          <input type="text" onChange={this.handleChange} value={this.state.todoInput}/>
          <button className="btn btn-success" onClick={this.addTodo}>+</button>
        </div>
        <table className="table">
          <tbody>
            <tr>
              <td>To do</td>
              <td>Action</td>
            </tr>
            {this.renderTodos()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({todos}: StoreState) => ({todos});

const mapDispatchToProps = (dispatch: Dispatch<actions.Action>) => ({
  add: (todo: string) => dispatch(actions.addTodo(todo)),
  del: (todo: string) => dispatch(actions.delTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
