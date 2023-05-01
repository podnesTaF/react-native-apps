import {Text, View, StyleSheet, FlatList} from "react-native";
import {MEALS, CATEGORIES} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect} from "react";
import MealsList from "../components/MealsList";

const MealsOverviewScreen = ({route, navigation}) => {
    const id = route.params.categoryId
    const meals = MEALS.filter(meal => meal.categoryIds.includes(id))




    useLayoutEffect(() => {
        const title = CATEGORIES.find(category => category.id === id).title
        navigation.setOptions({
            title
        })
    }, [id, navigation])


    return (
        <MealsList meals={meals} />
    );
};

export default MealsOverviewScreen;

