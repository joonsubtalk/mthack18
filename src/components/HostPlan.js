import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, VrButton, NativeModules } from 'react-360';
import { clearModal } from '../actions';
import { data } from '../consts/config';

class HostPlan extends React.Component {

  componentDidMount() {
  }

  render() {

    const Linking = NativeModules.LinkingManager;
    const {isModalActive, activeModal} = this.props.modal;
    if (!isModalActive) return null;

    const activePlan = data.hosting.filter((plan) => {
      return (plan.id).toLowerCase() === (activeModal).toLowerCase()
    });
    const {title, color, description, plans} = activePlan[0];
    const additionalStyles = {borderColor: color, color};
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={[styles.planTitle, additionalStyles]}>{title}</Text>
          <View>
            <VrButton onClick={()=>this.props.clearModal()}>
              <View style={styles.hitbox}>
                <Text style={styles.closeBtn}>close</Text>
              </View>
            </VrButton>
          </View>
        </View>
        <View style={styles.feature}>
          <Text style={styles.text}>{description}</Text>
        </View>
        <View style={styles.plans}>
          {
            plans && plans.length > 0
            ? plans.map((plan)=>{
                const extraStyle = {
                  borderColor: color,
                  borderBottomWidth: 2,
                }
                return <View key={plan.type} style={styles.type}>
                  <View style={extraStyle}>
                    <Text style={[styles.text, styles.bold]}>{plan.type}</Text>
                  </View>
                  <Text style={styles.text}>{plan.tag}</Text>
                  <View class={styles.filler}>
                    {plan.offerings.map((offering, idx)=> {
                      return <Text key={idx} style={styles.text}>+ {offering}</Text>
                    })}
                  </View>
                  <View style={styles.money}>
                    <Text style={[styles.text, additionalStyles]}>$</Text>
                    <Text style={[styles.text, styles.bold, additionalStyles]}>{plan.price}</Text>
                    <Text style={[styles.text, additionalStyles]}>/mo</Text>
                  </View>
                  <VrButton onClick={()=> Linking.openURL(plan.link)}>
                    <View style={{backgroundColor: color, padding: 10, justifyContent: 'center', alignItems:'center' }}>
                      <Text style={[styles.text, styles.dark]}>Start Building ></Text>
                    </View>
                  </VrButton>
                </View>
                })
            : null
          }
        </View>
        <View style={styles.extra}>
          <Text>General Info</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 825,
    height: 500,
    backgroundColor: 'rgba(40, 43, 45, .8)',
    borderColor: '#303050',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 15,
    zIndex: 9000,
    opacity: 1
  },
  plans: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10
  },
  type: {
    maxWidth: 300,
    minHeight: 300,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    padding: 20
  },
  feature: {
    backgroundColor: '#000',
    marginBottom: 30
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  text: {
    fontSize: 18,
    color: '#ffffff'
  },
  planTitle: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  closeBtn: {
    color: '#ffffff',
    fontSize: 20
  },
  hitbox: {
    backgroundColor: '#282B2D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  filler: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 'auto'
  },
  money: {
    flexDirection: 'row',
    marginTop:20,
    marginBottom:20
  },
  bold: {
    fontWeight: 'bold'
  },
  dark: {
    color: 'rgb(40, 43, 45)'
  }
});

const mapStateToProps = (state) => {
  const { modal } = state;

  return { modal };
};

export default connect(mapStateToProps, {clearModal})(HostPlan);
