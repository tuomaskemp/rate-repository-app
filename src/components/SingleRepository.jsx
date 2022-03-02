import { View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import SingleRepositoryContainer from "./SingleRepositoryContainer";

const SingleRepository = () => {
    const params = useParams();
    const { repository, fetchMore } = useRepository({ repositoryId: params.id, first: 8 });

    const onEndReach = () => {
        fetchMore();
    };
    
    return (
        <View>
            <SingleRepositoryContainer 
                repository={repository}
                onEndReach={onEndReach}
            />
        </View>
    );
};

export default SingleRepository;