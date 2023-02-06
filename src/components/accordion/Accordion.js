import {
  StyleSheet,
  Text,
  View,
  Platform,
  UIManager,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {AccordionItem} from 'react-native-accordion-list-view';
import COLORS from '../../constants/Colors';

const Accordion = () => {
  const data = [
    {
      id: 0,
      title:
        'Learn a new tool or skill in an interactive, hands-on environment?',
      body: 'Whether you’re looking to start a new career or change your current one, Professional Certificates on Coursera help you become job ready',
    },
    {
      id: 1,
      title:
        'Learn a new tool or skill in an interactive, hands-on environment?',
      body: 'Whether you’re looking to start a new career or change your current one, Professional Certificates on Coursera help you become job ready',
    },
    {
      id: 2,
      title:
        'Learn a new tool or skill in an interactive, hands-on environment?',
      body: 'Whether you’re looking to start a new career or change your current one, Professional Certificates on Coursera help you become job ready',
    },
    {
      id: 3,
      title:
        'Learn a new tool or skill in an interactive, hands-on environment?',
      body: 'Whether you’re looking to start a new career or change your current one, Professional Certificates on Coursera help you become job ready',
    },
    {
      id: 4,
      title:
        'Learn a new tool or skill in an interactive, hands-on environment?',
      body: 'Whether you’re looking to start a new career or change your current one, Professional Certificates on Coursera help you become job ready',
    },
  ];
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {data.map(item => (
          <AccordionItem
            key={item.id}
            customTitle={() => <Text style={styles.title}>{item.title}</Text>}
            customBody={() => <Text style={styles.body}>{item.body}</Text>}
            animationDuration={400}
            isOpen={item.id == 0 ? true : false}
            containerStyle={styles.accContainer}
            // onPress={isOpen => console.log(isOpen)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  title: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '600',
  },
  body: {
    color: COLORS.black,
    fontSize: 12,
    marginHorizontal: 40,
    marginTop: 10,
    lineHeight: 16,
  },
  accContainer: {
    backgroundColor: COLORS.light,
    borderTopColor: COLORS.secondary,
    borderTopWidth: 1,
    borderRadius: 0,
    marginHorizontal: 10,
  },
});
