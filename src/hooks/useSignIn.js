import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";

const useSignIn = () => {
    const [mutate, result] = useMutation(LOGIN);
  
    const signIn = async ({ username, password }) => {
        const payload = await mutate({ variables: { credentials: { username, password } } });
        return payload;
    };
  
    return [signIn, result];
};

export default useSignIn;