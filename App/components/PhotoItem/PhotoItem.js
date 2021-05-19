import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const PhotoItem = ({url, title}) => {
  return (
    <View>
      <Image
        source={{
          uri: url,
          cache: 'force-cache',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  title: {
    width: 200,
    height: 50,
    top: 75,
    position: 'absolute',
    transform: [{rotate: '45deg'}],
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor: '#bbb',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {height: 5, width: 0},
  },
});

export default PhotoItem;
