import React, { Component } from "react";

// NativeBase Components
import { Container, Header, Text, Input } from "native-base";
import { Image } from "react-native";

// Components
import AppFooter from "../AppFooter";
import CameraScreen from "../CameraScreen";

// Style
import styles from "./styles";

class Compare extends Component {
  render() {
    return (
      <Container>
        <Text>Compare Page</Text>
        <CameraScreen />
        <CameraScreen />
        <AppFooter />
      </Container>
    );
  }
}

export default Compare;
