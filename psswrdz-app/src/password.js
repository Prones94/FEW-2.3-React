import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPassword } from './actions'
import './password.css'
import zxcvbn from 'zxcvbn'

class Password extends Component {
    constructor(props){
        super(props);
        this.state = { 
                password: 'r@nd0m_p@ssw0rd', 
                name: "My password"
            };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        this.setState({
            name: evt.target.value
        })
        this.generatePassword({
            password: evt.target.value
        })
    }

    newPassword(){
        let password = ""
        const all_char = []
        for (let i = 33; i < 127; i++){
        all_char.push(String.fromCharCode(i))
      }
        for(let i = 0; i < 9; i++){
          let char = Math.floor(Math.random() * all_char.length)
          password += all_char[char]
        }
        this.generatePassword(password)
        // return `${password}`
    }

    generatePassword(evt){
        // This will generate a random password;
        this.setState({password: evt })
    }

    render(){
        return(
            <div>
                <div>
                    <input
                        type="text"
                        placeholder = "Password Name"
                        onChange = {this.handleChange}
                        value = {this.state.name}    
                    />
                    <input
                        type="text"
                        placeholder={this.state.password}
                        onChange = {this.handleChange}
                        value = {this.state.password}
                    />
                    <button onClick= {(evt) => {
                        this.newPassword()
                    }}>Generate</button>
                </div>
                <div>
                    <button onClick={(e) => {
                        this.props.addPassword(this.state.name, this.state.password)
                    }}>Save</button>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = () => {
    return {
      addPassword
    }
  }

export default connect(mapStateToProps, mapDispatchToProps())(Password)