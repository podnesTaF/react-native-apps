import React from 'react';
import {Pressable, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const IconButton = ({icon, size, color,onPress}) => {
    return (
        <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed ]} onPress={onPress}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressed: {
        opacity: 0.8
    }
})