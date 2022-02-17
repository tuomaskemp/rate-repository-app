import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    text: {
        padding: Constants.statusBarHeight
    }
  });

const AppBarTab = ({ name }) => {
    const onTextPress = () => {
        console.log('Text pressed!');
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