import {Button, TextInput, View, StyleSheet, Modal, Image} from "react-native";
import {useState} from "react";

const GoalInput = ({onAdd, isOpen, setIsOpen}) => {
    const [text, setText] = useState('')

    const goalInputHandler = (text) => {
        setText(text)
    }

    const addGoalHandler = () => {
        onAdd(text)
        setText('')
    }

    return (
       <Modal  visible={isOpen} animationType={'slide'}>
           <View style={styles.inputContainer}>
               <Image style={styles.image} source={
                   require('../assets/images/goal.png')
               }/>
               <TextInput style={styles.textInput} value={text} placeholder={'your course goal!'} onChangeText={goalInputHandler} />
               <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                      <Button onPress={() => setIsOpen(false)} title={"Cancel"} color={'#f31282'} />
                  </View>
                   <View style={styles.button}>
                       <Button onPress={addGoalHandler} title={'Add goal'} color={'#5e0acc'} />
                   </View>
               </View>
           </View>
       </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '40%',
        marginHorizontal: 8,
    },
    textInput: {
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderWidth: 1,
        width: "100%",
        marginRight: 10,
        padding: 10,
        borderRadius: 8,
        color: '#210438'
    },
})

export default GoalInput;