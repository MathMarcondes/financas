import { View, Text, StyleSheet } from 'react-native';
import Header from '../Header';

export default function Balance({saldo, despesas}) {
 return (
   <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Ganhos</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balanceCorrente}>{saldo}</Text>
            </View>
        </View>

        <View style={styles.item}>
            <Text style={styles.itemTitle}>Gastos</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balanceGastos}>{despesas}</Text>
            </View>
        </View>
        

   </View>
  );
}

const styles = StyleSheet.create({
    container:{ 
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99 //Vai ficar por cima de todos os outros
    },
    itemTitle:{
        fontSize: 20,
        color: '#dadada',
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol:{
        color: '#dadada',
        marginRight: 6,

    },
    balanceCorrente:{
        fontSize: 22,
        color: '#2ecc71',   
    },
    balanceGastos:{
        fontSize: 22,
        color: '#e74c3c'
    },
    item:{

    }
})