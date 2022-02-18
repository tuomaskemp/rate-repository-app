import { useApolloClient, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { LOGIN } from "../graphql/mutations";
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const [mutate, result] = useMutation(LOGIN);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    let navigate = useNavigate();
  
    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: { credentials: { username, password } } });
        await authStorage.setAccessToken(data.authenticate.accessToken);
        apolloClient.resetStore();
        navigate('/');
    };
  
    return [signIn, result];
};

export default useSignIn;