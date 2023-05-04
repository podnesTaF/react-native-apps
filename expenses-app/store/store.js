import {createContext, useReducer} from "react";

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
    setExpenses: (expenses) => {},
});

const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [action.payload ,...state];
        case 'REMOVE':
            return state.filter(expense => expense.id !== action.payload);
        case 'UPDATE':
            return state.map(expense => {
                if (expense.id === action.payload.id) {
                    return {...expense, ...action.payload.data};
                }
                return expense;
            });
            case 'SET':
                return action.payload.reverse();
        default:
            return state;
    }
}

const expensesContextProvider = ({children}) => {
    const [expensesState, dispatch] = useReducer(expensesReducer,[])

    const addExpense = (expenseData) => {
        dispatch({type: 'ADD', payload: expenseData})
    }

    const deleteExpense = (id) => {
        dispatch({type: 'REMOVE', payload: id})
    }

    const updateExpense = (id, expenseData) => {
        dispatch({type: 'UPDATE', payload: {id, data: expenseData}})
    }

    const setExpenses = (expenses) => {
        dispatch({type: 'SET', payload: expenses})
    }

    const value = {
        expenses: expensesState,
        addExpense,
        deleteExpense,
        updateExpense,
        setExpenses
    }

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default  expensesContextProvider;