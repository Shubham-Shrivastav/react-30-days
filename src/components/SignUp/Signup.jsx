import { Button, Container, Stack } from '@mui/material'
import { Form, Formik, Field } from 'formik'
import { TextField } from 'formik-mui'

const Signup = () => {
    return (
        <Container sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
            <Stack elevation={4} sx={{ width: '300px', boxShadow: "12", height: '420px' }}>
                <Formik
                    initialValues={{ email: '', password: '', name: '' }}
                    onSubmit={(values) => {
                        console.log('Form Values:', values)
                    }} >
                    <Form >
                        <p>Sign-UP</p>
                        <Field
                            component={TextField}
                            autoComplete="off"
                            id="outlined-basic-email"
                            label="Name"
                            variant="outlined"
                            name="name"
                            placeholder="Enter Name.."
                            sx={{ m: 2 }} />
                        <Field
                            component={TextField}
                            autoComplete="off"
                            id="outlined-basic-email"
                            label="Email"
                            variant="outlined"
                            name="email"
                            type='email'
                            placeholder="Enter Email.."
                            sx={{ m: 2 }} />
                        <Field
                            component={TextField}
                            id="outlined-basic-password"
                            label="Password"
                            variant="outlined"
                            name="password"
                            type="password"
                            placeholder="Enter Password.."
                            sx={{ m: 2 }} />
                        <Button type="submit" variant="outlined">Sign-Up</Button>
                    </Form>
                </Formik>
            </Stack>
        </Container>
    )
}

export default Signup
