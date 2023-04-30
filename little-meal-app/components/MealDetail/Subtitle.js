import {Text, View, StyleSheet} from "react-native";

const Subtitle = ({name}) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>
                {name}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    subtitleContainer: {
        borderBottomColor: '#e2b497',
        borderBottomWidth: 1,
        margin: 6,
        padding: 6,
        marginHorizontal: 12,
    },
    subtitle: {
        fontSize: 18,
        color: '#e2b497',
        fontWeight: 'bold',
        textAlign: 'center',

    }
})

export default Subtitle;