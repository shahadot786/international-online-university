import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../../constants/Colors';

const PathwayList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Icon name="list-outline" size={24} color={COLORS.black} />
        <Text style={styles.text}>240+ Categories to Choose From</Text>
      </View>
      <View style={styles.list}>
        <Icon name="people-outline" size={24} color={COLORS.black} />
        <Text style={styles.text}>Expert Instruction</Text>
      </View>
      <View style={styles.list}>
        <Icon name="key-outline" size={24} color={COLORS.black} />
        <Text style={styles.text}>Unlimited Access</Text>
      </View>
      <View style={styles.list}>
        <Icon name="md-logo-usd" size={24} color={COLORS.black} />
        <Text style={styles.text}>Comfortable Prices</Text>
      </View>
      <View style={styles.list}>
        <Icon name="timer-outline" size={24} color={COLORS.black} />
        <Text style={styles.text}>Free 15 Days Trail</Text>
      </View>
      <View style={styles.list}>
        <Feather name="loader" size={24} color={COLORS.black} />
        <Text style={styles.text}>Review System</Text>
      </View>
    </View>
  );
};

export default PathwayList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  list: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 10,
  },
  text: {
    color: COLORS.black,
    fontSize: 16,
  },
});
