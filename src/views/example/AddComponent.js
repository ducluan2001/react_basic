import React from 'react';

class AppComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    };
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value,
        });
    };
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Check data state: ', this.state);
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params');
            return this.setState({
                title: '',
                salary: '',
            });
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary,
        });
        this.setState({
            title: '',
            salary: '',
        });
    };
    render() {
        return (
            <form action="">
                <label htmlFor="fname">Title Jobs: </label>
                <br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                />{' '}
                <br />
                <label htmlFor="lname">Salary: </label>
                <br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                />{' '}
                <br />
                <input
                    type="submit"
                    value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        );
    }
}

export default AppComponent;
