import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as yup from 'yup';
import '../Styles/Login.css'
import { NavLink } from 'react-router-dom';
import banner1 from '../Assests/Images/banner1.jpg'
const Signup = () => {
    const initialState={
        name:'',
        email:'',
        password:''
    }
    const FormValidationSchema = yup.object().shape({
        name: yup.string().required('Please enter your name'),
        email: yup.string().required('Please enter your email').email('Please enter valid email'),
        password: yup.string().required('Please enter password'),
      });
      const onHandleSubmit=(values,onSubmitProps)=>{
        console.log(values)
        onSubmitProps.resetForm();
     }
  return (
    <div style={{paddingBottom:'100px',alignItems:'center'}}>
     <div>
     <img src={banner1} alt='login' style={{width:'100%',height:'200px',objectFit:'cover',paddingBottom:'30px'}}/>
     </div>
     <div className='formik container align-items-center '>
        <Formik className='formik align-items-center' initialValues={initialState} validationSchema={FormValidationSchema} onSubmit={onHandleSubmit} >
        <Form className='form align-items-center'>
        <Field className='field' type='name' name='name'/>
        <h1 className='login_text'>
        <ErrorMessage name='name'  />
       </h1>
        <Field className='field' type='email' name='email'/>
        <h1 className='login_text'>
        <ErrorMessage name='email'  />
       </h1>
       <Field className='field' type='password' name='password'/>
        <h1 className='login_text'>
        <ErrorMessage name='password'  />
       </h1>
       <button type='submit' className='button'>Signup</button>
        </Form>
        </Formik>
        <div className='text-center text'>
            <span>
                Already have an account? <NavLink to='/login' style={{color:'#E01A1A'}}>Login</NavLink>
            </span>
        </div>
     </div>
    </div>
  )
}

export default Signup
