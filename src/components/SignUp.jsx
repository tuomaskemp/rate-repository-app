import { Formik } from "formik";
import { View } from "react-native";
import SignUpForm from "./SignUpForm";
import * as yup from 'yup';
import { CREATE_USER } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required')
        .min(1)
        .max(30),
    password: yup
        .string()
        .required('Password is required')
        .min(5)
        .max(50),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null])
        .required('Password confirm is required')
});

const SignUp = () => {
    const [mutate] = useMutation(CREATE_USER);
    const navigate = useNavigate();
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            await mutate({ variables: { 
                user: { 
                    username, 
                    password, 
                } 
            }});
            await signIn({ username, password });
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    };

    const initialValues = {
        username: '',
        password: '',
        passwordConfirm: '',
    };

    return (
        <View>
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
            </Formik>
        </View>
    );
};

export default SignUp;