import {Ionicons} from "@expo/vector-icons";
import {Pressable, View, StyleSheet} from "react-native";
const IconButton = ({name, size, color, onPress}) => {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [pressed && styles.pressed]}>
            <View style={styles.container}>
                <Ionicons name={name} size={size} color={color} />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2,
    },
    pressed: {
        opacity: 0.75,
    }
})

export default IconButton;