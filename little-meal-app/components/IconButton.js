import {Pressable, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const IconButton = ({icon, onPress, color}) => {
    return (
        <Pressable onPress={onPress} android_ripple={'#ccc'} style={({pressed}) => [pressed && styles.pressed]}>
            <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})

export default IconButton;