import React from 'react';

// tao class component bat dau bang chu in hoa
class MyComponent extends React.Component {
    state = {
        name: 'đức luận',
        age: 22,
    };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleClickButton = () => {
        alert('click success!');
    };

    render() {
        return (
            <>
                <div>
                    <input type="text" value={this.state.name} onChange={(event) => this.handleOnChangeName(event)} />{' '}
                    <br />
                    hello my name {this.state.name}
                </div>
                <div>i am {this.state.age} year old</div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me!</button>
                </div>
            </>
        );
    }
}
// xuat ra
export default MyComponent;
