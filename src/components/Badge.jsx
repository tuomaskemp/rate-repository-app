import { StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
    text: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.textWhite,
        fontWeight: theme.fontWeights.normal,
        alignSelf: 'flex-start',
        padding: 5,
        marginVertical: 5,
    },
  });

const Badge = ({ text }) => {
    return (
        <Text style={styles.text}>{text}</Text>
    );
};

export default Badge;