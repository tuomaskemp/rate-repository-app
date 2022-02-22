import { FlatList, Pressable, View } from "react-native";
import ItemSeparator from "./ItemSeparator";
import RepositoryItem from "./RepositoryItem";



const RepositoryListContainer = ({ repositories, navigate }) => {
    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    return (
        <View>
            <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
                <Pressable onPress={() => navigate(`/${item.id}`)}>
                    <RepositoryItem {...item} />
                </Pressable>)}
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
  };

export default RepositoryListContainer;  