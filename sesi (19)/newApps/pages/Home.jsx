import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import React from 'react'

const Home = ( { navigation } ) =>
{
    return (
        <View style={ home.container }>
            <Text>Home</Text>
            <Button title="ke page post" onPress={ () => navigation.navigate( "Postpage" ) } />
            <StatusBar style='auto' />
        </View>
    )
}

const home = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
} );

export default Home