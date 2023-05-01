import {View, Text, StyleSheet} from "react-native";
import MealsList from "../components/MealsList";
import {useContext} from "react";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";
import {useSelector} from "react-redux";
import {selectFavoriteIds} from "../store/redux/favoritesSlice";

const FavoritesScreen = () => {
    const ids = useSelector(selectFavoriteIds)

    const favoriteMeals = MEALS.filter(m => ids.includes(m.id))

    if(favoriteMeals.length === 0 || !favoriteMeals) {
        return (
            <View style={styles.root}>
                <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
            </View>
        )
    }

    return (
      <MealsList meals={favoriteMeals} />
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default FavoritesScreen;