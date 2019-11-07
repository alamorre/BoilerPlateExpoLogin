import React, { Component } from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MapsPage from './Pages/MapsPage';
import LoginPage from './Pages/LoginPage';

export default class RouterComponent extends Component {
  render() {
    return (
        <Router>
            <Stack key="root">
                <Scene key="loginPage" component={LoginPage} title="Welcome" hideNavBar={1} initial />
                <Scene key="mapsPage" component={MapsPage} title="Maps" hideNavBar={1} />
            </Stack>
        </Router>
    );
  }
};
