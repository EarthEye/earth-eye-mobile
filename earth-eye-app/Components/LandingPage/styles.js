import { StyleSheet } from "react-native";
import { Row } from "native-base";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    opacity: 0.6,
    flex: 1,
    justifyContent: "row",
    justifyContent: "center",
    alignItems: "stretch"
  },
  topheader: {
    backgroundColor: "skyblue",
    opacity: 0
  },
  icon: {
    color: "white",
    fontSize: 17,
    opacity: 1
  },
  footericon: {
    color: "white",
    fontSize: 18
  },
  text: {
    color: "white",
    fontSize: 20,
    marginTop: 19,
    opacity: 1,
    position: "relative"
  },
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 10,
    opacity: 1
  },
  footerbutton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17
  },
  footer: {
    backgroundColor: "#5cd6d6",
    opacity: 0.6
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgb(8,80,129)",
    opacity: 1
  },
  background: { height: "100%", width: "100%", flex: 1 },
  transparent: {
    backgroundColor: "skyblue"
  }
});
export default styles;
