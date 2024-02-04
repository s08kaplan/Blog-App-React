import React from 'react'
import { Link } from 'react-router-dom'
import "./LoginForm.scss"

const LoginForm = ({
    values,
    errors,
    touched,
    handleChange, 
    handleBlur,
    handleSubmit,
    isSubmitting
}) => {
  return (
    <section className='login-form'>
       <form onSubmit={handleSubmit}>
          <div className="login-email">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
             value={values.email}
             />
           {errors.email && touched.email && errors.email}
          </div>

          <div className="login-password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
             value={values.password}
            />
            {errors.password && touched.password && errors.password}
          </div>

          <div className='btn'>
            <div className="submit">
              <button type="submit"  disabled={isSubmitting}>
              Submit
            </button>
            </div>
            <div className="register">
             <Link to="/register"><button>Register</button></Link> 
              <span>Don't you have an account? 😨</span>
            </div>
          </div>
        </form>
    </section>
  )
}

export default LoginForm