import Text from "./Text";
import { View, StyleSheet, Image } from "react-native";
import theme from "../theme";
import Badge from "./Badge";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.bgWhite,
        padding: 12,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: theme.borders.radius,
    },
    row: theme.layout.row,
    column: theme.layout.column,
    column_4: theme.layout.column_4,
    spaced: {
        flex: 2,
        alignItems: 'center',
        paddingTop: 10
    },
  });

const RepositoryItem = (props) => {
    const { description,
            forksCount,
            fullName,
            language,
            ratingAverage,
            reviewCount,
            stargazersCount } = props;

    const formatThousands = (num) => {
        return num < 1000 ? num : Math.round(num / 100) / 10 + "k";
    };

    return (
        <View testID="repositoryItem" style={styles.container}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Image style={styles.image} source={{
                        uri: props.ownerAvatarUrl,
                        }} />
                </View>
                <View style={styles.column_4}>
                        <Text fontWeight="bold">{fullName}</Text>
                        <Text>{description}</Text>
                        <Badge text={language}>{language}</Badge>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column, styles.spaced}>
                    <Text fontWeight="bold">{formatThousands(forksCount)}</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.column, styles.spaced}>
                    <Text fontWeight="bold">{formatThousands(ratingAverage)}</Text>
                    <Text>Rating</Text>
                </View>
                <View style={styles.column, styles.spaced}>
                    <Text fontWeight="bold">{formatThousands(reviewCount)}</Text>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.column, styles.spaced}>
                    <Text fontWeight="bold">{formatThousands(stargazersCount)}</Text>
                    <Text>Stars</Text>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;