import { useMutation, useQuery } from "@apollo/client";
import { Alert, FlatList, View } from "react-native";
import { useNavigate } from "react-router-native";
import { DELETE_REVIEW } from "../graphql/mutations";
import { ME } from "../graphql/queries";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";


const MyReviews = () => {
    const { data, refetch } = useQuery(ME, { variables: { includeReviews: true }});
    const reviews = data?.me.reviews;
    const reviewNodes = reviews
        ? reviews.edges.map(edge => edge.node)
        : [];
    const navigate = useNavigate();
    const [mutate] = useMutation(DELETE_REVIEW);

    const onDeleteReview = (id) => {
        Alert.alert(
            "Delete Review",
            "Are you sure you want to delete this review?",
            [
                {
                text: "Cancel",
                onPress: () => {},
                style: "cancel"
                },
                { 
                text: "Delete", 
                style:'destructive', 
                onPress: async () => {
                    await mutate({ variables: { idToDelete: id }});
                    refetch();
                }
                }
            ]
            );
    };

    return (
        <View>
            <FlatList
                data={reviewNodes}
                renderItem={({ item }) => <ReviewItem 
                        review={item} 
                        headingField="repositoryName" 
                        showActionButtons 
                        navigate={navigate}
                        onDeleteReview={onDeleteReview}
                    />
                }
                keyExtractor={({ id }) => id}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
}; 

export default MyReviews;