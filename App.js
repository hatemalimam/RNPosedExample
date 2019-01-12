import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Box from "./box";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  render() {
    const { isVisible } = this.state;
    return (
      <View style={styles.container}>
        <Box isVisible={isVisible ? "visible" : "hidden"} />
        <TouchableOpacity
          onPress={() => {
            this.setState({
              isVisible: true
            });
          }}
        >
          <Text>Show Box</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
