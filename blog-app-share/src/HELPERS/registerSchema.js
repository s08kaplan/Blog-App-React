import { object, string } from "yup"

export const registerSchema = object({
username:string().required("You can not leave this part empty"),
firstName: string().required("You forgot to fill this part"),
lastName: string().required("Last name is also necessary"),
email: string().email("Enter a valid email address please").required("Email is necessary to keep in touch 😉")
.matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),
password: string().required("No permission without password ❌")
.min(8,"at least 8 characters needed ➕")
.max(12,"ooh, nooo please  less than 12 characters ➖")
.matches(/\d+/, "At least one number must be entered 🔢")
.matches(/[a-z]/, "At least one lowercase letter is required 🔡")
.matches(/[A-Z]/, "At least one UPPERCASE letter is required 🔠")
.matches(/[!/[@$!%*?&]+/,"At least one special character (@$!%*?&) must be entered ㊙")
})