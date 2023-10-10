import React from "react";
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

import { MotiView, MotiText } from "moti";

const setStatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Header() {
    return(
        <View style={styles.conteiner}>
            <MotiView 
                style={styles.content}
                from={{
                    translateY: -150,
                    opacity: 0
                }}
                animate={{
                    translateY: 0,
                    opacity: 1
                }}
                transition={{
                    type: 'timing',
                    duration: 900,
                    delay: 350
                }}
            >  
                <MotiText 
                    style={styles.userName}
                    from={{
                        translateX: -300,
                        opacity:0
                    }}
                    animate={{
                        translateX: 0,
                        opacity: 1
                    }}
                    transition={{
                        type:'timing',
                        delay: 900,
                        duration: 900

                    }}
                >Carlos henrique</MotiText>
                <TouchableOpacity style={styles.buttonUser} activeOpacity={0.6}>
                    <Feather name="user" size={27} color="#fff" />
                </TouchableOpacity>
            </MotiView>                                                                                                                         
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: '#8000ff',
        paddingTop: setStatusBarHeight,
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingBottom: 44
    },

    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    userName:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },

    buttonUser:{
        backgroundColor: 'rgba(255,255,255,0.5)',
        width: 44,
        height: 44,
        borderRadius: 44/2,
        justifyContent: 'center',
        alignItems: 'center'

    }
})