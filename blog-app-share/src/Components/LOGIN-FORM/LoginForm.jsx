import React from 'react'

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
    <div>
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

          <div>
            <button type="submit"  disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
    </div>
  )
}

export default LoginForm