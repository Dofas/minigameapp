import {Image, StyleSheet, Text, View, useWindowDimensions, ScrollView} from 'react-native';
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
  const {width, height} = useWindowDimensions();

  let imageSize = 300;

  if (width < 300) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyles = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }

  return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.screenContainer}>
          <Title>GAME OVER!</Title>
          <View style={[styles.imageContainer, imageStyles]}>
            <Image source={require('../assets/images/success.png')} style={styles.image}/>
          </View>
          <Text style={styles.summaryText}>Your phone needs {' '}
            <Text style={styles.highlightText}>{roundsNumber}</Text> {' '}
            rounds to guess the number {' '}
            <Text style={styles.highlightText}>{userNumber}</Text>
          </Text>
          <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
        </View>
      </ScrollView>
  );
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
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