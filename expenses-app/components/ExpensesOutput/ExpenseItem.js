import {Pressable, Text, View, StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/styles";
import {getFormattedDate} from "../../util/date";
import {useNavigation} from "@react-navigation/native";

const ExpenseItem = ({description, amount, date, id}) => {
    const navigation = useNavigation();
    const expensePressHandler = () => {
        navigation.navigate('ManageExpense', {expenseId: id});
    }

    return (
        <Pressable onPress={expensePressHandler} style={({pressed}) => [pressed && styles.pressed]}>
            <View style={styles.item}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
               <View style={styles.amountContainer}>
                   <Text style={styles.amount}>{amount.toFixed(2)}</Text>
               </View>
            </View>
        </Pressable>
    );
};

export default ExpenseItem;

const styles = StyleSheet.create({
    pressed: {
      opacity: 0.75,
    },
     item: {
         flexDirection: 'row',
         justifyContent: 'space-between',
         padding: 12,
         marginVertical: 8,
         backgroundColor: GlobalStyles.colors.primary500,
         elevation: 3,
         shadowColor: GlobalStyles.colors.gray500,
         shadowOffset: {width: 2, height: 2},
         shadowOpacity: 0.25,
     },
    textBase: {
         color: GlobalStyles.colors.primary50,
    },
    description: {
            fontSize: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    },
    amountContainer: {
         paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80,
    },
    amount: {
            color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    }
});