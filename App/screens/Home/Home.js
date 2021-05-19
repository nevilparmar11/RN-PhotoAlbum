import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PhotoItem from '../../components/PhotoItem';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.data,
    };
  }
  reorder = () => {
    const currentArr = this.state.dataSource;
    this.randomizeArray(currentArr, currentArr.length);
    this.setState({
      dataSource: currentArr,
    });
  };
  randomizeArray = (array, n) => {
    if (n <= 1) {
      return;
    }
    const index = Math.floor(Math.random() * n);
    const tmp = array[n - 1];
    array[n - 1] = array[index];
    array[index] = tmp;
    this.randomizeArray(array, n - 1);
  };
  render() {
    return (
      <View style={styles.imagesContainer}>
        <FlatList
          horizontal={false}
          numColumns={3}
          data={this.state.dataSource}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          renderItem={({item}) => <PhotoItem url={item.url} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagesContainer: {},
});
