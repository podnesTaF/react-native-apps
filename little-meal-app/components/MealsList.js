import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "./MealItem";

const MealsList = ({meals}) => {

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

export default MealsList;