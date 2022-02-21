import { FlatList, Pressable, StyleSheet, View } from "react-native";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

const ItemSeparator = () => <View style={styles.separator} />;

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