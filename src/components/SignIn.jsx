import { Formik } from 'formik';
import { View } from 'react-native';
import SignInForm from './SignInForm';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required')
});

const SignIn = () => {
    const onSubmit = (values) => {
        console.log('submit: ', values);
    };

    const initialValues = {
        username: '',
        password: '',
      };

    return (
        <View>
             <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
            </Formik>
        </View>
    );
};

export default SignIn;