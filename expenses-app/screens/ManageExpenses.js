import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {Text, View, StyleSheet, TextInput} from "react-native";
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from "../constants/styles";
import CustomButton from "../components/UI/CustomButton";
import {ExpensesContext} from "../store/store";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import axios from "axios";
import {deleteExpense, storeExpense, updateExpense} from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const ManageExpenses = ({route, navigation}) => {
    const id = route.params?.expenseId;
    const [isFetching, setIsFetching] = useState(false)
    const isEdit = !!id;
    const expensesCtx = useContext(ExpensesContext)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: isEdit ? 'Edit Expense' : 'Add Expense',
        })
    }, [navigation, isEdit  ])

    const deleteExpense = async () => {
        expensesCtx.deleteExpense(id)
        setIsFetching(true)
        await deleteExpense(id)
        setIsFetching(false)
        navigation.goBack()
    }

    const cancelHandler = () => {
        navigation.goBack()
    }

    const confirmHandler = async (data) => {
        if(isEdit) {
            expensesCtx.updateExpense(id, data)
            setIsFetching(true)
            await updateExpense(id, data)
            setIsFetching(false)
        } else {
            setIsFetching(true)
            const expenseId = await storeExpense(data)
            setIsFetching(false)
            expensesCtx.addExpense({...data, id: expenseId})
        }
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            {isFetching ? <LoadingOverlay /> : (
                <>
                    <ExpenseForm onCancel={cancelHandler} submitBtnLabel={isEdit ? 'Update' : 'Add'} oldValues={expensesCtx.expenses?.find(v => v.id === id)} onSubmit={confirmHandler} />
                    {isEdit && (
                        <View style={styles.deleteButton}>
                            <IconButton name={'trash'} size={36} color={GlobalStyles.colors.error500} onPress={deleteExpense} />
                        </View>
                    )}
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    deleteButton: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    }
})

export default ManageExpenses;