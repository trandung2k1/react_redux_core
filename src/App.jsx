import { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, getData } from './redux/actions/todoActions';
import './App.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getTodos();
    }
    state = {};
    render() {
        return (
            <>
                <h1>Todo list</h1>
                <TodoForm />
                {this.props.todos.length === 0 ? (
                    <h2>Loading ...</h2>
                ) : (
                    <Todos todos={this.props.todos} />
                )}
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todosState.todos,
    };
};
export default connect(mapStateToProps, { getTodos, getData })(App);
