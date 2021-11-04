import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Colors from "../constants/Colors";

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <StatusBar style="dark" translucent={false} backgroundColor={Colors.Yellow} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Now Playing</Text>
                <Text style={styles.headerSubtitle}>View All</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BasicColor,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 28,
    },
    headerSubtitle: {
        color: Colors.Active,
        fontSize: 13,
    },
});

export { HomeScreen };
