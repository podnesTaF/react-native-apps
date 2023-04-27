import {Pressable, StyleSheet, Text, View} from "react-native";

const GoalItem = ({item, onDelete}) => {
    return (

           <View style={styles.goalItem}>
               <Pressable android_ripple={'#ccc'} onPress={() => onDelete(item.id)} style={({pressed}) => pressed && styles.pressedItem}>
               <Text style={styles.goalText}>
                   {item.text}
               </Text>
               </Pressable>
           </View>

    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#5e0acc'
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})

export default GoalItem;