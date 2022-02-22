import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import ItemSeparator from "./ItemSeparator";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
    header: {
        marginBottom: 10,
    }
});


const SingleRepository = () => {
    const params = useParams();
    const { repository } = useRepository(params.id);

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
            />
        </View>
    );
};

export default SingleRepository;