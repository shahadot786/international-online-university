import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import OnBoardingScreen from '../views/OnBoarding/OnBoardingScreen';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../views/auth/Welcome';
import SignUp from '../views/auth/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../views/auth/SignIn';
import COLORS from '../constants/index';
import BottomTab from './BottomTab';
const Stack = createNativeStackNavigator();

const Navigation = () => {
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
  //get the bottom tab
  function BottomTabs() {
    return <BottomTab />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          statusBarStyle: 'dark',
          statusBarColor: COLORS.light,
        }}>
        {!firstLaunch && (
          <Stack.Screen
            name="onBoard"
            component={OnBoardingScreen}
            options={{headerShown: false}}
          />
        )}
        <Stack.Screen
          name="BottomTab"
          component={BottomTabs}
          options={{headerShown: false}}
        />
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

export default Navigation;
