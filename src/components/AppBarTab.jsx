import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import Constants from 'expo-constants';
import { useNavigate } from "react-router-dom";

const styles = StyleSheet.create({
    text: {
        padding: Constants.statusBarHeight
    }
  });

const AppBarTab = ({ name, route }) => {
    let navigate = useNavigate();
    const onTextPress = () => {
        navigate(`/${route}`);
    };
    return (
        <Pressable onPress={onTextPress}>
            <Text 
                style={styles.text} 
                color="textWhite" 
                fontWeight="bold" 
                fontSize="subheading"
            >
            {name}
            </Text>
        </Pressable>
    );
};

export default AppBarTab;