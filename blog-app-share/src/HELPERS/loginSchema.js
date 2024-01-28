import {object, string} from "yup"

export const loginSchema = object({
    email: string().email("Enter a valid email address 📩").required("Email field can not be left empty")
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),
    password:string().required("No permission without password ❌")
    .min(6,"at least 6 characters needed ➕")
    .max(12,"ooh, nooo please  less than 12 characters ➖")
    .matches(/\d+/, "At least one number must be entered 🔢")
    .matches(/[a-z]/, "At least one lowercase letter is required 🔡")
    .matches(/[A-Z]/, "At least one UPPERCASE letter is required 🔠")
    .matches(/[!/[@$!%*?&]+/,"At least one special character (@$!%*?&) must be entered ㊙")
})