import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Icon from 'react-native-vector-icons/Ionicons';

const Account = () => {
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
            Learning Reminder
          </Text>
          <Icon name="chevron-forward" color={Colors.black} size={24} />
        </TouchableOpacity>
        <Text style={{color: Colors.gray, fontSize: 14, marginBottom: 10}}>
          Help and Support
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
            About IOU
          </Text>
          <Icon name="chevron-forward" color={Colors.black} size={24} />
        </TouchableOpacity>
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
            About IOU Business
          </Text>
          <Icon name="chevron-forward" color={Colors.black} size={24} />
        </TouchableOpacity>
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
            Community
          </Text>
          <Icon name="chevron-forward" color={Colors.black} size={24} />
        </TouchableOpacity>
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
            Frequently asked questions
          </Text>
          <Icon name="chevron-forward" color={Colors.black} size={24} />
        </TouchableOpacity>
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
            Share the IOU app
          </Text>
          <Icon name="chevron-forward" color={Colors.black} size={24} />
        </TouchableOpacity>
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
            More
          </Text>
          <Icon name="chevron-forward" color={Colors.black} size={24} />
        </TouchableOpacity>

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
  },
});
