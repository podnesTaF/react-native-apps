import {Text, View, StyleSheet} from "react-native";

const List = ({list}) => {
    return (
        list.map(item => (
            <View style={styles.item} key={item}>
                <Text style={styles.text}>{item}</Text>
            </View>
        ))
    );
};

const styles = StyleSheet.create({
    item: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    text: {
        textAlign: 'center',
        color: '#391404',
    }
})

export default List;