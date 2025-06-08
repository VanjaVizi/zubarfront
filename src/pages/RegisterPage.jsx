  import { ErrorMessage, Field, Formik,Form } from 'formik';
import React, { useState } from 'react'
 import '../components/CSS/RegisterPage.css';  
import * as Yup from 'yup';


const RegisterSchema = Yup.object().shape({
  ime: Yup.string()
    .required('Ime je obavezno'),
  prezime: Yup.string()
    .required('Prezime je obavezno'),
  email: Yup.string()
    .email('Email nije ispravan')
    .required('Email je obavezan'),
  lozinka: Yup.string()
    .min(6, 'Lozinka mora imati bar 6 karaktera')
    .required('Lozinka je obavezna'),
  potvrdaLozinke: Yup.string()
    .oneOf([Yup.ref('lozinka')], 'Lozinke se ne poklapaju')
    .required('Potvrda lozinke je obavezna'),
  pol: Yup.string()
    .required('Pol je obavezan'),  // za radio, vrednost će biti string "Muški" ili "Ženski"
  datumRodjenja: Yup.string()
    .required('Datum rođenja je obavezan'),
  brojTelefona: Yup.string()
    .required('Broj telefona je obavezan')
});



function RegisterPage() {
        const initialRegisterValues = {
            ime: '', prezime: '', email: '', lozinka: '', potvrdaLozinke: '',
            pol: '', datumRodjenja: '', brojTelefona: ''
        }; 

    const handleRegisterSubmit = (values) => {
        console.log('Podaci za registraciju:', values);
        // Dalja obrada registracije (npr. slanje podataka serveru) ide ovde
    };

    return (
     <div className="registerform-container">
      <Formik
        initialValues={initialRegisterValues}
        validationSchema={RegisterSchema}
        onSubmit={handleRegisterSubmit}
      >
        <Form className="registerform-form">
          <h2 className="registerform-title">Registruj se</h2>

          <div className="registerform-field">
            <label htmlFor="ime">Ime</label>
            <Field id="ime" name="ime" type="text" />
            <ErrorMessage name="ime" component="div" className="registerform-error" />
          </div>

          <div className="registerform-field">
            <label htmlFor="prezime">Prezime</label>
            <Field id="prezime" name="prezime" type="text" />
            <ErrorMessage name="prezime" component="div" className="registerform-error" />
          </div>

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

          <div className="registerform-field">
            <label htmlFor="potvrdaLozinke">Potvrda lozinke</label>
            <Field id="potvrdaLozinke" name="potvrdaLozinke" type="password" />
            <ErrorMessage name="potvrdaLozinke" component="div" className="registerform-error" />
          </div>

          <div className="registerform-field">
            <label>Pol</label>
            <div className="registerform-radio-group">
              <label><Field type="radio" name="pol" value="Muški" /> Muški</label>
              <label><Field type="radio" name="pol" value="Ženski" /> Ženski</label>
            </div>
            <ErrorMessage name="pol" component="div" className="registerform-error" />
          </div>

          <div className="registerform-field">
            <label htmlFor="datumRodjenja">Datum rođenja</label>
            <Field id="datumRodjenja" name="datumRodjenja" type="date" />
            <ErrorMessage name="datumRodjenja" component="div" className="registerform-error" />
          </div>

          <div className="registerform-field">
            <label htmlFor="brojTelefona">Broj telefona</label>
            <Field id="brojTelefona" name="brojTelefona" type="tel" />
            <ErrorMessage name="brojTelefona" component="div" className="registerform-error" />
          </div>

          <button type="submit" className="registerform-button">Registruj se</button>
        </Form>
      </Formik>
    </div>
    );





















    
//   // State za polja registracije
//   const [ime, setIme] = useState('');
//   const [prezime, setPrezime] = useState('');
//   const [email, setEmail] = useState('');
//   const [lozinka, setLozinka] = useState('');
//   const [potvrdaLozinke, setPotvrdaLozinke] = useState('');
//   const [pol, setPol] = useState('');              // '' dok ništa nije izabrano
//   const [datumRodjenja, setDatumRodjenja] = useState('');
//   const [brojTelefona, setBrojTelefona] = useState('');

//   // State za poruke o greškama za svako polje
//   const [errorIme, setErrorIme] = useState('');
//   const [errorPrezime, setErrorPrezime] = useState('');
//   const [errorEmail, setErrorEmail] = useState('');
//   const [errorLozinka, setErrorLozinka] = useState('');
//   const [errorPotvrda, setErrorPotvrda] = useState('');
//   const [errorPol, setErrorPol] = useState('');
//   const [errorDatum, setErrorDatum] = useState('');
//   const [errorTelefon, setErrorTelefon] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let hasError = false;

//     // Validacija imena
//     if (!ime.trim()) {
//       setErrorIme('Ime je obavezno.');
//       hasError = true;
//     } else {
//       setErrorIme('');
//     }

//     // Validacija prezimena
//     if (!prezime.trim()) {
//       setErrorPrezime('Prezime je obavezno.');
//       hasError = true;
//     } else {
//       setErrorPrezime('');
//     }

//     // Validacija email-a
//     if (!email) {
//       setErrorEmail('Email je obavezan.');
//       hasError = true;
//     } else if (!email.includes('@')) {
//       setErrorEmail('Email nije ispravan.');
//       hasError = true;
//     } else {
//       setErrorEmail('');
//     }

//     // Validacija lozinke
//     if (!lozinka) {
//       setErrorLozinka('Lozinka je obavezna.');
//       hasError = true;
//     } else if (lozinka.length < 6) {
//       setErrorLozinka('Lozinka mora imati bar 6 karaktera.');
//       hasError = true;
//     } else {
//       setErrorLozinka('');
//     }

//     // Validacija potvrde lozinke
//     if (!potvrdaLozinke) {
//       setErrorPotvrda('Potvrda lozinke je obavezna.');
//       hasError = true;
//     } else if (potvrdaLozinke !== lozinka) {
//       setErrorPotvrda('Lozinke se ne poklapaju.');
//       hasError = true;
//     } else {
//       setErrorPotvrda('');
//     }

//     // Validacija pola
//     if (!pol) {
//       setErrorPol('Morate odabrati pol.');
//       hasError = true;
//     } else {
//       setErrorPol('');
//     }

//     // Validacija datuma rođenja
//     if (!datumRodjenja) {
//       setErrorDatum('Datum rođenja je obavezan.');
//       hasError = true;
//     } else {
//       setErrorDatum('');
//     }

//     // Validacija broja telefona
//     if (!brojTelefona) {
//       setErrorTelefon('Broj telefona je obavezan.');
//       hasError = true;
//     } else if (!/^\d+$/.test(brojTelefona)) {
//       setErrorTelefon('Broj telefona mora sadržati samo cifre.');
//       hasError = true;
//     } else {
//       setErrorTelefon('');
//     }

//     if (!hasError) {
//       // Sve je prošlo validaciju - ovde bismo obradili registraciju
//       const podaci = { ime, prezime, email, lozinka, pol, datumRodjenja, brojTelefona };
//       console.log('Registracija uspešna, podaci:', podaci);
//     }
//   };

//   return (
//     <form className="appointment-form" onSubmit={handleSubmit}>
//       <h2 className="naslov">Registracija</h2>
      
//       <div className="form-group">
//         <label htmlFor="ime">Ime:</label>
//         <div className="input-par">
//           <input 
//             id="ime" name="ime" type="text" 
//             value={ime} onChange={(e) => setIme(e.target.value)} 
//             className="form-control" 
//           />
//         </div>
//         {errorIme && <div className="error">{errorIme}</div>}
//       </div>

//       <div className="form-group">
//         <label htmlFor="prezime">Prezime:</label>
//         <div className="input-par">
//           <input 
//             id="prezime" name="prezime" type="text" 
//             value={prezime} onChange={(e) => setPrezime(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         {errorPrezime && <div className="error">{errorPrezime}</div>}
//       </div>

//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <div className="input-par">
//           <input 
//             id="email" name="email" type="email" 
//             value={email} onChange={(e) => setEmail(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         {errorEmail && <div className="error">{errorEmail}</div>}
//       </div>

//       <div className="form-group">
//         <label htmlFor="lozinka">Lozinka:</label>
//         <div className="input-par">
//           <input 
//             id="lozinka" name="lozinka" type="password" 
//             value={lozinka} onChange={(e) => setLozinka(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         {errorLozinka && <div className="error">{errorLozinka}</div>}
//       </div>

//       <div className="form-group">
//         <label htmlFor="potvrdaLozinke">Potvrda lozinke:</label>
//         <div className="input-par">
//           <input 
//             id="potvrdaLozinke" name="potvrdaLozinke" type="password" 
//             value={potvrdaLozinke} onChange={(e) => setPotvrdaLozinke(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         {errorPotvrda && <div className="error">{errorPotvrda}</div>}
//       </div>

//       <div className="form-group">
//         <label>Pol:</label>
//         <div className="input-par">
//           <label>
//             <input 
//               type="radio" name="pol" value="Muški" 
//               checked={pol === 'Muški'} 
//               onChange={(e) => setPol(e.target.value)} 
//             /> Muški
//           </label>
//           <label style={{ marginLeft: '1em' }}>
//             <input 
//               type="radio" name="pol" value="Ženski" 
//               checked={pol === 'Ženski'} 
//               onChange={(e) => setPol(e.target.value)} 
//             /> Ženski
//           </label>
//         </div>
//         {errorPol && <div className="error">{errorPol}</div>}
//       </div>

//       <div className="form-group">
//         <label htmlFor="datumRodjenja">Datum rođenja:</label>
//         <div className="input-par">
//           <input 
//             id="datumRodjenja" name="datumRodjenja" type="date" 
//             value={datumRodjenja} onChange={(e) => setDatumRodjenja(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         {errorDatum && <div className="error">{errorDatum}</div>}
//       </div>

//       <div className="form-group">
//         <label htmlFor="brojTelefona">Broj telefona:</label>
//         <div className="input-par">
//           <input 
//             id="brojTelefona" name="brojTelefona" type="tel" 
//             value={brojTelefona} onChange={(e) => setBrojTelefona(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         {errorTelefon && <div className="error">{errorTelefon}</div>}
//       </div>

//       <button type="submit" className="dugme">Registruj se</button>
//     </form>
//   );
  }
 export default RegisterPage;