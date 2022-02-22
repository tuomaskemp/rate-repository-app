import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import { useNavigate } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bgPrimary,
  },
  column: theme.layout.column,
  row: theme.layout.row,
  hidden: {
    display: 'none',
  }
});

const AppBar = () => {
    let navigate = useNavigate();
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const user = useQuery(ME);

    const toggleTextVisibility = (user, text1, text2) => {
      return !user.data?.me ? text1 : text2;
    };

    const handleSignInSignOutPress = async (user) => {
      if (user) {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
      }
      navigate('/login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
            <ScrollView horizontal>
                <AppBarTab 
                  name="Repositories" 
                  style={styles.column} 
                  onTextPress={() => navigate('/')} 
                />
                <AppBarTab 
                  name={toggleTextVisibility(user, "Sign In", "Sign out")} 
                  style={styles.column} 
                  onTextPress={() => handleSignInSignOutPress(user)} 
                />
                <AppBarTab
                  name="Sign up"
                  style={styles.column}
                  onTextPress={() => navigate('/signup')}
                  hideCondition={user.data?.me}
                />
                <AppBarTab
                  name="Create a review"
                  style={styles.column}
                  onTextPress={() => navigate('/review')}
                  hideCondition={!user.data?.me}
                />
            </ScrollView>
            </View>
        </View>
    );
};

export default AppBar;