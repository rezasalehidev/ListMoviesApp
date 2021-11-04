import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Colors from "../constants/Colors";

const CatMovies = ({ item, active, setActiveCat }) => {
    const { width } = Dimensions.get("screen");
    const getWidth = (w) => (width / 100) * w;

    return (
        <TouchableOpacity
            style={[styles.CatBox, { width: getWidth(25), height: getWidth(10) }, { backgroundColor: active ? Colors.Active : Colors.White }]}
            activeOpacity={0.5}
            onPress={() => setActiveCat(item)}
        >
            <Text style={{ color: active ? Colors.White : Colors.Black, fontSize: 11 }}>{item}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    CatBox: {
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderColor: Colors.LightGray,
        borderWidth: 1,
        borderColor: "#eee",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CatMovies;
