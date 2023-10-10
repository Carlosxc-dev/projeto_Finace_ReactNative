import { StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    ScrollView, 
    ScrollViewComponent
} from 'react-native'
import React from 'react'

import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <ScrollView style={styles.conteiner} horizontal={true} showsVerticalScrollIndicator={false} >

        <TouchableOpacity style={styles.buttonAction}>
            <View style={styles.areaButton}>
                <AntDesign name='addfolder' size={26} color='#000'/>
                <Text style={styles.labelButton}>Contas</Text>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonAction}>
            <View style={styles.areaButton}>
                <AntDesign name='tagso' size={26} color='#000'/>
                <Text style={styles.labelButton}>Contas</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonAction}>
            <View style={styles.areaButton}>
                <AntDesign name='creditcard' size={26} color='#000'/>
                <Text style={styles.labelButton}>Contas</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonAction}>
            <View style={styles.areaButton}>
                <AntDesign name='barcode' size={26} color='#000'/>
                <Text style={styles.labelButton}>Contas</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonAction}>
            <View style={styles.areaButton}>
                <AntDesign name='setting' size={26} color='#000'/>
                <Text style={styles.labelButton}>Contas</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

    conteiner:{
        height: 24,
        marginBottom: 14,
        marginTop: 18,
        paddingHorizontal: 14,
    },

    buttonAction:{
        alignItems: 'center',
        marginRight: 32,
    },

    areaButton:{
        backgroundColor: '#ecf0f1',
        height: 62,
        width: 62,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 62/2,
    },

    labelButton:{
        marginTop:4,
        textAlign:'center',
        fontWeight:'bold'
    }
})