import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('screen');

const ListCard = ({image, heading, subHeading, border}) => {
  const borderNone = border === 0 ? border : 2;
  return (
    <View
      style={[
        styles.contentView,
        {borderBottomWidth: borderNone, width: screenWidth.width - 100},
      ]}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={image} />
      </View>
      <View>
        <Text style={styles.heading}>
          {heading}
          <Text>+</Text>
        </Text>
        <Text style={styles.subHeading}>{subHeading}</Text>
      </View>
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 40,
  },
  itemView: {
    backgroundColor: '#E31E25',
    width: '100%',
    paddingVertical: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageView: {
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  contentView: {
    borderColor: '#4D1E1F48',
    flexDirection: 'row',
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 8,
  },
  subHeading: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 25,
  },
});
