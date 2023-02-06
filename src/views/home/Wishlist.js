import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Images from '../../constants/Images';

const Wishlist = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{marginLeft: 25, marginTop: 8, flex: 1}}>
        {/* Header */}
        <Text
          style={{
            color: Colors.black,
            fontFamily: Fonts.InterBold,
            fontSize: 24,
            marginBottom: 25,
          }}>
          Wishlist
        </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            height: 250,
          }}>
          <Image
            style={{height: 150, width: 150, resizeMode: 'cover'}}
            source={Images.wishlist}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: Colors.black,
              fontFamily: Fonts.InterBold,
              fontSize: 24,
              marginBottom: 15,
              textAlign: 'center',
            }}>
            Want to save something for later?
          </Text>
          <Text
            style={{
              color: Colors.darkGray,
              fontSize: 14,
              fontFamily: Fonts.InterMedium,
            }}>
            Your wishlist will go here.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
});
