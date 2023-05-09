import React, {useCallback, useState} from 'react';
import {ScrollView, Text, TextInput, View, StyleSheet} from "react-native";
import {Colors} from "../../constants/Colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import RegularButton from "../UI/RegularButton";
import {Place} from "../../models/place";

const PlaceForm = ({onCreatePlace}) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [selectedImage, setSelectedImage] = useState()
    const [selectedLocation, setSelectedLocation] = useState()

    const submitHandler = () => {
        const place = new Place(enteredTitle, selectedImage, selectedLocation)
        onCreatePlace(place)
    }

    const imageTakenHandler = useCallback((imagePath) => {
            setSelectedImage(imagePath)
        }, []
    );


    const locationPickedHandler = useCallback((location) => {
        setSelectedLocation(location)
    },[])

    const changeTitleHandler = (text) => {
        setEnteredTitle(text)
    }

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} onChangeText={(text) =>  setEnteredTitle(text)} value={enteredTitle} />
            </View>
            <ImagePicker onImageTaken={imageTakenHandler} />
            <LocationPicker onPickLocation={locationPickedHandler} />
            <RegularButton onPress={submitHandler}>Add Place</RegularButton>
        </ScrollView>
    );
};

export default PlaceForm;

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24
    },
    label: {
        marginBottom: 4,
        fontWeight: 'bold',
        color: Colors.primary200
    },
    input: {
        backgroundColor: Colors.primary100,
        paddingVertical: 8,
        paddingHorizontal: 4,
        marginVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
    }
})