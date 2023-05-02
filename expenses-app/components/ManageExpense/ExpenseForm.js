import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from "react-native";
import Input from "./Input";
import CustomButton from "../UI/CustomButton";
import {getFormattedDate} from "../../util/date";
import {GlobalStyles} from "../../constants/styles";

const ExpenseForm = ({onCancel, onSubmit, submitBtnLabel, oldValues}) => {
    const [inputs, setInputs] = useState({
        amount: {value: oldValues?.amount ?  oldValues?.amount + '' : '', isValid: true},
        date: {value: oldValues?.date ? getFormattedDate(oldValues?.date) : '', isValid: true},
        title: {value: oldValues?.title ? oldValues?.title : '', isValid: true}
    })

    const inputChangedHandler = (id, enteredValue) => {
        setInputs(prevState => {
           return {
           ...prevState,
               [id]: {value: enteredValue, isValid: true}
           }
       })
    }

    const confirmHandler = () => {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            title: inputs.title.value
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
        const dateIsValid = !isNaN(expenseData.date.getTime())
        const titleIsValid = expenseData.title.trim().length > 0

        if(!amountIsValid || !dateIsValid || !titleIsValid) {
            setInputs((prevState) => {
                return {
                    amount: {value: prevState.amount.value, isValid: amountIsValid},
                    date: {value: prevState.date.value, isValid: dateIsValid},
                    title: {value: prevState.title.value, isValid: titleIsValid},
                }
            })
            // Alert.alert('Invalid input', 'Please check the values you entered', [{text: 'Okay'}])
            return
        }

        onSubmit(expenseData)
    }

    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.title.isValid

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your expense</Text>
            <View style={styles.inputsRow}>
                <Input style={styles.rowInput} label={'amount'} isValid={inputs.amount.isValid} config={{keyboardType: 'decimal-pad', onChangeText: inputChangedHandler.bind(this, 'amount'), value: inputs.amount.value}}  />
                <Input style={styles.rowInput} label={'Date'}  isValid={inputs.date.isValid} config={{placeholder: 'YYYY-MM-DD',maxLength: 10, onChangeText: inputChangedHandler.bind(this, 'date'), value: inputs.date.value}} />
            </View>
            <Input label={'title'} isValid={inputs.title.isValid} config={{ onChangeText: inputChangedHandler.bind(this, 'title'), multiline: true, value: inputs.title.value}} />
            {formIsInvalid && <Text style={{color: GlobalStyles.colors.error500, textAlign: 'center', margin: 8}}>Please check the values you entered</Text>}
            <View style={styles.buttons}>
                <CustomButton style={styles.button} mode={'flat'} onPress={onCancel}>Cancel</CustomButton>
                <CustomButton style={styles.button} onPress={confirmHandler} >{submitBtnLabel}</CustomButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: 24,
        textAlign: 'center'
    },
    rowInput:{
        flex: 1,
    },
    form: {
        marginTop: 0,
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
})
export default ExpenseForm;