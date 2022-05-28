import React from 'react'
import './style.scss'
import { Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from 'yup'

const Checkout = () => {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(10, "Must be 10 characters or less").required('Required'),
      lastName: Yup.string().max(15, "Must be 15 characters or less").required('Required'),
      email: Yup.string().email("Invalid email address").required('Required'),

    }),
    onSubmit: (values) => {
      console.log('success')
      
    }
  })

  console.log(formik.errors)
  return (
    <Form onSubmit={formik.handleSubmit}
      className="container formContainer d-flex flex-column justify-content-center align-items-center">
      <div className='inputConatiner'>
        <label>First name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder='First name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ?
          <span className='errorMsg'>{formik.errors.firstName}</span>
          : ''
        }
      </div>
      <div className='inputConatiner'>
        <label>Last name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder='last Name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ?
          <span className='errorMsg'>{formik.errors.lastName}</span>
          : ''
        }
      </div>
      <div className='inputConatiner'>
        <label>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder='Email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ?
          <span className='errorMsg'>{formik.errors.email}</span>
          : ''
        }
      </div>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default Checkout