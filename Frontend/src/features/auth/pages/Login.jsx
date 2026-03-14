import React from 'react'
import "../auth.form.scss"
import { Link } from 'react-router'

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>

            <from onSubmit={handleSubmit} >
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email' placeholder='Enter email address' />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name='password' placeholder='Enter your password' />

                    <button className='button primary-button' >Login</button>
                </div>

                
            </from>

            <p>Don't have an account ? <Link to={"/register"} >Register</Link></p>
        </div>
    </main>
  )
}

export default Login
