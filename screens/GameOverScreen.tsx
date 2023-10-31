import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

interface IGameOverScreenProps {
  roundsNumber: number,
  userNumber: number,
  onStartNewGame: () => void,
}

// nexted Text are affected by parent styles
const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}: IGameOverScreenProps) => {
  return (
    <View style={styles.screenContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/success.png')} style={styles.image}/>
      </View>
      <Text style={styles.summaryText}>Your phone needs {' '}
        <Text style={styles.highlightText}>{roundsNumber}</Text> {' '}
        rounds to guess the number {' '}
        <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
});