import React from 'react';
import {Text, View, Image, StyleSheet, useWindowDimensions, ScrollView} from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

const GameOverScreen = ({roundsNumber, userNumber, startNewGame }) => {
    const {height, width} = useWindowDimensions()

    let imageSize = 300;

    if(width < 380) {
        imageSize = 150
    }

    if(height < 500) {
        imageSize = 80
    }

    const imageStyles = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }

    return (
        <ScrollView style={styles.rootScreen}>
            <View style={styles.screen}>
                <Title>Game Over!</Title>
                <View style={[styles.imageContainer, imageStyles]}>
                    <Image style={styles.image} source={require('../assets/success.png')} />
                </View >
                <View style={styles.summaryContainer}>
                    <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
                </View>
                <PrimaryButton onPress={startNewGame}>Start new Game</PrimaryButton>
            </View>
        </ScrollView>
    );
};

export default GameOverScreen;


const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
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
        height: '100%',
    },
    summaryContainer: {
        margin: 24,
    },
    summaryText: {
        textAlign: 'center',
        fontFamily: 'open-sans',
        fontSize: 24,
    },
    highlight: {
        color: Colors.primary500,
        fontFamily: 'open-sans-bold',
    }
})