import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { popular: false };

        this.updateLikes = this.updateLikes.bind(this);
    }
    updateLikes() {
        ReactDOM.render(
            <Counter likes={this.props.likes + 1}></Counter>,
            document.getElementById('renderHere')
        );
    }
    //1. Mounting
    componentWillMount() {
        console.log('component has started mounting..');
    }

    //2. Mounting
    componentDidMount() {
        console.log('component did mounted..');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('component will receive props called..');
        console.log('component will receive nextProps = ', nextProps);
        //logic implimentation
        this.setState({
            popular: nextProps.likes >= 10
        });
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('component should update or not?');
        console.log('should component update  nextProps = ', nextProps);
        console.log('should component update  nextState = ', nextState);
        //decision of updating component (props and state)
        return true;
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('component will update is called..');
        console.log('component will update  nextProps = ', nextProps);
        console.log('component will update  nextState = ', + nextState);
        //decision of updating component (props and state)
        return true;
    }
    render() {
        console.log('component has rendered..');
        return (
            <div className="container">
                <div className="row">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center"> Counter</h3>
                        </div>
                        <div className="panel-body">
                            <h3> {this.state.popular ? 'I am Popular' : null} </h3>
                            <button className="btn btn-info" onClick={this.updateLikes}>
                                Likes = {this.props.likes}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('component did update is called..');
        console.log('component did updated prevProps = ', prevProps);
        console.log('component did updated prevState = ', prevState);

    }

}

export default Counter;
