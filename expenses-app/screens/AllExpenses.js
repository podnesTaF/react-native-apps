import {View,Text} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {useContext, useEffect} from "react";
import {ExpensesContext} from "../store/store";
import {fetchExpenses} from "../util/http";

const AllExpenses = () => {
    const expensesCtx = useContext(ExpensesContext)

    useEffect(() => {
        (async () => {
            const data = await fetchExpenses()
            if(data) {
                expensesCtx.setExpenses(data)
            }
        })()
    }, [])

    return (
        <ExpensesOutput expenses={expensesCtx.expenses} periodName={'All expenses'} />
    );
};

export default AllExpenses;