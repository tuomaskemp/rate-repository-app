import { useQuery } from "@apollo/client";
import { FlatList, View } from "react-native";
import { ME } from "../graphql/queries";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";


const MyReviews = () => {
    const user = useQuery(ME, { variables: { includeReviews: true }});
    const reviews = user.data?.me.reviews;
    const reviewNodes = reviews
        ? reviews.edges.map(edge => edge.node)
        : [];
    console.log(user.data?.me.reviews.edges);

    return (
        <View>
            <FlatList
                data={reviewNodes}
                renderItem={({ item }) => <ReviewItem review={item} headingField="repositoryName" />}
                keyExtractor={({ id }) => id}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
}; 

export default MyReviews;