import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
    const [pickedNum, setPickedNum] = useState(0)
    const [gameIsOver, setGameIsOver] = useState(true)
    const [roundsNumber, setRoundsNumber] = useState(0)


    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    if(!fontsLoaded) {
        return <AppLoading />
    }

    const gameOverHandler = () => {
        setGameIsOver(true)
    }

    const pickedNumberHandler = (pickedNumber) => {
        setPickedNum(pickedNumber)
        setGameIsOver(false)
    }

    const addRoundsNumber = () => {
        setRoundsNumber(prev => prev + 1)
    }

    const startNewGame = () => {
        setGameIsOver(true)
        setRoundsNumber(0)
        setPickedNum(0)
    }

  return (
      <LinearGradient colors={[Colors.primary500,Colors.accent]} style={styles.rootScreen}>
          <ImageBackground source={require('./assets/background.png')} resizeMode={'cover'} style={styles.rootScreen} imageStyle={{opacity: 0.3}}>
             <SafeAreaView style={styles.rootScreen}>
                 {!pickedNum ?  (
                     <StartGameScreen handlePicked={pickedNumberHandler} />
                 ) : gameIsOver ? (
                     <GameOverScreen userNumber={pickedNum} roundsNumber={roundsNumber} startNewGame={startNewGame} />
                 ) : (
                     <GameScreen addRound={addRoundsNumber} gameOverHandler={gameOverHandler} userNumber={pickedNum} />
                 )}
             </SafeAreaView>
          </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
