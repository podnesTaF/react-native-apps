import {Text, View, StyleSheet, Pressable, Image, Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({title, imageUrl, duration, complexity, affordability, mealId}) => {
    const navigation = useNavigation()

    const navigate = () => {
        navigation.navigate('MealDetail', {
            mealId
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable onPress={navigate} android_ripple={'#ccc'} style={({pressed}) => [pressed && styles.buttonPressed]}>
               <View style={styles.innerContainer}>
                   <View>
                       <Image source={{
                           uri: imageUrl

                       }} style={styles.image}/>
                       <Text style={styles.title}>
                           {title}
                       </Text>
                   </View>
                   <MealDetails complexity={complexity} affordability={affordability} duration={duration} />
               </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 10,
        elevation: 4,
        shadowRadius: 4,
        backgroundColor: 'white',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowColor: 'black',
        overflow: Platform.OS === 'ios' ? 'auto' : 'hidden',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5,
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        margin: 8,
    },
});

export default MealItem;