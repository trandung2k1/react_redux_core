import { PureComponent, Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends PureComponent {
    constructor(props) {
        super(props);
    }
    state = {};
    render() {
        return (
            <>
                {this.props.todos.map((todo) => {
                    return <TodoItem key={todo._id} todo={todo} />;
                })}
            </>
        );
    }
}

export default Todos;
