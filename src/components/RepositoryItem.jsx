import { Text } from "react-native";
import { View } from "react-native";

const RepositoryItem = (props) => {
    const { description,
            forksCount,
            fullName,
            language,
            ratingAverage,
            reviewCount,
            stargazersCount } = props;

    return (
        <View>
            <Text>Full Name: {fullName}</Text>
            <Text>Description: {description}</Text>
            <Text>Forks: {forksCount}</Text>
            <Text>Language: {language}</Text>
            <Text>Rating: {ratingAverage}</Text>
            <Text>Reviews: {reviewCount}</Text>
            <Text>Stars: {stargazersCount}</Text>
        </View>
    );
};

export default RepositoryItem;