import React, {useCallback, useLayoutEffect, useState} from 'react';
import {Alert, StyleSheet} from "react-native";
import MapView, {Marker} from "react-native-maps";
import {useNavigation} from "@react-navigation/native";
import IconButton from "../components/UI/IconButton";

const Map = () => {
    const navigation = useNavigation()
    const [location, setLocation] = useState()
    const region = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922, // zoom
        longitudeDelta: 0.0421, // zoom
    }

    const selectedLocationHandler = (e) => {
        const lat = e.nativeEvent.coordinate.latitude
        const lng = e.nativeEvent.coordinate.longitude
        setLocation({
            lat,
            lng
        })
    }

    const savePickedLocationHandler  = useCallback(() => {
            if(!location) {
                Alert.alert('No location chosen', 'Please pick a location on the map', [{text: 'Okay'}])
                return
            }
            navigation.navigate('AddPlace', {...location})
            }, [location, navigation])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({tintColor}) => <IconButton icon={'save'} size={24} color={tintColor} onPress={savePickedLocationHandler} />
        })
    }, [navigation, savePickedLocationHandler])

    return (
        <MapView
            style={styles.map}
            initialRegion={region}
            onPress={selectedLocationHandler}
        >
            {location && (
                <Marker coordinate={{latitude: location.lat, longitude: location.lng}} />
            )}
        </MapView>
    );
};

export default Map;

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})