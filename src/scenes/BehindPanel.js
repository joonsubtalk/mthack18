import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Gallery from '../components/Gallery';
import { store } from '../store/store';

export default class BehindPanel extends Component {
    render() {
        return (
            <Provider store={store}>
                <Gallery />
            </Provider>
        );
    }
}
