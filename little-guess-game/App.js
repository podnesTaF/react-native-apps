import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
export default function App() {
    const [pickedNum, setPickedNum] = useState(0)

    const pickedNumberHandler = (pickedNumber) => {
        setPickedNum(pickedNumber)
    }
  return (
      <LinearGradient colors={[Colors.primary500,Colors.accent]} style={styles.rootScreen}>
          <ImageBackground source={require('./assets/background.png')} resizeMode={'cover'} style={styles.rootScreen} imageStyle={{opacity: 0.3}}>
             <SafeAreaView style={styles.rootScreen}>
                 {!pickedNum ? (
                     <StartGameScreen handlePicked={pickedNumberHandler} />
                 ) : (
                     <GameScreen userNumber={pickedNum} />
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
