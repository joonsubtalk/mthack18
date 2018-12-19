import * as React from 'react';
import { StyleSheet, Text, View, VrButton, asset, Image } from 'react-360';
import { connect } from 'react-redux';
import { acceptTerms } from '../actions';

/**
 * Render a description of the currently-selected model.
 * Connected to the global store to receive inputs.
 */
class Gallery extends React.Component {
  render() {
    if (this.props.gdpr.hasAcceptedTerms) return null;

    return (<View style={styles.wrapper}>
            <Image
                source={asset('home-hero-md.jpg')}
                style={{
                    width: 900,
                    height: 400,
                    layoutOrigin: [0, 0]}} />
    </View>)
  }
};

const styles = StyleSheet.create({
  wrapper: {
    width: 900,
    height: 400,
    borderColor: '#fff',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: '#282B2D',
    textAlign: 'center',
  },
  privacy: {
    textDecorationLine: 'underline'
  },
  btn: {
    fontSize: 20,
    color: '#ffffff',
  },
  cta: {
    backgroundColor: '#282B2D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  }
});

const mapStateToProps = (state) => {
  const { gdpr } = state;

  return { gdpr };
};

export default connect(mapStateToProps, { acceptTerms })(Gallery);
