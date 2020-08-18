import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signin.scss";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSignin(event) {
    event.preventDefault();
    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
    console.log("sign up");
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="main">
        <form className="form">
          <p className="head">Customer Login</p>
          <span className="span"></span>

          <div className="input-grp">
            <div className="label">
              <label className="label" htmlFor="username">
                Email
              </label>
            </div>
            {/* Email icon */}
            <i class="fas fa-envelope fa-s icon"></i>
            <input
              onChange={this.handleChange}
              value={email}
              name="email"
              type="text"
              placeholder="Email"
              className="input"
              required
            />
          </div>

          <div className="input-grp">
            {/* password icon */}
            <div className="label">
              <label className="label" htmlFor="username">
                Password
              </label>
            </div>
            <i class="fas fa-key fa-s icon"></i>
            <input
              onChange={this.handleChange}
              value={password}
              name="password"
              type="password"
              placeholder="Password"
              className="input"
              required
            />
          </div>

          <button onClick={this.handleSignin} className="btn">
            Log In
          </button>
          <div className="new-customers">
            <p className="para0">New Customers</p>
            <p className="para">
              Creating an account has many benefits: check out faster, keep more
              than one address, track orders and more.
            </p>
            <Link to="/signup">
              <button className="btn">CREATE AN ACCOUNT</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
