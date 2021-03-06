import { StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { format } from 'date-fns';
import Pressable from "./Pressable";

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
    },
    marginTop: {
        marginTop: 10
    }
});

const ReviewItem = ({ review, headingField, showActionButtons, navigate, onDeleteReview }) => {
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
                    <Text fontSize="subheading" fontWeight="bold">
                        {
                            headingField === 'repositoryName' ? 
                            `${review.repository?.ownerName}/${review.repository?.name}` : 
                            review.user.username
                        }
                    </Text>
                    <Text style={styles.date} color="textSecondary" fontSize="subheading">
                        {format(new Date(review.createdAt), 'dd.MM.yyyy')}
                    </Text>
                    <Text>{review.text}</Text>
                </View>
            </View>
            { showActionButtons ?
                <View style={[styles.row, styles.marginTop]}>
                    <View style={styles.column}>
                        <Pressable text="View repository" onSubmit={() => navigate(`/${review.repository.id}`, {replace: true})} />
                    </View>
                    <View style={styles.column}>
                        <Pressable color="error" text="Delete review" onSubmit={() => onDeleteReview(review.id)} />
                    </View>
                </View>
                : null
            }
        </View>
    );
};

export default ReviewItem;