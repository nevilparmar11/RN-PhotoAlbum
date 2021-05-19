import React from 'react';
import {ActivityIndicator, Text, View, StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator />
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
