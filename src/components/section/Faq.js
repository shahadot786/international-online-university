import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';
import Accordion from '../accordion/Accordion';
import COLORS from '../../constants/index';

const Faq = () => {
  return (
    <View style={styles.container}>
      <View>
        <Heading color={COLORS.black} size={18}>
          FAQ
        </Heading>
        <SubHeading color={COLORS.black} size={16}>
          Over 4,000 courses in topics like business analytics, graphic design,
          Python, and more.
        </SubHeading>
      </View>
      <View style={styles.accordion}>
        <Accordion />
      </View>
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderTopColor: COLORS.gray,
    paddingTop: 15,
    marginBottom: 60,
  },
  accordion: {
    marginTop: 40,
  },
});
