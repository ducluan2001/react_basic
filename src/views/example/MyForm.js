import React from 'react';
import ChildComponent from './ChildComponent';
import AppComponent from './AddComponent';

class MyForm extends React.Component {
    state = {
        arrJobs: [
            { id: 'job1', title: 'dev', salary: '500' },
            { id: 'job2', title: 'tester', salary: '600' },
            { id: 'job3', title: 'leader', salary: '1500' },
        ],
    };
    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        });
    };
    deleteAJob = (job) => {
        this.setState({
            arrJobs: [
                ...this.state.arrJobs.filter((item) => item.id !== job.id),
            ],
        });
    };
    render() {
        return (
            <>
                <AppComponent addNewJob={this.addNewJob} />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        );
    }
}

export default MyForm;
