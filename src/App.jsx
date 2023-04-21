import { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, getData } from './redux/actions/todoActions';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // this.props.getTodos();
        this.props.getData();
    }
    state = {};
    render() {
        console.log(this.props);
        return (
            <>
                <h1>Hi</h1>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos,
    };
};
export default connect(mapStateToProps, { getTodos, getData })(App);
