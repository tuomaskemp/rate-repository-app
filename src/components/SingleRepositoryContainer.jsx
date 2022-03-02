import { FlatList, StyleSheet, View } from "react-native";
import ItemSeparator from "./ItemSeparator";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
    header: {
        marginBottom: 10,
    }
});


const SingleRepositoryContainer = ({ repository, onEndReach}) => {
    const reviewNodes = repository
        ? repository.reviews.edges.map(edge => edge.node)
        : [];

    return (
        <View>
            <FlatList
                data={reviewNodes}
                renderItem={({ item }) => <ReviewItem review={item} />}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={() => <RepositoryItem showUrlBtn={true} {...repository} />}
                ListHeaderComponentStyle={styles.header}
                ItemSeparatorComponent={ItemSeparator}
                onEndReached={onEndReach}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
};

export default SingleRepositoryContainer;