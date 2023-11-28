import { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

interface ITitleProps {
  children: ReactNode,
}

const Title = ({children}: ITitleProps) => {
  return (
    <Text style={styles.title}>{children}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 0 : 2,
    // borderWidth: Platform.select({ios: 2, android: 0}),
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    // maxWidth refers to a parent container
    maxWidth: '80%',
    width: 300,
  }
});