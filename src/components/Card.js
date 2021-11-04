import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import Images from "../constants/Images";
import { Ionicons } from "@expo/vector-icons";

const Card = () => {
    const [like, setLike] = useState(false);
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.containerImage}>
                    <Image source={Images.IMDB} style={styles.imageImdb} resizeMethod="cover" />
                    <Text style={styles.numberImdb}>9</Text>
                </View>
                <View style={styles.heartLike}>
                    <TouchableOpacity onPress={() => setLike(!like)}>
                        <Ionicons name={like ? "heart" : "heart-outline"} size={24} color={like ? "red" : "black"} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.TextMovie} numberOfLines={2}>
                    Movie Name
                </Text>
                <View style={styles.containerText}>
                    <Text>Persian(P/U)</Text>
                    <View style={styles.containerHear}>
                        <Text>90%</Text>
                        <Ionicons name="heart" size={24} color="black" />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 230,
        height: 340,
        backgroundColor: Colors.Active,
        marginVertical: 7,
        borderRadius: 12,
        elevation: 2,
        shadowColor: "#000",
    },
    containerImage: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: Colors.Yellow,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 25,
    },
    numberImdb: {
        color: "red",
        fontWeight: "bold",
        marginRight: 3,
    },
    heartLike: {
        position: "absolute",
        right: 5,
        bottom: 5,
    },
    imageImdb: { height: 25 },
    TextMovie: {
        width: 230,
        color: Colors.LightGray,
    },
    containerText: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerHear: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default Card;
