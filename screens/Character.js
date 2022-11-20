import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Character = () => {
    return (
        <View style={styles.container}>
            <Text>Characters</Text>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb'
    }
})

export default Character;