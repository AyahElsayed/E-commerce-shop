import React from 'react'
import './style.scss'
import { Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Link } from "react-router-dom";

const Checkout = () => {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      city: '',
      address: '',
      mobile: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(10, "Must be 10 characters or less").required('Required'),
      lastName: Yup.string().max(15, "Must be 15 characters or less").required('Required'),
      email: Yup.string().email("Invalid email address").required('Required'),
      city: Yup.string().max(15, "Must be 15 characters or less").required('Required'),
      address: Yup.string().max(50, "Must be 50 characters or less").required('Required'),
      mobile: Yup.string().max(10, "Must be 11 number").required('Required'),
    }),
    onSubmit: (values) => {
      alert('Thanks for your shopping')
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}
      className="container formContainer d-flex flex-column justify-content-center align-items-center">
        <h2>Please fill your information</h2>
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
      <div className='inputConatiner'>
        <label>City</label>
        <input
          id="city"
          name="city"
          type="text"
          placeholder='city'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city ?
          <span className='errorMsg'>{formik.errors.city}</span>
          : ''
        }
      </div>
      <div className='inputConatiner'>
        <label>Address</label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder='address'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address ?
          <span className='errorMsg'>{formik.errors.address}</span>
          : ''
        }
      </div>

      <div className='inputConatiner'>
        <label>Mobile number</label>
        <input
          id="mobile"
          name="mobile"
          type="number"
          placeholder='mobile'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mobile}
        />
        {formik.touched.mobile && formik.errors.mobile ?
          <span className='errorMsg'>{formik.errors.mobile}</span>
          : ''
        }
      </div>

      <div>
        <Link to="/">
          <Button className='back'>Back</Button>
        </Link>
          <Button className='submit' type="submit">Submit</Button>
      </div>
    </Form>
  )
}

export default Checkout