import React from 'react';
import {FlatList, View, StyleSheet, Text} from "react-native";
import PlaceItem from "./PlaceItem";
import {Colors} from "../../constants/Colors";
import {useNavigation} from "@react-navigation/native";

const List = ({places}) => {

    const navigation = useNavigation()

    const selectPlaceHandler = (id) => {
        navigation.navigate('PlaceDetails', {placeId: id})
    }

    if(!places?.length) {
        return (
            <View style={styles.fallback}>
                <Text style={styles.fallbackText}>No places found. Maybe add one?</Text>
            </View>
        );
    }
    return (
        <FlatList style={styles.list} data={places} renderItem={({item}) => <PlaceItem place={item} onSelect={selectPlaceHandler} />} keyExtractor={(item) => item.id } />
    );
};

export default List;

const styles = StyleSheet.create({
    list: {
        margin: 24,
    },
    fallback: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fallbackText: {
        fontSize: 18,
        color: Colors.primary200
    }
})