import { Formik } from "formik"
import RegisterForm from "../../Components/REGISTER-FORM/RegisterForm"
import { registerSchema } from "../../HELPERS/registerSchema"
import useAuthCalls from "../../SERVICES/useAuthCalls"


const Register = () => {
const { register } = useAuthCalls()
  return (
    <div>
      <Formik
      initialValues={{
        username:"",
        firstName:"",
        lastName:"",
        email:"",
        image:"",
        bio:"",
        password:""
      }}
      validationSchema={registerSchema}
      onSubmit={(values, actions)=>{
        register(values)
        actions.resetForm()
        actions.setSubmitting(false)
      }}
      component = {(props)=> <RegisterForm {...props} />}
      >
      </Formik>
    </div>
  )
}

export default Register