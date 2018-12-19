import React, { Component } from 'react';
import { StyleSheet, Text, View, VrButton } from 'react-360';
import { connect } from 'react-redux';
import {
loadAWSModal,
loadGridModal,
loadMWPModal,
loadVPSModal } from '../actions';

class Plans extends Component {
    state = {
        isHovering : false
    }

    loadModal = () => {
        if (!this.props.modal.isModalActive)
            this.props[`load${this.props.id}Modal`]();
    }

    render() {
        const {title, description, color, id} = this.props;
        const { isHovering } = this.state;
        const extraStyle = {borderColor: color};
        const hoverMode = {backgroundColor: '#191919'}
        return (
        <VrButton onClick={this.loadModal} >
            <View onEnter={()=>{this.setState({isHovering: true})}}
                onExit={()=>{this.setState({isHovering: false})}}
                style={[styles.wrapper, extraStyle, isHovering ? hoverMode : null]}>
                
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text>Learn More</Text>
            </View>
        </VrButton>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
      width: 230,
      backgroundColor: '#262626',
      borderTopWidth: 5,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      padding: 15,
      paddingTop: 10,
      minHeight: 275
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 22,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 'auto'
    },
});

const mapStateToProps = (state) => {
    const { current, posts, modal } = state;

    return { current, posts, modal };
};
  
export default connect(mapStateToProps, {
    loadAWSModal,
    loadGridModal,
    loadMWPModal,
    loadVPSModal})(Plans);