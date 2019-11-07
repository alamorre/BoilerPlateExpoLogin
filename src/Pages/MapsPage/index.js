import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { View, Text, StyleSheet } from 'react-native';

class MapsPage extends Component {
  state = {
    loading: false
  };

  render() {
    return (
      <View>
        <Text>
          Magic Windows
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapsPage);