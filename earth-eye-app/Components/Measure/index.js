import React, { Component } from "react";

// NativeBase Components
import { Container, Header, Text } from "native-base";

// Components
import AppFooter from "../AppFooter";
import CameraScreen from "../CameraScreen";

// Style
import styles from "./styles";

class Measure extends Component {
  render() {
    return (
      <Container>
        <Text>Measure Page</Text>
        <CameraScreen />
        <AppFooter />
      </Container>
    );
  }
}

export default Measure;
