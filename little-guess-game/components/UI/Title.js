import React from 'react';
import {Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        color: 'white',
        textAlign: 'center',
        borderColor: "white",
        borderWidth: Platform.OS === 'android' ? 2 : 0,
        padding: 12,
        maxWidth: '80%',
    }
})

export default Title;