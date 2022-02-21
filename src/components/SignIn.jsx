import { View } from 'react-native';
import useSignIn from '../hooks/useSignIn';
import AuthStorage from '../utils/authStorage';
import SignInContainer from './SignInContainer';

const SignIn = () => {
    const [signIn] = useSignIn();
    const credentials = new AuthStorage('user');

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            await signIn({ username, password });
            console.log(await credentials.getAccessToken());
          } catch (e) {
            console.log(e);
          }
    };

    return (
        <View>
            <SignInContainer onSubmit={onSubmit} />
        </View>
    );
};

export default SignIn;