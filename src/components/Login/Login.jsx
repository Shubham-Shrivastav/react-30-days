import { Button, Stack } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'

const Login = () => {
    return (
        <Stack>
            <Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => {
                console.log(values);
            }}>
                <Form>
                    <Field name='email' />
                    <Field name='password' />
                    <Button type='submit'>Login</Button>
                </Form>
            </Formik>
        </Stack>
    )
}

export default Login