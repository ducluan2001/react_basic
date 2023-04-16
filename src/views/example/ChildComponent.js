import React from 'react';

// tao class component bat dau bang chu in hoa
// class ChildComponent extends React.Component {
//     render() {
//         // let name = this.props.name;
//         // let age = this.props.age;

//         // cú pháp viết ngắn
//         let { name, age, address, arrJobs } = this.props;
//         return (
//             <>
//                 <div className="job - lists">
//                     Child Component: {name} - {age} - {address}
//                     {arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         );
//                     })}
//                 </div>
//             </>
//         );
//     }
// }

// fucntion component (arow function)
const ChildComponent = (props) => {
    let { name, age, address, arrJobs } = props;
    return (
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
        </>
    );
};

// xuat ra
export default ChildComponent;
