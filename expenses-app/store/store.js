import {createContext, useReducer} from "react";

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
});

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
    {
        id: 'e5',
        title: 'New Desk (Plastic)',
        amount: 240,
        date: new Date(2021, 5, 12),
    }
]

const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString()
            return [{...action.payload, id}, ...state];
        case 'REMOVE':
            return state.filter(expense => expense.id !== action.payload);
        case 'UPDATE':
            return state.map(expense => {
                if (expense.id === action.payload.id) {
                    return {...expense, ...action.payload.data};
                }
                return expense;
            });
        default:
            return state;
    }
}

const expensesContextProvider = ({children}) => {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

    const addExpense = (expenseData) => {
        dispatch({type: 'ADD', payload: expenseData})
    }

    const deleteExpense = (id) => {
        dispatch({type: 'REMOVE', payload: id})
    }

    const updateExpense = (id, expenseData) => {
        dispatch({type: 'UPDATE', payload: {id, data: expenseData}})
    }

    const value = {
        expenses: expensesState,
        addExpense,
        deleteExpense,
        updateExpense,
    }

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default  expensesContextProvider;