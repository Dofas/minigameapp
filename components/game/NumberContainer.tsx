import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

interface INumberContainerProps {
  children: ReactNode;
}

const NumberContainer = ({children}: INumberContainerProps) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

// Note border radius doesn't allow on Text for IOS that's why you need extra View
const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
    fontSize: 36,
  }
});