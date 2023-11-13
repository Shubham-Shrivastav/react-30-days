import { Button, Container, Stack } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import { TextField } from 'formik-mui';

const Signup = () => {
    return (
        <Container sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
            <Stack sx={{ width: '270px' }}>
                <Formik
                    initialValues={{ email: '', password: '', name: '' }}
                    onSubmit={(values) => {
                        console.log('Form Values:', values);
                    }}
                >
                    <Form>
                        <Field
                            component={TextField}
                            id="outlined-basic-email"
                            label="Name"
                            variant="outlined"
                            name="name"
                            placeholder="Enter Name.."
                        />
                        <Field
                            component={TextField}
                            id="outlined-basic-email"
                            label="Email"
                            variant="outlined"
                            name="email"
                            type='email'
                            placeholder="Enter Email.."

                        />
                        <Field
                            component={TextField}
                            id="outlined-basic-password"
                            label="Password"
                            variant="outlined"
                            name="password"
                            type="password"
                            placeholder="Enter Password.."

                        />
                        <Button type="submit">Sign-Up</Button>
                    </Form>
                </Formik>
            </Stack>
        </Container>
    );
};

export default Signup;
