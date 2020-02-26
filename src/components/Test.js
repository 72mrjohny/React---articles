import React, { Component } from 'react';

class Test extends Component {
    state = {
        sum: 0
    }
    add1 = () => {
        this.setState(prevState => ({
            sum: prevState.sum + 1
        }));
        console.log(this.state.sum);
    };
    render() {
        return (
            <button onClick={this.add1}>
                value :{this.state.sum}
            </button>
        );
    }
}

export default Test;