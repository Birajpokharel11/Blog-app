import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function UserHeader(props) {
    const { user } = props



    if (!user) {
        return <div>...Loading</div>;
    }
    return <div className="header">{user.name}</div>;

}

const mapStateToProps = (state, props) => ({
    user: state.users.find(user => user.id === props.uid)
})

export default connect(
    mapStateToProps,
)(UserHeader);

