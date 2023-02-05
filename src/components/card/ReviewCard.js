import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import COLORS from '../../constants/index';

const width = Dimensions.get('screen');
const ReviewCard = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={data.item.image} />
      </View>
      <View style={[styles.content, {width: width.width / 1.2}]}>
        <View style={styles.rectangle}></View>
        <Text style={styles.username}>{data.item.name}</Text>
        <Text style={styles.country}>{data.item.country}</Text>
        <Text style={styles.review} textBreakStrategy="highQuality">
          {data.item.review}
        </Text>
      </View>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
  },
  content: {
    backgroundColor: COLORS.light,
    marginHorizontal: 40,
    borderRadius: 25,
    alignItems: 'flex-end',
    paddingBottom: 25,
  },
  imageView: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginRight: 60,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 36,
  },
  rectangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderWidth: 15,
    borderBottomWidth: 30,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.light,
    borderTopColor: 'transparent',
    marginBottom: 20,
    position: 'absolute',
    top: -35,
    right: 42,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
    color: COLORS.black,
    marginRight: 20,
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  country: {
    color: COLORS.black,
    marginRight: 20,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  review: {
    color: COLORS.black,
    marginHorizontal: 20,
    fontSize: 15,
    marginTop: 10,
    textTransform: 'capitalize',
    lineHeight: 25,
  },
});
