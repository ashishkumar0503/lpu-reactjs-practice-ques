import React, { Component } from 'react';

// Create a react code to demonstrate componentDidMount() and componentDidUpdate()

class MyComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            hasError: false,
        };
    }

    componentDidMount() {
        console.log("Component mounted");
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("Component Updated");
        }
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    componentDidCatch(error, info) {
        console.log("Error caught", error, info);
        this.setState({
            hasError: true
        });
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>
        }
        return (
            <div>
                <h1>My Component</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleIncrement} >Increment</button>
            </div>
        );
    }
}

export default MyComponent;