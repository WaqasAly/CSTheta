import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import React,{useEffect} from 'react';
import LoginScreen from './App/Screens/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import Colors from './App/utils/Colors';
import { useFocusEffect } from '@react-navigation/native';

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor(Colors.light_primary);
  }, []);

  return (
    <ClerkProvider publishableKey={"pk_test_bmF0dXJhbC1nb2JibGVyLTY2LmNsZXJrLmFjY291bnRzLmRldiQ"}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" backgroundColor={Colors.light_primary}/>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <LoginScreen/>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light_primary,
    //marginTop: 30,
  },
});