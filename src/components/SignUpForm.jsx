import { StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Pressable from "./Pressable";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingBottom: 20
    }
});

const SignUpForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
            <FormikTextInput name="passwordConfirm" placeholder="Confirm password" secureTextEntry/>
            <Pressable onSubmit={onSubmit} text="Sign up" />
        </View>
    );
};

export default SignUpForm;