import {Text, View, StyleSheet, FlatList} from "react-native";
import {MEALS, CATEGORIES} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect} from "react";

const MealsOverviewScreen = ({route, navigation}) => {
    const id = route.params.categoryId
    const meals = MEALS.filter(meal => meal.categoryIds.includes(id))




    useLayoutEffect(() => {
        const title = CATEGORIES.find(category => category.id === id).title
        navigation.setOptions({
            title
        })
    }, [id, navigation])
    const renderMealItem = (itemData) => {
        const item = itemData.item
        const mealsItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            mealId: item.id
        }
        return <MealItem {...mealsItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList data={meals} renderItem={renderMealItem} keyExtractor={(item) => item.id}  />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

