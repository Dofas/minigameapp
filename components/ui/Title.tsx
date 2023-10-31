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
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  }
});