import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

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
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width / 3,
    height: width / 3,
  },
});

export default PhotoItem;
