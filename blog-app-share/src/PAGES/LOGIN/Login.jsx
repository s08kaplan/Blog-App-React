import { CiLock } from "react-icons/ci";
import { Formik } from "formik";
import LoginForm from "../../Components/LOGIN-FORM/LoginForm";
import { loginSchema } from "../../HELPERS/loginSchema";
import "./Login.scss";
import useAuthCalls from "../../SERVICES/useAuthCalls";


const Login = () => {
  const { login } = useAuthCalls()

  return (
    <section className="login-container">
      <div className="container">
        <div className="lock-avatar">
          <CiLock />
        </div>

        <h2>Sign in</h2>
        <Formik
        initialValues = {{email:"",password:""}}
        validationSchema={loginSchema}
        onSubmit={(values,actions)=> {
          login(values)
          actions.resetForm()
          actions.setSubmitting(false)
        }}
        component={(props)=> <LoginForm {...props}/>}
        >
        </Formik>
       
      </div>
    </section>
  );
};

export default Login;
