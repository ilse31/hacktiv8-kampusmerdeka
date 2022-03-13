import React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const CommentPage = () =>
{
    return (
        <View style={ coment.container }>
            <Text>KomenPage</Text>
            <StatusBar style='auto' />
        </View>
    )
}

const coment = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
} );

export default CommentPage