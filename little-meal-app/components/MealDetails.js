import {StyleSheet, Text, View} from "react-native";

const MealDetails = ({duration, complexity, affordability, style, textStyle}) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detail, textStyle]}>{duration}</Text>
            <Text style={[styles.detail, textStyle]}>{complexity}</Text>
            <Text style={[styles.detail, textStyle]}>{affordability}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detail: {
        marginHorizontal: 4,
        fontSize: 12
    }
})

export default MealDetails;