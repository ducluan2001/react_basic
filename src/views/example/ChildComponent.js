import React from 'react';

// tao class component bat dau bang chu in hoa
class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    };

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs,
        });
    };
    render() {
        // let name = this.props.name;
        // let age = this.props.age;

        // cú pháp viết ngắn
        let { name, age, address, arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ? (
                    <div>
                        <button onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="job - lists">
                            Child Component: {name} - {age} - {address}
                            {arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary}
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>
                                Hide
                            </button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

// fucntion component (arow function)
// const ChildComponent = (props) => {
//     let { name, age, address, arrJobs } = props;
//     return (
//         <>
//             <div className="job - lists">
//                 Child Component: {name} - {age} - {address}
//                 {arrJobs.map((item, index) => {
//                     if (item.salary >= 600) {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         );
//                     }
//                 })}
//             </div>
//         </>
//     );
// };

// xuat ra
export default ChildComponent;
