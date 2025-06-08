  import { ErrorMessage, Field, Formik,Form } from 'formik';
import React, { useState } from 'react'
 import '../components/CSS/RegisterPage.css';  
import * as Yup from 'yup';


const RegisterSchema = Yup.object().shape({ 
  email: Yup.string()
    .email('Email nije ispravan')
    .required('Email je obavezan'),
  lozinka: Yup.string() 
    .required('Lozinka je obavezna'), 
});



function LoginPage() {
    
        const initialRegisterValues = {
           email: '', lozinka: ''       }; 

    const handleLoginSubmit = (values) => {
        console.log('Podaci za login:', values);
        // Dalja obrada registracije (npr. slanje podataka serveru) ide ovde
    };

    return (
     <div className="registerform-container">
      <Formik
        initialValues={initialRegisterValues}
        validationSchema={RegisterSchema}
        onSubmit={handleLoginSubmit}
      >
        <Form className="registerform-form">
          <h2 className="registerform-title">Uloguj se</h2>
          
                        <div className="registerform-field">
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" type="email" />
                            <ErrorMessage name="email" component="div" className="registerform-error" />
                        </div>

                        <div className="registerform-field">
                            <label htmlFor="lozinka">Lozinka</label>
                            <Field id="lozinka" name="lozinka" type="password" />
                            <ErrorMessage name="lozinka" component="div" className="registerform-error" />
                        </div>
  

                     <button type="submit" className="registerform-button">Uloguj se</button>

                 
        </Form>
      </Formik>
    </div>
    );
 

 
  }
 export default LoginPage;