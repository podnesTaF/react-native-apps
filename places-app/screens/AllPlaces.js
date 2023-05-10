import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import List from "../components/Places/List";
import {useIsFocused} from "@react-navigation/native";
import {fetchPlaces} from "../util/database";

const AllPlaces = ({route}) => {
    const [loadedPlaces, setLoadedPlaces] = useState([]);

    const isFocused = useIsFocused();


    useEffect(() => {
        if(isFocused) {
        (async () => {

               const places = await fetchPlaces();
                setLoadedPlaces(prevState =>[...places]);
        })()
        }
    }, [isFocused]);


    return (
        <List places={loadedPlaces} />
    );
};

export default AllPlaces;