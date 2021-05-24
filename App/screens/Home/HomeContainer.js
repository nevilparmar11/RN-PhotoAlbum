import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import Home from './Home';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import {loadPhotos} from '../../actions/photoAction';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.loadPhotos();
  }

  render() {
    if (this.props.isLoading) {
      return <Loader />;
    }
    return (
      <View>
        <Header title="Photo Album" />
        <Home data={this.props.photos} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos,
    isLoading: state.isLoading,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadPhotos: () => dispatch(loadPhotos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
