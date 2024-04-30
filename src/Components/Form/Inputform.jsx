"use clinet"

/* eslint-disable react-hooks/rules-of-hooks */
import { useFormik } from 'formik'
import React from 'react'
import { MessageSend } from '@/Validation/Yup-Validation'
import { Mainbutton } from '@/Styledcomponent/Button/Button.styled'
import { useSelector,useDispatch } from 'react-redux'
import { showMessage } from '@/Redux/feature/ContactSlice'




function Inputform() {
  const dispacth = useDispatch()
  const SubmitForm = (value)=>{
    if (value) {
          dispacth(showMessage(true))
    }
  }
  const Formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message:''
    },
    validationSchema:MessageSend,
  onSubmit: SubmitForm 
  })
  const stateShowMessage  = useSelector((state)=> state.message.show)
  // console.log(Formik)
  return (
    <div className="form">
        <h1>We would love to hear from you.</h1>
        <p>If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</p>
      
      <form  onSubmit={Formik.handleSubmit}>
      <div className="input">

    <div className="main-name">

        <div className="name">
                <label htmlFor="name">Name</label>
                <input onBlur={Formik.handleBlur}  className={`${Formik.errors.name && Formik.touched.name? "inputError" : ""}`} value={Formik.values.name} onChange={Formik.handleChange} type="text" name='name' placeholder='Write Your Name' />    
                {Formik.errors.name && Formik.touched.name? <p className='text-red-500'>This Field is {Formik.errors.name}</p> : ""} 

        </div>
        <div className="email">
                <label htmlFor="email">Email</label>
                <input onBlur={Formik.handleBlur} className={`${Formik.errors.email && Formik.touched.email? "inputError" : ""}`}  value={Formik.values.email} onChange={Formik.handleChange} type="email" name='email' placeholder='Write Your Email' />    
                {Formik.errors.email && Formik.touched.email? <p className='text-red-500'> 
                {Formik.errors.email=="Please enter a valid email"? "": "This Field is"} 
                {Formik.errors.email}</p> : ""} 

        </div>
    </div>
    <div className="message">
    <label htmlFor="message">Messaage</label>
    <textarea onBlur={Formik.handleBlur} className={`message ${Formik.errors.message && Formik.touched.message? "inputError" : ""}`} onChange={Formik.handleChange} placeholder='Write Your Message Here' name="message" rows={7}  id=""  >
    {Formik.values.message}
    </textarea>
    {Formik.errors.message && Formik.touched.message? <p className='text-red-500'>This Field is {Formik.errors.message}</p> : ""} 

    </div>


      </div>
      <Mainbutton type='submit' $BtnWidth="180px" $btnFont="12px" $Borderradius="9px" $BGColor="#024E82" $paddingTB="8px" $paddingLR="3px">
          Send message
        </Mainbutton>
      </form>
      </div>
  )
}

export default Inputform
