import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import PhotoItem from '../../components/PhotoItem';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({item}) => {
    return <PhotoItem url={item.url} />;
  };

  keyExtractor = (item, index) => {
    return index.toString();
  };

  render() {
    return (
      <View>
        <FlatList
          numColumns={3}
          data={this.props.data}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}
