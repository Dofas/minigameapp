import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function startGame(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function endGame(numberOfRounds: number) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGame() {
    setUserNumber(null);
    setGameIsOver(true);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onStartGame={startGame}/>;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={endGame}/>;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGame}/>;
  }

  return (
    <View style={styles.appContainer} onLayout={onLayoutRootView}>
      <StatusBar style="light"/>
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.appContainer}>
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode="cover"
          style={styles.appContainer}
          imageStyle={styles.backgroundImage}
        >
          {/*use SafeAreaView to skip a notch (top space reserved. for example for camera)*/}
          <SafeAreaView style={styles.appContainer}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
