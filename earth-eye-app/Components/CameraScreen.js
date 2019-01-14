import React, { Component } from "react";
import ViewPhotos from "./ViewPhotos";
import {
  CameraRoll,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
  Container
} from "react-native";

class CameraScreen extends Component {
  state = {
    showPhotoGallery: false,
    photoArray: []
  };

  getPhotosFromGallery() {
    CameraRoll.getPhotos({ first: 10 }).then(res => {
      let photoArray = res.edges;
      this.setState({ showPhotoGallery: true, photoArray: photoArray });
    });
  }
  render() {
    if (this.state.showPhotoGallery) {
      return <ViewPhotos photoArray={this.state.photoArray} />;
    }
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.getPhotosFromGallery()}>
          <Image source={require("../assets/icon.png")} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CameraScreen;
