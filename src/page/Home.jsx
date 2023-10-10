import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import Header from "../components/header/Header";
import Balance from "../components/balance/Balance";
import Actions from "../components/actions/Actions";
import Moviments from "../components/moviments/Moviments";

const list = [
    {
        id: 1,
        label: 'Boletos conta luz',
        value: '200,00',
        date: '11/12/2022',
        type: 1 
    },
    {
        id: 2,
        label: 'Pix client x',
        value: '200,00',
        date: '11/12/2022',
        type: 1 
    },
    {
        id: 3,
        label: 'Pix client x',
        value: '200,00',
        date: '11/12/2022',
        type: 0 //despesas
    },
    {
        id: 4,
        label: 'Boletos conta agua',
        value: '200,00',
        date: '11/12/2022',
        type: 0 //despesas
    },
    {
        id: 5,
        label: 'Boletos conta luz',
        value: '200,00',
        date: '11/12/2022',
        type: 0 //despesas
    },
]

export default function Home() {
    return (
        <View style={styles.conteiner}>
            <Header />
            <Balance />
            <Actions/>

            <Text style={styles.title}>Ultimas movimentacoes</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => { String(item.id) }}
                renderItem={({ item }) => <Moviments data={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,

    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
})



