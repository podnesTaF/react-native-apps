import React from 'react';
import {Pressable, Text, StyleSheet} from "react-native";
import {Colors} from "../../constants/Colors";

const RegularButton = ({onPress, children}) => {
    return (
        <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
            <Text style={styles.text}>{
                children
            }</Text>
        </Pressable>
    );
};

export default RegularButton;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        margin: 4,
        borderRadius: 5,
        backgroundColor: Colors.primary800,
        elevation: 3,
        shadowColor: "black",
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.16,
        shadowRadius: 4,
    },
    pressed: {
        opacity: 0.8
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: Colors.primary50
    }
})