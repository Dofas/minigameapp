import React, { ReactNode } from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Colors from '../../constants/colors';

interface ICardProps {
  children: ReactNode,
}

const Card = ({children}: ICardProps) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 300 ? 16 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // box-shadow for android = elevation
    elevation: 4,
    // box-shadow for IOS is shadow
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  }
});