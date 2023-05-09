import {View, StyleSheet, Alert, Image, Text} from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import {Colors} from "../../constants/Colors";
import {getCurrentPositionAsync, useForegroundPermissions, PermissionStatus} from "expo-location";
import {useCallback, useEffect, useState} from "react";
import {getAddress, getMapPreview} from "../../util/location";
import {useNavigation, useRoute, useIsFocused} from "@react-navigation/native";


const LocationPicker = ({onPickLocation}) => {
    const [locationPermission, requestPermission] = useForegroundPermissions()
    const [pickedLocation, setPickedLocation] = useState()
    const navigation = useNavigation()
    const route = useRoute()
    const isFocused = useIsFocused()

    useEffect(() => {
        if(isFocused && route.params) {
            const mapPickedLocation = {
                    lat: route.params.lat,
                    lng: route.params.lng,
                }
            setPickedLocation(mapPickedLocation)
        }
    }, [route, isFocused]);

    useEffect(() => {
        (async () => {
            if(pickedLocation) {
                const address = await getAddress(pickedLocation.lat, pickedLocation.lng)
                onPickLocation({...pickedLocation, address})
            }
        })()
    }, [pickedLocation, onPickLocation]);


    const verifyPermissions = async () => {
        if(locationPermission.status === PermissionStatus.UNDETERMINED) {
            const result = await requestPermission()
            return result.status === PermissionStatus.GRANTED
        }
        if(locationPermission.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient permissions!', 'You need to grant location permissions to use this app.', [{text: 'Okay'}])
            return false
        }
        return true
    }

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions()

        if(!hasPermission) {
            return
        }
        const location = await getCurrentPositionAsync()
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
    }

    const pickOnMapHandler = () => {
        navigation.navigate('Map')
    }


    let locationPreview = <Text>No location chosen</Text>

    if(pickedLocation) {
        locationPreview = <Image style={styles.mapPreviewImage} source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)}} />
    }

    return (
        <View>
            <View style={styles.mapPreview}>
                {locationPreview}
            </View>
            <View style={styles.actions}>
                <OutlinedButton onPress={getLocationHandler} icon={'location'}>
                    Locate User
                </OutlinedButton>
                <OutlinedButton onPress={pickOnMapHandler} icon={'location'}>
                  Pick on Map
                </OutlinedButton>
            </View>
        </View>
    )
 }

 export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview: {
        marginVertical: 8,
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 5,
        overflow: 'hidden'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center'
    },
    mapPreviewImage: {
        width: '100%',
        height: '100%',
        borderRadius: 5,

    }
})