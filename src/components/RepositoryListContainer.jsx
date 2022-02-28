import { FlatList, Pressable, View } from "react-native";
import ItemSeparator from "./ItemSeparator";
import RepositoryItem from "./RepositoryItem";
import RepositoryListHeader from "./RepositoryListHeader";



const RepositoryListContainer = ({ repositories, navigate, refetchRepositories }) => {

    return (
        <View>
            <FlatList
            data={repositories}
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
            />
        </View>
    );
  };

export default RepositoryListContainer;