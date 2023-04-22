import { PureComponent } from 'react';
import { addTodo } from '../redux/actions/todoActions';
import { connect } from 'react-redux';
class TodoForm extends PureComponent {
    constructor(props) {
        super(props);
    }
    state = {
        title: '',
        description: '',
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title && this.state.description) {
            this.props.addTodo({ ...this.state, completed: false });
            this.setState({ title: '', description: '' });
        } else {
            alert('Title and description is required');
        }
    };
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title: </label>
                        <br />
                        <input
                            value={this.state.title}
                            style={{ padding: '10px', width: '300px' }}
                            type="text"
                            placeholder="Enter title"
                            onChange={(e) => this.setState({ title: e.target.value })}
                        />
                    </div>
                    <div>
                        <label>Description: </label>
                        <br />
                        <input
                            value={this.state.description}
                            style={{ padding: '10px', width: '300px' }}
                            type="text"
                            placeholder="Enter description"
                            onChange={(e) => this.setState({ description: e.target.value })}
                        />
                    </div>
                    <br />
                    <button style={{ background: 'green', color: 'white' }}>Add</button>
                </form>
            </>
        );
    }
}

export default connect(null, { addTodo })(TodoForm);
