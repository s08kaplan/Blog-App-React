import { Formik } from "formik"
import RegisterForm from "../../Components/REGISTER-FORM/RegisterForm"
import { registerSchema } from "../../HELPERS/registerSchema"


const Register = () => {

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
        // register(values)
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