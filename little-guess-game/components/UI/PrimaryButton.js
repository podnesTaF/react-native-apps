import {View, Text, Pressable, StyleSheet} from "react-native";

import Colors from "../../constants/colors";

const PrimaryButton = ({children, onPress}) => {
    return (
        <View style={styles.buttonOuter}>
        <Pressable style={({pressed}) => [styles.buttonInner, pressed && styles.pressed]} android_ripple={{color: Colors.primary600}} onPress={onPress}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
        </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonOuter: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
        width: '48%',
    },
    buttonInner: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    pressed: {
        opacity: 0.75,
    }
})

export default PrimaryButton;