import React, { Component } from 'react'
import { connect } from 'react-redux'

class PasswordList extends Component {
    getList() {
        return this.props.passwords.map((password, index) => {
            return (
                <div key={index}>
                    name:{password.name} password: {password.password}
                </div>
            );
        })
    };

    render() {
        return (
            <div>
                {this.getList()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        passwords: state.passwords
    }
}

export default connect(mapStateToProps)(PasswordList)