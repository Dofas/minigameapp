import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

interface IInstructionTextProps {
  style?: StyleProp<TextStyle>,
  children: ReactNode,
}

const InstructionText = ({style, children}: IInstructionTextProps) => {
  return (
    // order in array works like cascading here we can overwrite instruction styles
    <Text style={[styles.instructionText, style]}>
      {children}
    </Text>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  }
});