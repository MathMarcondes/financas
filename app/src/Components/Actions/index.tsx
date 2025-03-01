import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>

   </ScrollView>
  );
}


const styles = StyleSheet.create({
        container:{
            maxHeight: 84,
            marginBottom: 14,
            marginTop: 18,
            paddingEnd: 14,
            paddingStart: 14
        },
        actionButton:{
            alignItems: 'center'
        },
        areaButton:{
            paddingStart: 10,
            paddingEnd: 10,
        },
        labelConta:{
            fontWeight: 'bold',
            fontSize: 14
        },
        labelButton:{

        }

})