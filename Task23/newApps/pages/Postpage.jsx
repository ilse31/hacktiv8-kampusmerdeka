import React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Postpage = () =>
{
    return (
        <View style={ postpage.container }>
            <Text>PostPage</Text>
            <StatusBar style='auto' />
        </View>
    )
}

const postpage = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
} );

export default Postpage