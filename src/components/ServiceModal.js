import React from 'react';
import { StyleSheet,
  Text,
  View,
  asset,
  VrButton
} from 'react-360';
import Entity from 'Entity'
import { connect } from 'react-redux';
import Plans from './Plans';
import {data} from '../consts/config.js';

/**
 * Render a description of the currently-selected model.
 * Connected to the global store to receive inputs.
 */
class ServiceModal extends React.Component {

  render() {

    return (
      <View style={styles.wrapper}>
        <View style={styles.hero}>
          <View style={styles.heroQuote}>
            <Entity source={{obj: asset('mtlogo.obj')}} style={{transform: [
              {translate: [0, 60, 0]}
            ]}} />
            <Text style={styles.heroText}>{('Your host. From idea to enterprise.').toUpperCase()}</Text>
          </View>
        </View>
        <View style={styles.plans}>
          {
            data.hosting.map((plan, idx) => {
              return <Plans key={idx} {...plan}/>
            })
          }
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    width: 1000,
    height: 500,
    backgroundColor: 'rgba(40, 43, 45, 0.75)',
    borderColor: '#303050',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 10,
  },
  hero: {
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  heroText: {
    color: '#ffffff',
  },
  heroQuote: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderColor: '#ffffff',
    borderBottomWidth: 2,
  },
  plans: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  }
});

const mapStateToProps = (state) => {
  const { current, posts, modal } = state;

  return { current, posts, modal };
};

export default connect(mapStateToProps)(ServiceModal);
