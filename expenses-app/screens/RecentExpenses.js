import {View, Text} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {ExpensesContext} from "../store/store";
import {useContext} from "react";
import {getDateMinusDays} from "../util/date";

const RecentExpenses = () => {
    const expensesCtx = useContext(ExpensesContext)

    const recentExpenses = expensesCtx.expenses.filter(expense => {
       return getDateMinusDays(expense.date, 7)
    })

    return (
        <ExpensesOutput expenses={recentExpenses} periodName={'Last 7 days'} />
    );
};

export default RecentExpenses;