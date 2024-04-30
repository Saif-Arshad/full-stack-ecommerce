import * as yup from 'yup'


export const MessageSend = yup.object().shape({
    email:yup.string().email("Please enter a valid email").required("required"),
    name:yup.string().required("required"),
    message:yup.string().required("required"),
})