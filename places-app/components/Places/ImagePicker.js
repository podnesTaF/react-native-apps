import React, {useEffect, useState} from 'react';
import {Alert, Button, Image, Text, View, StyleSheet} from "react-native";
import {launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";
import {Colors} from "../../constants/Colors";
import OutlinedButton from "../UI/OutlinedButton";

const ImagePicker = ({onImageTaken}) => {

    const [cameraPermission, requestPermission] = useCameraPermissions()
    const [image, setImage] = useState(null)


    const verifyPermissions = async () => {
        if(cameraPermission.status === PermissionStatus.UNDETERMINED) {
            const result = await requestPermission()
            return result.status === PermissionStatus.GRANTED
        }
        if(cameraPermission.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient permissions!', 'You need to grant camera permissions to use this app.', [{text: 'Okay'}])
            return false
        }
        return true
    }

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermissions()
        if(!hasPermission) {
                return
        }
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.5
        })
        setImage(image)
    }

    useEffect(() => {
        if(image?.uri) {
            onImageTaken(image)
        }
    }, [image, onImageTaken]);


    let imagePreview = <Text>Image have not taken yet.</Text>

    if(image?.uri) {
        imagePreview = <Image style={styles.image} source={{uri: image.uri}} />
    }

    return (
        <View>
             <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <OutlinedButton icon={'camera'} onPress={takeImageHandler}>
                Take Image
            </OutlinedButton>
        </View>
    );
};

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 5,
    },
    image: {
        width: '100%',
        height: '100%',
    }
})