import React from 'react';
import {
    View,
    Text,
    StyleSheet,
}from'react-native';

import {MotiView, MotiText} from 'moti'

export default function Balance() {
    return(
        <MotiView 
            style={styles.conteiner}
            from={{
                rotateX:'-360deg',
                opacity: 0
            }}
            animate={{
                rotateX: '0deg',
                opacity:1
            }}
            transition={{
                type:'timing',
                delay: 400,
                duration: 1000

            }}
        >

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.simbol}>R$</Text>
                    <Text style={styles.balance}>4000</Text>
                </View>
            </View>
            

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.simbol}>R$</Text>
                    <Text style={styles.expenses}>4000</Text>
                </View>
            </View>

        </MotiView>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 18,
        justifyContent: 'space-between',
        alignItems:'center',
        marginHorizontal: 14,
        marginTop: -24,
        borderRadius: 4,
        paddingVertical: 22,
        zIndex: 99,
        
    },

    itemTitle:{
        color: "#dadada",
        fontSize: 20,
    },

    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    simbol:{
        marginRight: 6,
        color: '#dadada'
    },

    balance:{
        color: '#2ecc71',
        fontSize: 22
    }, 

    expenses:{
        color: '#e74c3c',
        fontSize: 22
    }


})