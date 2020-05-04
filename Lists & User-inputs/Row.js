import React from 'react'
import { View, Text } from 'react-native'

const Row = ({ name, phone }) => (
  <View>
    <Text>{name}</Text>
    <Text>{phone}</Text>
  </View>
);

export default Row
