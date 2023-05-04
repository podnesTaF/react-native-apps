import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../../constants/styles";
import CustomButton from "./CustomButton";

const ErrorOverlay = ({message, onConfirm}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An error occurred</Text>
            <Text style={[styles.text, styles.message]}>{message}</Text>
            <CustomButton onPress={onConfirm}>Okay</CustomButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    title: {
      fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        margin: 8
    },
    message: {
        fontSize: 14,
    }
})

export default ErrorOverlay;