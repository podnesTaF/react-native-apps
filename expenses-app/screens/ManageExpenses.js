import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Text, View, StyleSheet} from "react-native";
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from "../constants/styles";
import CustomButton from "../components/UI/CustomButton";

const ManageExpenses = ({route, navigation}) => {
    const id = route.params?.expenseId;
    const isEdit = !!id;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: isEdit ? 'Edit Expense' : 'Add Expense',
        })
    }, [navigation, isEdit  ])

    const deleteExpense = () => {

    }

    const cancelHandler = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <CustomButton style={styles.button} mode={'flat'} onPress={cancelHandler}>Cancel</CustomButton>
                <CustomButton style={styles.button} >{isEdit ? 'Update' : 'Add'}</CustomButton>
            </View>
            {isEdit && (
                <View style={styles.deleteButton}>
                    <IconButton name={'trash'} size={36} color={GlobalStyles.colors.error500} onPress={deleteExpense} />
                </View>
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
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