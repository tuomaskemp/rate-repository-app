import { StyleSheet } from "react-native";
import { View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Pressable from "./Pressable";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingBottom: 20
    }
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
            <Pressable onSubmit={onSubmit} text="Sign in" />
        </View>
    );
};

export default SignInForm;