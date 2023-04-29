import {Text, View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({roundNumber, guess}) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponents Guess: {guess}</Text>
        </View>
    );
};

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        padding: 12,
        borderRadius: 10,
        marginVertical: 8,
        backgroundColor: Colors.accent,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 10,
        shadowOpacity: 0.5,
    },
    itemText: {
        fontFamily: 'open-sans',
    }
})