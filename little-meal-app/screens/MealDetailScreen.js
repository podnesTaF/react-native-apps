import {View, Text, Image, StyleSheet, ScrollView, Button} from "react-native";

import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import {useContext, useEffect, useLayoutEffect} from "react";
import IconButton from "../components/IconButton";
import {FavoritesContext} from "../store/context/favorites-context";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite, selectFavoriteIds} from "../store/redux/favoritesSlice";

const MealDetailScreen = ({route, navigation}) => {
    const id = route.params.mealId
    const meal = MEALS.find(meal => meal.id === id)
    const ids = useSelector(selectFavoriteIds)
    const dispatch = useDispatch()
    const mealIsFavorite = ids.includes(id)

    const onPress = () => {

        if (mealIsFavorite) {
            dispatch(removeFavorite(id))
        } else {
            dispatch(addFavorite(id))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
        headerRight: () => <IconButton color={'white'} icon={mealIsFavorite ? 'star' : 'star-outline'} onPress={onPress} />
        })
    }, [ id, navigation, onPress])

    return (
        <ScrollView style={styles.root}>
            <Image style={styles.image} source={{
                uri: meal.imageUrl,
            }} />
            <Text style={styles.title}>{meal.title}</Text>
            <MealDetails textStyle={styles.details} complexity={meal.complexity} affordability={meal.affordability} duration={meal.duration} />
            <View style={styles.wrapper}>
                <View style={styles.listContainer}>
                    <Subtitle name={'Ingredients'} />
                    <List list={meal.ingredients} />
                    <Subtitle name={'Steps'} />
                    <List list={meal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root:{
      marginBottom: 42
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    details: {
        color: 'white'
    },
    listContainer: {
        width: '80%',
        margin: 8,
    },
    wrapper: {
        alignItems: 'center',
    }
})

export default MealDetailScreen;