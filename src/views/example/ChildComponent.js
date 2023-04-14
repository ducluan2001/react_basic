import React from 'react';

// tao class component bat dau bang chu in hoa
class ChildComponent extends React.Component {
    render() {
        return (
            <>
                <div>Child Component {this.props.name}!</div>
            </>
        );
    }
}
// xuat ra
export default ChildComponent;
