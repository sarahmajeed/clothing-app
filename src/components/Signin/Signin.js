import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signin.scss';

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className='main'>
        <form className='form'>
          <p className='head'>Log In to you account here!</p>
          <span className='span'></span>

          <div className='input-grp'>
            <div className='label'>
              <label className='label' htmlFor='username'>
                Email
              </label>
            </div>
            {/* Email icon */}
            <i class='fas fa-envelope fa-s icon'></i>
            <input
              onChange={this.handleChange}
              value={email}
              name='email'
              type='text'
              className='input'
              required
            />
          </div>

          <div className='input-grp'>
            {/* password icon */}
            <div className='label'>
              <label className='label' htmlFor='username'>
                Password
              </label>
            </div>
            <i class='fas fa-key fa-s icon'></i>
            <input
              onChange={this.handleChange}
              value={password}
              name='password'
              type='password'
              //placeholder='Password'
              className='input'
              required
            />
          </div>

          <button onClick={this.props.handleSignin} className='btn'>
            Log In
          </button>
          <span className='span'></span>
          <p className='login'>
            Don't have an account? <Link to='/signup'>Sign Up</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Signin;