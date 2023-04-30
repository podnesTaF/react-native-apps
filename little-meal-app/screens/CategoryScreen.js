import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


const CategoryScreen = ({navigation}) => {


    const renderCategoryItem = (itemData) => {
        const onPress = () => {
            navigation.navigate('MealsOverview', {categoryId: itemData.item.id})
        }
        return <CategoryGridTile color={itemData.item.color} onPress={onPress} title={itemData.item.title} />
    }

    return (
       <FlatList
           data={CATEGORIES}
           renderItem={renderCategoryItem}
           keyExtractor={(item) => item.id}
           numColumns={2} />
    );
};

export default CategoryScreen;