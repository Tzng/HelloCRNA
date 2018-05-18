import React, {Component} from 'react';

const BagView = require('./components/BagView');
const LoginView = require('./components/LoginView');
const MyScrolView = require('./components/MyScrolView');

export default class first extends Component {
    render() {
        /*
                return <BagView />
        */
        return <MyScrolView />
    }
}