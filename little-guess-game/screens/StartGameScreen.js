import {TextInput, View, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import {useState} from "react";
import Colors from "../constants/colors";

const StartGameScreen = ({handlePicked}) => {
    const [enteredValue, setEnteredValue] = useState('')

    const confirmInputHandler = () => {
        if(isNaN(+enteredValue) || enteredValue <= 0 || enteredValue > 99) {
            Alert.alert('Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{
                    text: 'Okay',
                    style: 'destructive',
                    onPress: () => setEnteredValue('')
                }])
        } else {
            handlePicked(+enteredValue)
            setEnteredValue('')
        }    }
    return (
        <View style={styles.inputContainer}>
              <TextInput onChangeText={(text) => setEnteredValue(text)}
                         value={enteredValue}
                         keyboardType={'number-pad'}
                         autoCapitalize={'none'}
                         autoCorrect={false}
                         style={styles.numberInput}
                         maxLength={2}
              />
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={() => setEnteredValue('')}>
                    Reset
                </PrimaryButton>
                <PrimaryButton onPress={confirmInputHandler}>
                    Confirm
                </PrimaryButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 10,
        marginTop: 100,
        backgroundColor: Colors.primary800,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 10,
        shadowOpacity: 0.5,
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: Colors.accent,
        borderBottomWidth: 2,
        color: Colors.accent,
        marginVertical: 8,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default StartGameScreen;