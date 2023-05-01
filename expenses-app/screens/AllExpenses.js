import {View,Text} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const AllExpenses = () => {
    return (
        <ExpensesOutput periodName={'All expenses'} />
    );
};

export default AllExpenses;