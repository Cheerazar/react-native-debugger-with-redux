import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { increaseCount as increase, decreaseCount as decrease } from './actions';

const Counter = ({ value, increaseCount, decreaseCount }) => (
  <View style={styles.container}>
    <View style={styles.count}>
      <Text style={styles.countText}>Current count: {value}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        onPress={decreaseCount}
        style={styles.button}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={increaseCount}
        style={styles.button}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableHighlight>
    </View>
  </View>
);

Counter.propTypes = {
  decreaseCount: PropTypes.func.isRequired,
  increaseCount: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  value: state.press.value,
});

export default connect(mapStateToProps, {
  increaseCount: increase,
  decreaseCount: decrease,
})(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  count: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  countText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: '#373737',
    height: 32,
    marginRight: 20,
    marginLeft: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
