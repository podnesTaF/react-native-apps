import {FlatList, Text} from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderItem = ({item}) => {
    return (
        <ExpenseItem amount={item.amount} date={item.date} description={item.title} id={item.id} />
    );
}
const ExpensesList = ({expenses}) => {
    return (
        <FlatList data={expenses} renderItem={renderItem} keyExtractor={(item) => item.id } />
    );
};

export default ExpensesList;