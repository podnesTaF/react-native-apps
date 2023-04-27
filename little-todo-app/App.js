import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {StatusBar } from "expo-status-bar";

export default function App() {
  const [list, setList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onDelete = (id) => {
    setList(prev => prev.filter(i => i.id !== id))
  }

  const onAdd = (goal) => {
      if(goal.length > 0) {
          setList(prev => [...prev, {text: goal, id: Math.random().toString()}])
          setIsOpen(false)
      }
  }

  return (
   <>
       <StatusBar style={'light'} />
       <View style={styles.appContainer}>
           <Button title={'Add new goal '} color="#a065ec" onPress={() => setIsOpen(true)} />
           <GoalInput setIsOpen={setIsOpen} isOpen={isOpen} onAdd={onAdd} />
           <View style={styles.goalsContainer}>
               <FlatList alwaysBounceVertical={false} data={list} renderItem={({item}) => <GoalItem onDelete={onDelete} item={item} />} keyExtractor={(item) => item.id}/>
           </View>
       </View>
   </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }
});
