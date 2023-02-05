import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import GlobalStyle from './src/utils/GlobalStyle';
import COLORS from './src/constants/index';
import OnBoardingScreen from './src/views/OnBoarding/OnBoardingScreen';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './src/views/auth/Welcome';
import SignUp from './src/views/auth/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './src/views/auth/SignIn';

const Stack = createNativeStackNavigator();

const App = () => {
  // get the app first launch
  const [firstLaunch, setFirstLaunch] = useState(null);
  useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem('appLaunched');
      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem('appLaunched', 'false');
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);
  //end
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!firstLaunch && (
          <Stack.Screen
            name="onBoard"
            component={OnBoardingScreen}
            options={{headerShown: false}}
          />
        )}
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
});
