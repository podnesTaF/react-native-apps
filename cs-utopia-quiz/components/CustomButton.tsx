import React from 'react';
import {Pressable, View, StyleSheet, Text} from 'react-native';

interface CustomButtonProps {
    onPress?: () => void;
    children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({onPress, children}) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#2196F3',
        borderRadius: 5,
    },
    text: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 18
    }
})

export default CustomButton;