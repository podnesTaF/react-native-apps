import React from 'react';
import {FlatList, Text, View, StyleSheet} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import {GlobalStyles} from "../../constants/styles";



const ExpensesOutput = ({expenses, periodName}) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={periodName} />
            {expenses.length > 0 ?
                <ExpensesList expenses={expenses} /> :
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: GlobalStyles.colors.primary200}}>No expenses yet</Text>
                    </View>

            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
})

export default ExpensesOutput;