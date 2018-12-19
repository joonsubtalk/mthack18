import * as React from 'react';
import { StyleSheet, Text, View, VrButton } from 'react-360';
import { connect } from 'react-redux';
import { acceptTerms } from '../actions';

/**
 * Render a description of the currently-selected model.
 * Connected to the global store to receive inputs.
 */
class GDPR extends React.Component {
  render() {
    if (this.props.gdpr.hasAcceptedTerms) return null;

    return (<View style={styles.wrapper}>
        <Text style={styles.text}>Our VRApp uses BitCookies. By agreeing to use our VRApp, you are agreeing to our BitCookies privacy policy.</Text>
        <VrButton onClick={()=>{this.props.acceptTerms()}}>
            <View style={styles.cta}>
                    <Text style={styles.btn}>{"Accept & Close".toUpperCase()}</Text>
            </View>
        </VrButton>
    </View>)
  }
};

const styles = StyleSheet.create({
  wrapper: {
    width: 1200,
    height: 75,
    backgroundColor: '#20bc7e',
    borderColor: '#303050',
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

export default connect(mapStateToProps, { acceptTerms })(GDPR);
