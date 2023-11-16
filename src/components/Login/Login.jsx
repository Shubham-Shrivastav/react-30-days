import { Button, Container, Stack } from '@mui/material'
import { Form, Formik, Field } from 'formik'
import { TextField } from 'formik-mui'

const Login = () => {
    return (
        <Container sx={{ display: 'flex', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
            <Stack elevation={4} sx={{ width: '300px', boxShadow: "12", height: '320px' }}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log('Form Values:', values);
                    }}
                >
                    <Form
                    ><p>Login</p>
                        <Field
                            component={TextField}
                            autoComplete="off"
                            id="outlined-basic-email"
                            label="Email"
                            variant="outlined"
                            name="email"
                            type='email'
                            sx={{ m: 2 }} />
                        <Field
                            component={TextField}
                            autoComplete="off"
                            id="outlined-basic-password"
                            label="Password"
                            variant="outlined"
                            name="password"
                            type="password"
                            sx={{ m: 2 }} />
                        <Button variant="contained"
                            type="submit">Login</Button>
                    </Form>
                </Formik>
            </Stack>
        </Container>
    );
};

export default Login;
