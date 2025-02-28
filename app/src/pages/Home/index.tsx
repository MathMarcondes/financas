import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../Components/Header";
import Balance from "../../Components/Balance";
import Movements from "../../Components/Movements";
import Actions from "../../Components/Actions";

const list = [
    {
        id: 1,
        label:'Luz',
        value:'30,90',
        date:'17/02/2025',
        type:0 // despesas
    },
    {
        id: 2,
        label:'Água',
        value:'50,90',
        date:'17/02/2025',
        type:0 // despesas
    },
    {
        id: 3,
        label:'Internet',
        value:'100,90',
        date:'17/02/2025',
        type:0 // despesas
    },
    {
        id: 4,
        label:'Amélia/Conserto PC',
        value:'300,90',
        date:'17/02/2025',
        type:1 // receitas
    },
    {
        id: 5,
        label:'Tony / Formatação',
        value:'250,00',
        date:'10/02/2025',
        type:1 // receitas
    },
]

export default function Home() {
  return (
    <View>
      <Header name="Matheus Marcondes"/>
      <Balance saldo="10.000.000,00" despesas="200.000"/>
      <Actions/>
      <Text style={styles.Title}>Ultimas transações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Movements data={item}/> }
      />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fafafa',
    },
    list:{
        marginStart: 14,
        marginEnd: 14
    },
    Title:{
        fontSize: 19,
        fontWeight: 'bold',
    },
    

})


