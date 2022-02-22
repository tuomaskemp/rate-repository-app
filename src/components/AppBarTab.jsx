import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    text: {
        padding: Constants.statusBarHeight
    }
  });

const AppBarTab = ({ name, onTextPress, hideCondition }) => {
    if (hideCondition) {
        return null;
    }
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