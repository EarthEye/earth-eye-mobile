import { decorate, observable, action, computed } from "mobx";
// import ImgToBase64 from "react-native-image-base64";
// import RNFetchBlob from "react-native-fetch-blob";

class PhotoStore {
  constructor() {
    this.list = [];
  }

  addPhotoToList(uri) {}
  // addPhotoToList(photorui) {
  //   const fs = RNFetchBlob.fs;
  //   let imagePath = null;
  //   RNFetchBlob.config({
  //     fileCache: true
  //   })
  //     .fetch("GET", photorui)
  //     .then(resp => {
  //       impagePath = resp.path();
  //       return resp.readFile("base64");
  //     })
  //     .then(base64Data => {
  //       console.log(base64Data);
  //     });
  // }
  // addPhotoToList(photouri) {
  //   ImgToBase64.getBase64String(photouri)
  //     .then(base64String => encodedImage(base64String))
  //     .catch(err => encodedImage(err));

  //   this.list.push(base64string);
  // }

  removePhotoFromList(photouri) {
    this.list = this.list.filter(listPhoto => listPhoto !== photouri);
  }
}

decorate(PhotoStore, {
  list: observable
});

export default new PhotoStore();
