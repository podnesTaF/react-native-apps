import axios from "axios";

export const storeExpense = async (expense) => {
    try {
        const {data} = await axios.post('https://expenses-74982-default-rtdb.europe-west1.firebasedatabase.app/expenses.json', expense)
        return data.name
    } catch (e) {
        console.log(e)
    }
}

export const fetchExpenses = async () => {
        const {data} = await axios.get('https://expenses-74982-default-rtdb.europe-west1.firebasedatabase.app/expenses.json')
        const expenses = []
        for (const key in data) {
            expenses.push({...data[key], id: key, date: data[key].date ? new Date(data[key].date) : new Date()})
        }
        return expenses
}

export const updateExpense = (id, expense) => {
    try {
        return axios.put(`https://expenses-74982-default-rtdb.europe-west1.firebasedatabase.app/expenses/${id}.json`, expense)
    } catch (e) {
        console.log(e)
    }
}

export const deleteExpense = (id) => {
    try {
        return axios.delete(`https://expenses-74982-default-rtdb.europe-west1.firebasedatabase.app/expenses/${id}.json`)
    } catch (e) {
        console.log(e)
    }
}