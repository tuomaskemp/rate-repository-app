import { Formik } from 'formik';
import { View } from 'react-native';
import SignInForm from './SignInForm';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import AuthStorage from '../utils/authStorage';

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required')
});

const SignIn = () => {
    const [signIn] = useSignIn();
    const credentials = new AuthStorage('user');

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            const { data } = await signIn({ username, password });
            console.log(data);
            await credentials.setAccessToken(data.authenticate.accessToken);
            console.log(await credentials.getAccessToken());
            await credentials.removeAccessToken();
            console.log('should be empty: ', await credentials.getAccessToken());
          } catch (e) {
            console.log(e);
          }
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