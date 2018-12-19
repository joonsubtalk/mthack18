import React, { Component } from 'react';
import { Provider } from 'react-redux';
import HostPlan from '../components/HostPlan';
import { store } from '../store/store';

export default class LeftPanel extends Component {
    render() {
        return (
            <Provider store={store}>
                <HostPlan />
            </Provider>
        );
    }
}
