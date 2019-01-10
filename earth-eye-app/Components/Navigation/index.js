import React from "react";
import { createStackNavigator } from "react-navigation";

// Components
import LandingPage from "../LandingPage";
import Compare from "../Compare";
import Measure from "../Measure";

export default createStackNavigator(
  {
    LandingPage: LandingPage,
    Compare: Compare,
    Measure: Measure
  },
  {
    initialRouteName: "LandingPage",
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(8,80,129)"
    }
  }
);
