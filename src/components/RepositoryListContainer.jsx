import { FlatList, StyleSheet, View } from "react-native";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <View>
        <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
            <RepositoryItem {...item} />)}
        keyExtractor={(item, index) => index.toString()}
        />
    </View>
  );
  };

export default RepositoryListContainer;  