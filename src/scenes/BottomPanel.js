import React, { Component } from 'react';
import { Provider } from 'react-redux';
import GDPR from '../components/GDPR';
import { store } from '../store/store';

export default class LeftPanel extends Component {
    render() {
        return (
            <Provider store={store}>
                <GDPR />
            </Provider>
        );
    }
}
