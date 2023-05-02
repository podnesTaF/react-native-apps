import {View,Text} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {useContext} from "react";
import {ExpensesContext} from "../store/store";

const AllExpenses = () => {
   const expensesCtx =  useContext(ExpensesContext)
    return (
        <ExpensesOutput expenses={expensesCtx.expenses} periodName={'All expenses'} />
    );
};

export default AllExpenses;