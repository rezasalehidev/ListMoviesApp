import React from "react";
import { View } from "react-native";

const Seprator = ({ width, height }) => {
    return <View style={{ width, height }} />;
};

Seprator.defaultProps = {
    width: 0,
    height: 0,
};

export default Seprator;
