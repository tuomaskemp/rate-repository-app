import { Formik } from 'formik';
import { View } from 'react-native';
import SignInForm from './SignInForm';

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };

    const initialValues = {
        username: '',
        password: '',
      };

    return (
        <View>
             <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
            </Formik>
        </View>
    );
};

export default SignIn;