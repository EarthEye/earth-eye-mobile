import React, { Component } from "react";

// NativeBase Components
import { Container, Header, Button, Text, View } from "native-base";

// Style
import styles from "./styles";

// Components
import Compare from "../Compare";
// eventualy import Measure as well

class LandingPage extends Component {
  handlePressCompare() {
    this.props.navigation.navigate("Compare");
  }
  handlePressMeasure() {
    this.props.navigation.navigate("Measure");
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.container}>
          <Button onPress={() => this.handlePressCompare()}>
            <Text>Compare</Text>
          </Button>
          <Button onPress={() => this.handlePressMeasure()}>
            <Text>Measure</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default LandingPage;
