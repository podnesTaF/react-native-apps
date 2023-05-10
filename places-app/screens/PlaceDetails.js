import React, {useEffect, useState} from 'react';
import {Image, ScrollView, View, StyleSheet} from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import {Colors} from "../constants/Colors";
import {fetchPlace} from "../util/database";

const PlaceDetails = ({route, navigation}) => {
    const placeId = route.params.placeId;
    const [place, setPlace] = useState(null);

    useEffect(() => {
        (async () => {
            const place = await fetchPlace(placeId);
            setPlace(place);
            navigation.setOptions({
                title: place.title
            })
        })()
    }, [placeId]);


    const showOnMapHandler = () => {
        navigation.navigate('Map', {location: {lat: place.location.lat, lng: place.location.lng}})
    }


    if (!place) {
        return <View style={styles.fallback}>
            <Text>Loading...</Text>
        </View>;
    }

    return (
        <ScrollView>
            <Image source={{uri: place.imageUri}} style={styles.image} />
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address }>{place.address}</Text>
                </View>
                <OutlinedButton icon={'map'} onPress={showOnMapHandler}>View on map</OutlinedButton>
            </View>
        </ScrollView>
    );
};

export default PlaceDetails;

const styles = StyleSheet.create({
    fallback: {
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    },
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        height: '35%',
        minHeight: 300,
        width: '100%',
    },
    locationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressContainer: {
        padding: 20,
    },
    address: {
        color: Colors.primary500,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    }
})