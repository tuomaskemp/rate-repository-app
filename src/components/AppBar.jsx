import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bgPrimary,
  },
  column: theme.layout.column,
  row: theme.layout.row,
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
            <ScrollView horizontal>
                <AppBarTab name="Repositories" style={styles.column} route="" />
                <AppBarTab name="Sign In" style={styles.column} route="login" />
            </ScrollView>
            </View>
        </View>
    );
};

export default AppBar;