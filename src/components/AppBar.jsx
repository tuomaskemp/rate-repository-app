import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import { useNavigate } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';
import { useEffect } from 'react';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bgPrimary,
  },
  column: theme.layout.column,
  row: theme.layout.row,
});

const AppBar = () => {
    let navigate = useNavigate();
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const user = useQuery(ME);

    useEffect(() => {
      toggleLoginText(user);
    }, [user]);

    const toggleLoginText = (user) => {
      return !user.data.me ? "Sign in" : "Sign out";
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
                  name={toggleLoginText(user)} 
                  style={styles.column} 
                  onTextPress={() => handleSignInSignOutPress(user)} 
                />
            </ScrollView>
            </View>
        </View>
    );
};

export default AppBar;