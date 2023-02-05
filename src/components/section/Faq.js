import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Heading from '../text/Heading';
import SubHeading from '../text/SubHeading';
import Accordion from '../accordion/Accordion';

const Faq = () => {
  return (
    <View style={styles.container}>
      <View>
        <Heading color={'#001514'} size={18}>
          FAQ
        </Heading>
        <SubHeading color={'#001514'} size={16}>
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
    borderTopColor: '#898989',
    paddingTop: 15,
    marginBottom: 60,
  },
  accordion: {
    marginTop: 40,
  },
});
