import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import './FormComponent.css';
export default function Login() {
//create schema for Yup validation
    const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password:Yup.string().min(8,"Password must be at least 8 characters").required('Password is required')
    });

  return (
    <div>
        <Formik
            initialValues={{
            name: '',
            email: '',
            password: '',
            }}
            validationSchema={schema}
            onSubmit={(values, {setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field name="name" type="text" placeholder="Name" />
                        <ErrorMessage name="name" component="div" className='error'/>
                    </div>
                    <div>
                        <Field name="email" type="email" placeholder="Email" />
                        <ErrorMessage name="email" component="span" className='error'/>
                    </div>
                    <div>
                        <Field name="password" type="password" placeholder="Password" />
                        <ErrorMessage name="password" component="div" className='error'/>
                    </div>
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </Form>
            )}
            </Formik>         
    </div>
  )
}


/*
 <Form>
                <div>
                    <Field name="name" type="text" placeholder="Name" />
                    <ErrorMessage name="name" component="div" />
                </div>
                <div>
                    <Field name="email" type="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" />
                </div>
                <div>
                    <Field name="password" type="password" placeholder="Password" />
                    <ErrorMessage name="password" component="div" />
                </div>
                <button type="submit">Submit</button>
                
            </Form>

*/