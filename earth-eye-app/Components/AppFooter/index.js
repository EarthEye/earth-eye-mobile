import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { withNavigation } from "react-navigation";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Card,
  CardItem,
  Thumbnail
} from "native-base";

class AppFooter extends Component {
  handlePressCompare() {
    this.props.navigation.navigate("Compare");
  }
  handlePressMeasure() {
    this.props.navigation.navigate("Measure");
  }
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button onPress={() => this.handlePressCompare()}>
              <Text>Compare</Text>
            </Button>
            <Button onPress={() => this.handlePressMeasure()}>
              <Text>Measure</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default withNavigation(AppFooter);
