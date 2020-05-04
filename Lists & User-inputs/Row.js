import React from 'react'
import { View, Text } from 'react-native'

const styles = StyleSheet.create({
  row:{padding:20},
})

const Row = ({ name, phone }) => (
  <View style={styles.row} >
    <Text>{name}</Text>
    <Text>{phone}</Text>
  </View>
);

export default Row
