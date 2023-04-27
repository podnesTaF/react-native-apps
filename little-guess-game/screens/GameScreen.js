import {Text, View, StyleSheet, Alert} from "react-native";
import Title from "../components/UI/Title";
import {useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}


let min = 1;
let max = 100;

const GameScreen = ({userNumber}) => {
    const initGuess = generateRandomBetween(min,max, userNumber)
    const [guess, setGuess] = useState(initGuess)


    const guessHandler = (direction) => {
        if((direction === 'lower' && guess < userNumber) || (direction === 'greater' && guess > userNumber)) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}])
            return
        }
        if(direction === 'lower') {
            max = guess
        } else {
            min = guess + 1
        }

        setGuess(generateRandomBetween(min, max, guess))
    }

    return (
        <View style={styles.screen}>
            <Title>Opponents guess</Title>
            <NumberContainer>{guess}</NumberContainer>
            <View>
                <Text>Higher or Lower</Text>
                <View style={styles.btnActions}>
                    <PrimaryButton onPress={guessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={guessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
    },
    btnActions: {
        flexDirection: 'row',
        marginTop: 24,
    }
})

export default GameScreen;