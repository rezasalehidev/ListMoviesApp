import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import CatMovies from "../components/CatMovies";
import Seprator from "../components/Seprator";
import Colors from "../constants/Colors";

const data = ["All", "Action", "Comedy", "Romance", "Tarikhi", "Irani"];

export default function HomeScreen() {
    const [activeCat, setActiveCat] = useState("All");
    return (
        <ScrollView style={styles.container}>
            <StatusBar style="dark" translucent={false} backgroundColor={Colors.Yellow} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Now Playing</Text>
                <Text style={styles.headerSubtitle}>View All</Text>
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <CatMovies item={item} active={activeCat === item ? true : false} activeCat={activeCat} setActiveCat={(item) => setActiveCat(item)} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <Seprator width={20} />}
                    ListHeaderComponent={() => <Seprator width={20} />}
                    ListFooterComponent={() => <Seprator width={20} />}
                    keyExtractor={(item) => item}
                />
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
