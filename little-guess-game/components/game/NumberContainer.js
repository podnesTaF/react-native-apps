import {Text, View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 24,
        margin: 24,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent,
        fontSize: 46,
        fontWeight: 'bold',
    }

})

export default NumberContainer;