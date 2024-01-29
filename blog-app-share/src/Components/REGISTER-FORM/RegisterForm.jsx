import { Form, Field, ErrorMessage } from "formik";
import { registerFormField } from "../../HELPERS/registerFormField";
import "./RegisterForm.scss";

const RegisterForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <section className="register-form-main">
      <Form onSubmit={handleSubmit}>
        {registerFormField.map((info) => (

          <div className="form" key={info.name}>
             <label htmlFor={info.id}>{info.label}</label>
            <Field
              label={info.label}
              type= {info.type}
              id={info.id}
              name={info.name}
              value={values[info.name]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
           { errors[info.name] && touched[info.name] &&
            <ErrorMessage name={info.name} component="div" className="error" />}
          </div>

        ))}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading" : "Submit"}
        </button>
      </Form>
    </section>
  );
};

export default RegisterForm;
