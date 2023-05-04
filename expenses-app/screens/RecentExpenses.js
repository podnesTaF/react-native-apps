import {View, Text} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {ExpensesContext} from "../store/store";
import {useContext, useEffect, useState} from "react";
import {getDateMinusDays} from "../util/date";
import {fetchExpenses} from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpenses = () => {
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()
    const expensesCtx = useContext(ExpensesContext)
    const recentExpenses = expensesCtx.expenses.filter(expense => {
       return getDateMinusDays(expense.date, 7)
    })

    useEffect(() => {
        (async () => {
            setIsFetching(true)
           try {
               const data = await fetchExpenses()
               if(data) {
                   expensesCtx.setExpenses(data)
               }
           } catch (e) {
                setError('Could not fetch expenses')
           }
            setIsFetching(false)
        })()
    }, [])

    const errorHandler = () => {
        setError(null)
    }

    if(error && !isFetching) {
        return <ErrorOverlay message={error} onConfirm={errorHandler} />
    }

    if(isFetching) {
        return <LoadingOverlay />
    }

    return (
        <ExpensesOutput expenses={recentExpenses} periodName={'Last 7 days'} />
    );
};

export default RecentExpenses;