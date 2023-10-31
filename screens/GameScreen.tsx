import { Alert, FlatList, StyleSheet, View } from 'react-native';
import Title from '../components/ui/Title';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import generateRandomNumberBetween from '../helpers/generateRandomNumberBetween';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessItem from '../components/game/GuessItem';

interface IGameScreenProps {
  userNumber: number,
  onGameOver: (numberOfRounds: number) => void,
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}: IGameScreenProps) => {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuessNumber, setCurrentGuessNumber] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const guessRoundsListLength = guessRounds.length;

  function nextGuess(direction: 'lower' | 'greater') {
    if ((direction === 'lower' && currentGuessNumber < userNumber)
      || (direction === 'greater' && currentGuessNumber > userNumber)) {
      Alert.alert('Don\'t lie!',
        'You know that this is wrong...',
        [{text: 'Sorry', style: 'cancel'}]);
      return;
    }

    if (direction === 'lower') {
      // no need to -1 because of Math
      maxBoundary = currentGuessNumber;
    } else {
      minBoundary = currentGuessNumber + 1;
    }
    const newGuessNumber = generateRandomNumberBetween(minBoundary, maxBoundary, currentGuessNumber);
    setCurrentGuessNumber(newGuessNumber);
    setGuessRounds(prevGuessRounds => [newGuessNumber, ...prevGuessRounds]);
  }

  useEffect(() => {
    if (currentGuessNumber === userNumber) {
      onGameOver(guessRoundsListLength);
    }
  }, [currentGuessNumber, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return (
    <View style={styles.screenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuessNumber}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower ?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuess.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white"/>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuess.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="white"/>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <GuessItem
            roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>}
          keyExtractor={(item) => item.toLocaleString()}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    marginTop: 16,
  },
  instructionText: {
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }
});