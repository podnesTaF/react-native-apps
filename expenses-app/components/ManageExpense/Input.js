import React from 'react';
import {View, Text, TextInput, StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/styles";

const Input = ({label, config, style, isValid}) => {
    const inputStyles = [styles.input, !isValid && styles.invalidInput];

    if(config?.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, !isValid && styles.invalidLabel]}>{label}</Text>
            <TextInput style={[inputStyles]} {...config}  />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 8,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500,
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50,
    }})

export default Input;