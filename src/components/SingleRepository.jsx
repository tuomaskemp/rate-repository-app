import { View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";


const SingleRepository = () => {
    const params = useParams();
    const { repository } = useRepository(params.id);
    
    return (
        <View>
            <RepositoryItem showUrlBtn={true} {...repository} />
        </View>
    );
};

export default SingleRepository;