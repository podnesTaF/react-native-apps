import {View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

const Card = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 10,
        marginTop: 100,
        backgroundColor: Colors.primary800,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 10,
        shadowOpacity: 0.5,
    },
})

export default Card;