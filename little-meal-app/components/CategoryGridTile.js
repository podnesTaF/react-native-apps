import {Pressable, View, Text, StyleSheet, Platform} from "react-native";

const CategoryGridTile = ({title, color, onPress}) => {
    return (
        <View style={styles.gridItem}>
            <Pressable onPress={onPress} android_ripple={'#ccc'} style={({pressed}) => [styles.buttonStyle, pressed && styles.buttonPressed, {backgroundColor: color}]}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowRadius: 4,
        backgroundColor: 'white',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowColor: 'black',
        overflow: Platform.OS === 'ios' ? 'auto' : 'hidden',
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonStyle: {
        flex: 1,
        borderRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})