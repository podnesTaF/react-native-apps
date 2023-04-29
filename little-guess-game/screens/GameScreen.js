import {Text, View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import Title from "../components/UI/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import {Ionicons} from "@expo/vector-icons";
import InstructionText from "../components/UI/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

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

const GameScreen = ({userNumber, gameOverHandler, addRound}) => {
    const initGuess = generateRandomBetween(1,100 , userNumber)
    const [guess, setGuess] = useState(initGuess)
    const [rounds, setRounds] = useState([])

    const {height, width} = useWindowDimensions()

    const guessHandler = (direction) => {
        addRound()
        if((direction === 'lower' && guess < userNumber) || (direction === 'greater' && guess > userNumber)) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}])
            return
        }

        if(direction === 'lower') {
            max = guess
        } else {
            min = guess + 1
        }

        const currGuess = generateRandomBetween(min, max, guess)
        setGuess(currGuess)
    }

    useEffect(() => {
        setRounds((prev) => [...prev, guess])
    }, [guess])

    useEffect(() => {
        if(guess === userNumber) {
            min = 1
            max= 100
            gameOverHandler()
        }
    }, [guess, userNumber, gameOverHandler])

    let content = (
        <>
            <NumberContainer>{guess}</NumberContainer>
            <Card>
                <InstructionText>Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={guessHandler.bind(this, 'lower')}><Ionicons name={'md-remove'} size={24} color={'white'} /></PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={guessHandler.bind(this, 'greater')}><Ionicons name={'md-add'} size={24} color={'white'} /></PrimaryButton>
                    </View>
                </View>
            </Card>
         </>
    )

    if(width > 500) {
        content = (
          <>
              <View style={styles.buttonsContainerWide}>
                  <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={guessHandler.bind(this, 'lower')}><Ionicons name={'md-remove'} size={24} color={'white'} /></PrimaryButton>
                  </View>
              <NumberContainer>{guess}</NumberContainer>
                  <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={guessHandler.bind(this, 'greater')}><Ionicons name={'md-add'} size={24} color={'white'} /></PrimaryButton>
                  </View>
              </View>
          </>
        )
    }

    return (
        <View style={styles.screen}>
            <Title>Opponents guess</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList data={rounds} renderItem={({item, index}) => (
                    <GuessLogItem guess={item} roundNumber={index + 1} />
                )}
                keyExtractor={(item) => item.toString()}
                />
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
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listContainer: {
        flex: 1,
        padding: 12,
    }
})

export default GameScreen;