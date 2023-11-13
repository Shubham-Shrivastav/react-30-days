import { Button, Container, Stack } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import { TextField } from 'formik-mui';

const Login = () => {
    return (
        <Container sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
            <Stack sx={{ width: '270px' }}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log('Form Values:', values);
                    }}
                >
                    <Form>
                        <Field
                            component={TextField}
                            id="outlined-basic-email"
                            label="Email"
                            variant="outlined"
                            name="email"
                            type='email'
                        />
                        <Field
                            component={TextField}
                            id="outlined-basic-password"
                            label="Password"
                            variant="outlined"
                            name="password"
                            type="password"
                        />
                        <Button type="submit">Login</Button>
                    </Form>
                </Formik>
            </Stack>
        </Container>
    );
};

export default Login;
