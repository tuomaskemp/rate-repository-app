import { FlatList, Pressable, View } from "react-native";
import ItemSeparator from "./ItemSeparator";
import RepositoryItem from "./RepositoryItem";
import RepositoryListHeader from "./RepositoryListHeader";



const RepositoryListContainer = ({ repositories, navigate, refetchRepositories, onEndReach }) => {
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];
    return (
        <View>
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                ListHeaderComponent={
                    <RepositoryListHeader 
                        refetchRepositories={refetchRepositories}
                    />}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigate(`/${item.id}`)}>
                        <RepositoryItem {...item} />
                    </Pressable>)}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={onEndReach}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
  };

export default RepositoryListContainer;