import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MovieScreen() {
    return (
        <View style={styles.container}>
            <Text>Movie Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export { MovieScreen };
