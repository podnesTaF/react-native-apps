import {Text, View, StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/styles";

const ExpensesSummary = ({periodName, expenses}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.periodName}>
                {periodName}
            </Text>
            <Text style={styles.sum }>
                {expenses.reduce((acc, expense) => acc + expense.amount, 0).toFixed(2)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    periodName: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400,
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    }
});

export default ExpensesSummary;