import {Text, View, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: deviceWidth < 280 ? 12 : 24,
        margin: 24,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent,
        fontSize: 46,
        fontWeight: 'bold',
    }

})

export default NumberContainer;