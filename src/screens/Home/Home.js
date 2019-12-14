import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CountDownBlurb from '../../components/CountDownBlurb/CountDownBlurb.js'

const Home = () => {
  return (
    <View>
      <Text>Best guess:</Text>
      <View style={styles.hr} />
      <Text>Favorites:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});

export default Home
