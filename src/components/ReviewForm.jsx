import { StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Pressable from "./Pressable";


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingBottom: 20
    }
});

const ReviewForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="ownerName" placeholder="Username" />
            <FormikTextInput name="repositoryName" placeholder="Repository name" />
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" type="number" />
            <FormikTextInput name="text" placeholder="Review" multiline />
            <Pressable onSubmit={onSubmit} text="Create a review" />
        </View>
    );
};

export default ReviewForm;