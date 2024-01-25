import { CiLock } from "react-icons/ci";

const Login = () => {
  return (
    <section className='login-container'>
        <div className="container">
<div className="lock-avatar"><CiLock /></div>
<h2>Sign in</h2>
<div className="login-email">
    <label htmlFor="email">Email Address</label>
    <input type="email" name="email" id="email" />
</div>
<div className="login-password">
    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" />
</div>
<div>
    <button type="submit"></button>
</div>

 
        </div>

    </section>
  )
}

export default Login