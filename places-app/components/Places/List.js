import React from 'react';
import {FlatList, View, StyleSheet, Text} from "react-native";
import PlaceItem from "./PlaceItem";
import {Colors} from "../../constants/Colors";

const List = ({places}) => {
    if(!places?.length) {
        return (
            <View style={styles.fallback}>
                <Text style={styles.fallbackText}>No places found. Maybe add one?</Text>
            </View>
        );
    }
    return (
        <FlatList data={places} renderItem={({item}) => <PlaceItem place={item} />} keyExtractor={(item) => item.id } />
    );
};

export default List;

const styles = StyleSheet.create({
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