import {Dimensions, View} from 'react-native';
import React from 'react';
import Images from '../../constants/Images';
import {FlatListSlider} from 'react-native-flatlist-slider';
const screenHeight = Dimensions.get('screen').height;

const HomeSlider = () => {
  const imageData = [
    {image: Images.slider01},
    {image: Images.slider02},
    {image: Images.slider03},
    {image: Images.slider04},
    {image: Images.slider05},
    {image: Images.slider06},
  ];
  return (
    <View>
      <FlatListSlider
        data={imageData}
        imageKey={'image'}
        indicator={false}
        timer={5000}
        onPress={item => console.log(item)}
        height={screenHeight / 4}
        local
      />
    </View>
  );
};

export default HomeSlider;
