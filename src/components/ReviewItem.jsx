import { StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { format } from 'date-fns';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.bgWhite,
        padding: 12,
    },
    row: theme.layout.row,
    column: theme.layout.column,
    column_4: theme.layout.column_4,
    circle: {
        width: 50,
        height: 50,
        borderRadius: (50 / 2),
        borderWidth: 2,
        borderColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    date: {
        marginTop: 5,
        marginBottom:8
    },
    center: {
        alignItems: 'center',
    }
});

const ReviewItem = ({ review }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <View style={styles.center}>
                        <View style={styles.circle}>
                            <Text color="primary" fontSize="subheading" fontWeight="bold">{review.rating}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.column_4}>
                    <Text fontSize="subheading" fontWeight="bold">{review.user.username}</Text>
                    <Text style={styles.date} color="textSecondary" fontSize="subheading">{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
                    <Text>{review.text}</Text>
                </View>
            </View>
        </View>
    );
};

export default ReviewItem;