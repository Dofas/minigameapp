import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

interface IStartGameScreenProps {
  onStartGame: (pickedNumber: number) => void;
}

const StartGameScreen = ({onStartGame}: IStartGameScreenProps) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const { height} = useWindowDimensions();

  function changeEnteredNumber(enteredText: string) {
    setEnteredNumber(enteredText);
  }

  function resetHandler() {
    setEnteredNumber('');
  }

  function confirmHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number !',
        'Number has to be a number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetHandler}]);
      return;
    }

    onStartGame(chosenNumber);
  }

  const marginTopDistance = height < 400 ? 30 : 100;

  return (
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}} behavior="position">
          <View style={[styles.screenContainer, {marginTop: marginTopDistance}]}>
            <Title>Guess My Number</Title>
            <Card>
              <InstructionText style={styles.instructionText}>Enter a Number</InstructionText>
              <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={changeEnteredNumber}
              />
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
                </View>
              </View>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 8,
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
});