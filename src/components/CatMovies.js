import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const CatMovies = ({ item, active, setActiveCat }) => {
    return (
        <TouchableOpacity style={[styles.CatBox, { backgroundColor: active ? Colors.Active : Colors.White }]} activeOpacity={0.5} onPress={() => setActiveCat(item)}>
            <Text style={{ color: active ? Colors.White : Colors.Black }}>{item}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    CatBox: {
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: Colors.White,
        borderColor: Colors.LightGray,
    },
});

export default CatMovies;
