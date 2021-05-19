import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import PhotoItem from '../../components/PhotoItem';

const {height, width} = Dimensions.get('window');

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
      <View>
        <Text style={styles.heading}>Scroll</Text>
        <FlatList
          style={styles.list}
          horizontal={true}
          data={this.state.dataSource}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          updateCellsBatchingPeriod={30}
          getItemLayout={(data, index) => ({
            length: 200,
            offset: 200 * index,
            index,
          })}
          renderItem={({item}) => (
            <PhotoItem url={item.url} title={item.title} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity style={styles.button} onPress={this.reorder}>
          <Text style={styles.buttonText}>Reorder the list</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 0.3 * height,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  list: {
    height: 200,
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: '#79b6cf',
    width: 0.5 * width,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    color: '#fff',
  },
});
