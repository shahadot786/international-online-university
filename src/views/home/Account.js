import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Icon from 'react-native-vector-icons/Ionicons';

const Account = () => {
  const [selectedId, setSelectedId] = useState();
  const [selectedId2, setSelectedId2] = useState();
  const data0 = [
    {
      id: 0,
      name: 'Learning Reminder',
    },
  ];
  const data = [
    {
      id: 0,
      name: 'About IOU',
    },
    {
      id: 1,
      name: 'About IOU Business',
    },
    {
      id: 2,
      name: 'Community',
    },
    {
      id: 3,
      name: 'Frequently asked questions',
    },
    {
      id: 4,
      name: 'Share IOU App',
    },
    {
      id: 5,
      name: 'More',
    },
  ];
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={{marginLeft: 25, marginTop: 8}}>
        {/* Header */}
        <Text
          style={{
            color: Colors.black,
            fontFamily: Fonts.InterBold,
            fontSize: 24,
            marginBottom: 25,
          }}>
          Account
        </Text>
        {/* Content */}
        {data0.map(item => {
          const color = item.id === selectedId ? Colors.primary : Colors.black;
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => setSelectedId(item.id)}
              activeOpacity={0.5}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 10,
                marginBottom: 20,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: color,
                  fontFamily: Fonts.InterBold,
                }}>
                {item.name}
              </Text>
              <Icon name="chevron-forward" color={color} size={24} />
            </TouchableOpacity>
          );
        })}
        <Text style={{color: Colors.gray, fontSize: 14, marginBottom: 10}}>
          Help and Support
        </Text>
        {/* Content */}
        {data.map(item => {
          const color = item.id === selectedId2 ? Colors.primary : Colors.black;
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => setSelectedId2(item.id)}
              activeOpacity={0.5}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 10,
                marginBottom: 20,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: color,
                  fontFamily: Fonts.InterBold,
                }}>
                {item.name}
              </Text>
              <Icon name="chevron-forward" color={color} size={24} />
            </TouchableOpacity>
          );
        })}

        <Text style={{color: Colors.gray, fontSize: 14, marginBottom: 10}}>
          Diagnostics
        </Text>
        {/* Content */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 10,
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: Colors.black,
              fontFamily: Fonts.InterBold,
            }}>
            Status
          </Text>
          <Icon name="chevron-forward" color={Colors.black} size={24} />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 25,
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('SignIn')}>
            <Text
              style={{
                color: Colors.primary,
                fontSize: 16,
                fontFamily: Fonts.InterBold,
                marginVertical: 0,
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 13,
              fontFamily: Fonts.InterRegular,
              color: Colors.gray,
              textAlign: 'center',
              marginTop: 4,
            }}>
            IOU v1.0.0
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    marginBottom:65
  },
});
