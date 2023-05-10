import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

const Map = ({route}) => {
    const navigation = useNavigation()
    const initialLocation = route.params && route.params.location
    const [location, setLocation] = useState(initialLocation)


    const region = {
        latitude: initialLocation ? initialLocation.lat : 37.78825,
        longitude: initialLocation ? initialLocation.lng : -122.4324,
        latitudeDelta: 0.0922, // zoom
        longitudeDelta: 0.0421, // zoom
    }

    const selectedLocationHandler = (e) => {
        if(initialLocation) return
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
        if(initialLocation) return
        navigation.setOptions({
            headerRight: ({tintColor}) => <IconButton icon={'save'} size={24} color={tintColor} onPress={savePickedLocationHandler} />
        })
    }, [navigation, savePickedLocationHandler, initialLocation])

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