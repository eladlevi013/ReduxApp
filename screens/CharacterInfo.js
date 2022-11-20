import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CharacterInfo = () => {
    return (
        <View style={styles.container}>
            <Text>Characters Info</Text>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb'
    }
})

export default CharacterInfo;