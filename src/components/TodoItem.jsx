import { PureComponent, Component } from 'react';
import { deleteTodo, markCompleted } from '../redux/actions/todoActions';
import { connect } from 'react-redux';
class TodoItem extends PureComponent {
    constructor(props) {
        super(props);
    }
    state = {};
    render() {
        return (
            <>
                <>
                    <h2
                        style={{
                            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
                        }}
                    >
                        {this.props.todo.title}
                    </h2>
                    <button
                        style={{ background: 'blue', color: 'white' }}
                        onClick={() => this.props.markCompleted(this.props.todo._id)}
                    >
                        Toggle
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                        style={{ background: 'red', color: 'white' }}
                        onClick={() => this.props.deleteTodo(this.props.todo._id)}
                    >
                        Delete
                    </button>
                </>
            </>
        );
    }
}

export default connect(null, { deleteTodo, markCompleted })(TodoItem);
