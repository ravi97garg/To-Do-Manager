import React, {Component} from 'react';
import Auth from '../auth';
import './Login.css';

class Login extends Component{
    state = {
        username: '',
        password: '',
        isAuth: this.props.isAuth
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {username, password} = this.state;
        let flag = 0;
        for(let i=0; i<Auth.auth.length; i++){
            if(Auth.auth[i][username] === password) {
                this.setState({
                    isAuth: true
                }, this.props.loginCallback(true));
                this.props.history.push('/todoList'); //check this.props
                flag = 1;
                break;
            }
        }
        if(!flag) {
            alert('Invalid Login');
            this.setState({
                username: '',
                password: ''
            })
        }

    }

    render() {
        return (
            <div className='login-bg'>
                <form method='POST' onSubmit={this.handleSubmit}>
                    <h3 className='form-title'>LOGIN</h3>
                    <span className='form-caption'>Time and Tide waits for none</span>
                    <input type='text'
                           onChange={this.handleChange}
                           value={this.state.username}
                           name='username'
                           placeholder='Username'
                    />
                    <input type='password'
                           onChange={this.handleChange}
                           value={this.state.password}
                           name='password'
                           placeholder='Password'
                    />
                    <input type='submit'
                           value='Login'
                           className='login-btn'
                    />
                </form>
            </div>
        )
    }
}

export default Login;