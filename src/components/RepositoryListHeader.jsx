import { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { IconButton, Menu, Modal, Portal, Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce/lib";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
    row: theme.layout.row,
    column: theme.layout.column,
    start: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    end: {
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    textSecondary: {
        color: theme.colors.primary
    },
    containerStyle: {
        backgroundColor: 'white', 
        margin: 20
    },
    margin: {
        margin: 10
    }
  });

const RepositoryListHeader = ({ refetchRepositories }) => {
    const [visible, setVisible] = useState(false);
    const [searchKw, setSearchKw] = useState('');
    const [debouncedText] = useDebounce(searchKw, 500);
    const [currentFilter, setCurrentFilter] = useState('Latest repositories');

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    useEffect(() => {
        switch (currentFilter) {
            case "Latest repositories":
                return refetchRepositories({ orderBy: "CREATED_AT", orderDirection: "DESC" });
            case "Highest rated repositories":
                return refetchRepositories({ 
                    orderBy: "RATING_AVERAGE", 
                    orderDirection: "DESC" 
                });
            case "Lowest rated repositories":
                return refetchRepositories({ 
                    orderBy: "RATING_AVERAGE", 
                    orderDirection: "ASC" 
                });
            default:
                break;
        }
    }, [currentFilter]);

    useEffect(() => {
        refetchRepositories({
            searchKeyword: debouncedText
        });
    }, [debouncedText]);

    return (
        <View>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
                <View>
                    <Menu.Item onPress={() => {}} title="Select an item..." disabled />
                    <Menu.Item onPress={() => {
                        setCurrentFilter("Latest repositories");
                        }} title="Latest repositories" />
                    <Menu.Item onPress={() => {
                        setCurrentFilter("Highest rated repositories");
                        }} title="Highest rated repositories" />
                    <Menu.Item onPress={() => {
                        setCurrentFilter("Lowest rated repositories");
                        }} title="Lowest rated repositories" />
                </View>
                </Modal>
            </Portal>
            <View>
                <Searchbar 
                    style={styles.margin} 
                    onChangeText={(text) => {
                        setSearchKw(text);
                    }}
                    clearIcon="close"
                    value={searchKw}
                />
            </View>
            <View style={[styles.row, styles.margin]}>
                <View style={[styles.column, styles.start]}>
                    <Pressable onPress={showModal}><Text>{currentFilter}</Text></Pressable>
                </View>
                <View style={[styles.column, styles.end]}>
                    <IconButton icon="chevron-down"></IconButton>
                </View>
            </View>
        </View>
    );
};

export default RepositoryListHeader;