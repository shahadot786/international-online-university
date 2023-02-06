import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Featured from '../views/home/Featured';
import Search from '../views/home/Search';
import MyLearning from '../views/home/MyLearning';
import Wishlist from '../views/home/Wishlist';
import Account from '../views/home/Account';
import Home from '../views/home/Home';
import Colors from '../constants/index';
import Icon from 'react-native-vector-icons/Ionicons';
import Fonts from '../constants/Fonts';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
          paddingHorizontal: 0,
          paddingTop: 4,
          paddingBottom: 6,
          backgroundColor: Colors.light,
          position: 'absolute',
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.black,
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 2,
          margin: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Featured',
          tabBarIcon: ({color}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 1,
                }}>
                <Icon name="star" color={color} size={30} />
                <Text
                  className="items-center justify-center"
                  style={{
                    color: color,
                    fontSize: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: Fonts.HelveticaBold,
                  }}>
                  Featured
                </Text>
              </View>
            );
          },
        }}
      />
      {/* <Tab.Screen name="Featured" component={Featured} /> */}
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 1,
                }}>
                <Icon name="search" color={color} size={30} />
                <Text
                  className="items-center justify-center"
                  style={{
                    color: color,
                    fontSize: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: Fonts.HelveticaBold,
                  }}>
                  Search
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MyLearning"
        component={MyLearning}
        options={{
          tabBarLabel: 'MyLearning',
          tabBarIcon: ({color}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 1,
                }}>
                <Icon name="play-circle" color={color} size={30} />
                <Text
                  className="items-center justify-center"
                  style={{
                    color: color,
                    fontSize: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: Fonts.HelveticaBold,
                  }}>
                  My Learning
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({color}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 1,
                }}>
                <Icon name="heart" color={color} size={30} />
                <Text
                  className="items-center justify-center"
                  style={{
                    color: color,
                    fontSize: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: Fonts.HelveticaBold,
                  }}>
                  Wishlist
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 1,
                }}>
                <Icon name="person-circle" color={color} size={30} />
                <Text
                  className="items-center justify-center"
                  style={{
                    color: color,
                    fontSize: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: Fonts.HelveticaBold,
                  }}>
                  Account
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
