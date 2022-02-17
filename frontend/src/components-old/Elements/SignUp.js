/* eslint-disable no-console */
import React from 'react';

import { useFormik } from 'formik';

import './Signup.css';
import axios from 'axios';
const AxiosInstance = axios.create(); // Create a new Axios Instance



export default function Signup() {
  // const [firstName, setFirstName] = useState('');
  // this.console.log(firstName);
  const formik = useFormik({
    initialValues: {
      firstName: ''
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      const url = 'http://localhost:3000/crawler'; // URL we're scraping

      AxiosInstance.get(url)
        .then( // Once we have data returned ...
          response => {
            const jsonResponse = response.data; // Get the HTML from the HTTP request
            console.log(jsonResponse);
          }
        )
        .catch(console.error); // Error handling
      console.log(`submitted ${values.firstName}`);
    },
  });

  return(
    <form onSubmit={formik.handleSubmit}>
      <div className='input-container'>
        <input
          id='firstName'
          name='firstName'
          type='text'
          placeholder='First Name'
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      <button type='submit' placeholder='Submit'>Crawl</button>
      <div className='input-container'>
        <input
          id='results'
          name='results'
          type='results'
          placeholder='Urls found'
          onChange={formik.handleChange}
          value={formik.values.firstName}
        ></input>
      </div>
    </form>
  );
}

