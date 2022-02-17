import { Pressable, StyleSheet } from "react-native";
import { View } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = StyleSheet.create({
    btn: {
        backgroundColor: theme.colors.primary,
        padding: 13,
        marginHorizontal: 12,
        borderRadius: theme.borders.radius,
    },
    text: {
        textAlign: "center",
    },
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
            <Pressable style={styles.btn} onPress={onSubmit}>
                <Text color="textWhite" fontWeight="bold" style={styles.text}>Sign in</Text>
            </Pressable>
        </View>
    );
};

export default SignInForm;