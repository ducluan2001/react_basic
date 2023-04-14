import React from 'react';
import ChildComponent from './ChildComponent';

class MyForm extends React.Component {
    state = {
        FistName: '',
        LastName: '',
    };
    handleChangeFistName = (event) => {
        this.setState({
            FistName: event.target.value,
        });
    };
    handleChangeLastName = (event) => {
        this.setState({
            LastName: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`${this.state.FistName} ${this.state.LastName}`);
    };
    render() {
        return (
            <>
                <form action="">
                    <label htmlFor="fname">Fist Name: </label>
                    <br />
                    <input
                        type="text"
                        value={this.state.FistName}
                        onChange={(event) => this.handleChangeFistName(event)}
                    />{' '}
                    <br />
                    <label htmlFor="lname">Last Name: </label>
                    <br />
                    <input
                        type="text"
                        value={this.state.LastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />{' '}
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                    <ChildComponent name={'Child one'} />
                    <ChildComponent name={'Child tow'} />
                    <ChildComponent name={'Child three'} />
                </form>
            </>
        );
    }
}

export default MyForm;
